import React from 'react';
import { message, Spin } from 'antd';
import Loader from 'react-loaders';
import style from './routerStyle.module.scss';

/**
 * 页面加载动画
 * @param props
 * timeOut : 超时
 * pastDelay : 加载中
 * error ：页面加载失败
 * @returns {*}
 * @constructor
 */
export const LoadingAnimation = props => {
  // 超时
  if (props.timedOut) {
    message.warning('网速过慢，请检查网络连接');
  }
  // 未加载
  if (props.error) {
    return message.error('页面加载失败,请重新尝试');
  }
  // 加载中
  if (props.pastDelay) {
    return (
      <div className={style.loadingCenter}>
        <Spin tip={'玩命加载中......'} size="large" />
      </div>
    );
  }
  // 默认返回
  return null;
};

export const showH5 = props => {
  // 超时
  if (props.timedOut) {
    message.warning('网速过慢，请检查网络连接');
  }
  // 未加载
  if (props.error) {
    return message.error('页面加载失败,请重新尝试');
  }
  // 加载中
  if (props.pastDelay) {
    return (
      <div className={style.flex_center}>
        <Loader type="pacman" />
      </div>
    );
  }
  // 默认返回
  return null;
};
