import { message } from 'antd';

export const page_loading = props => {
  return props.error
    ? message.error('页面加载失败，请刷新浏览器')
    : /*判断加载是否超时*/
      props.timedOut
      ? message.warning('网速过慢，请刷新浏览器')
      : /*文件正在加载时呈现*/
        props.pastDelay
        ? ''
        : null;
};
