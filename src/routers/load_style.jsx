import React from 'react';
import { message, Spin } from 'antd';

/**
 * 文件加载中使用的样式
 * @type {{style: {height: string, display: string, justifyContent: string, alignItems: string, margin: string}}}
 */
const page_loading_style = {
  style: {
    height: '100vh',
    display: ' flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
};

/**
 * 加载文件时判断文件处于那种状态，不同的状态显示不同的信息
 * @param props
 * @returns {() => void}
 */
export const page_Loading = props => {
  /*判断文件是否加载成功*/
  return props.error ? (
    message.error('文件未成功加载，可能由于网络未连接')
  ) : /*判断加载是否超时*/
  props.timedOut ? (
    message.warning('网速过慢，文件加载超时......')
  ) : /*文件正在加载时呈现*/
  props.pastDelay ? (
    <div {...page_loading_style}>
      <Spin tip={'文件正在加载中......'} size="large" />
    </div>
  ) : null;
};
