import React from 'react';
import { message, Spin } from 'antd';
import Loadable from 'react-loadable';

const Loading = props => {
  if (props.timedOut) {
    message.warning('网速过慢，请刷新浏览器');
  }
  if (props.error) {
    return message.error('页面加载失败，请刷新浏览器');
  } else if (props.pastDelay) {
    return (
      <div
        style={{
          height: '100vh',
          display: ' flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 'auto',
        }}
      >
        <Spin tip={'拼命加载中......'} size="large" />
      </div>
    );
  } else {
    return null;
  }
};

export const VisualLoadable = Loadable({
  loader: () => import('../app/Web/visual/visual.page'), // 文件路径
  loading: Loading, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
export const PreviewLoadable = Loadable({
  loader: () => import('../app/Web/preview/preview.page'), // 文件路径
  loading: Loading, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
export const ReleaseLoadable = Loadable({
  loader: () => import('../app/Web/release/release.page'), // 文件路径
  loading: Loading, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
export const H5ViewLoadable = Loadable({
  loader: () => import('../app/Web/h5view/h5view'), // 文件路径
  loading: Loading, // 加载时显示的组件
  timeout: 6000, // 超时时间
});
