import React from 'react';
import { message, Spin } from 'antd';
import Loadable from 'react-loadable';

const loading_style = {
  style: {
    height: '100vh',
    display: ' flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
};
const Loading = props => {
  if (props.timedOut) {
    message.warning('网速过慢，请刷新浏览器');
  }
  if (props.error) {
    return message.error('页面加载失败，请刷新浏览器');
  } else if (props.pastDelay) {
    return (
      <div {...loading_style}>
        <Spin tip={'拼命加载中......'} size="large" />
      </div>
    );
  } else {
    return null;
  }
};

export const VisualLoadable = Loadable({
  loader: () => import('./visual/visual.page'), // 文件路径
  loading: Loading, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
export const PreviewLoadable = Loadable({
  loader: () => import('./preview/preview.page'), // 文件路径
  loading: Loading, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
export const ReleaseLoadable = Loadable({
  loader: () => import('./release/release.page'), // 文件路径
  loading: Loading, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
export const H5ViewLoadable = Loadable({
  loader: () => import('./renderh5/render_h5'), // 文件路径
  loading: Loading, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
