import { message } from 'antd';

/**
 * 页面组件过渡动画
 */
export const component_loading = props => {
  return props.error
    ? message.error('部分组件未加载成功，请刷新页面')
    : /*判断加载是否超时*/
      props.timedOut
      ? message.warning('网速过慢，请刷新浏览器')
      : /*文件正在加载时呈现*/
        props.pastDelay
        ? ''
        : null;
};
