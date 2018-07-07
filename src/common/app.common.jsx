import axios from 'axios';
import { $$api } from '../api/api.database';

/**
 * 路由重定向，并将相关数据导入到不同的数据集中
 * 获取数据示例：
 * {
 *    "release" ： 访问链接
 *    "share" ： 分享信息数据
 *    "bg" ： 背景组件数据
 *    "ui" ： 展示组件数据
 * }
 * @param data 数据集
 * @param up_func  数据更新函数
 * @param choose_up_func  选择数据更新函数
 */
const router_redirect_common = (data, up_func, choose_up_func) => {
  switch (data.state) {
    case 'createH5':
      if (data.guide) {
        up_func('GUIDE', { guide: true });
      }
      return 'visual';
    case 'editorH5':
      if ($$api.get('surroundings') === 'development') {
        axios
          .get(`${$$api.getIn(['development', 'editorH5'])}`)
          .then(response => {
            up_func('H5_DATA', response.data.ui);
            up_func('BG_UI', response.data.bg);
            up_func('SHARE_MSG', response.data.share);
            up_func('RELEASE', { url: response.data.release });
            choose_up_func(
              'CHOOSE_UI',
              { number: '' },
              { content: true, choose: false }
            );
          });
      }
      if ($$api.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        const ajax_data = {
          id: data.id,
          number: data.number,
        };
        params.append('data', `${ajax_data}`);
        axios
          .post(`${$$api.getIn(['produce', 'editorH5'])}`, params)
          .then(response => {
            up_func('H5_DATA', response.data.ui);
            up_func('BG_UI', response.data.bg);
            up_func('SHARE_MSG', response.data.share);
            up_func('RELEASE', { url: response.data.release });
            choose_up_func(
              'CHOOSE_UI',
              { number: '' },
              { content: true, choose: false }
            );
          })
          .catch(function(error) {
            console.log('访问服务器错误', error);
          });
      }
      return 'visual';
    case 'shareMsg':
      if ($$api.get('surroundings') === 'development') {
        axios
          .get(`${$$api.getIn(['development', 'showH5'])}`)
          .then(response => {
            up_func('H5_DATA', response.data.ui);
            up_func('BG_UI', response.data.bg);
            up_func('SHARE_MSG', response.data.share);
            up_func('RELEASE', { url: response.data.release });
            choose_up_func(
              'CHOOSE_UI',
              { number: '' },
              { content: true, choose: false }
            );
          });
      }
      if ($$api.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        const ajax_data = {
          id: data.id,
          number: data.number,
        };
        params.append('data', `${ajax_data}`);
        axios
          .post(`${$$api.getIn(['produce', 'showH5'])}`, params)
          .then(response => {
            up_func('H5_DATA', response.data.ui);
            up_func('BG_UI', response.data.bg);
            up_func('SHARE_MSG', response.data.share);
            up_func('RELEASE', { url: response.data.release });
            choose_up_func(
              'CHOOSE_UI',
              { number: '' },
              { content: true, choose: false }
            );
          })
          .catch(function(error) {
            console.log('访问服务器错误', error);
          });
      }
      return 'preview';
    case 'release':
      if ($$api.get('surroundings') === 'development') {
        axios
          .get(`${$$api.getIn(['development', 'showH5'])}`)
          .then(response => {
            up_func('H5_DATA', response.data.ui);
            up_func('BG_UI', response.data.bg);
            up_func('SHARE_MSG', response.data.share);
            up_func('RELEASE', { url: response.data.release });
            choose_up_func(
              'CHOOSE_UI',
              { number: '' },
              { content: true, choose: false }
            );
          });
      }
      if ($$api.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        const ajax_data = {
          id: data.id,
          number: data.number,
        };
        params.append('data', `${ajax_data}`);
        axios
          .post(`${$$api.getIn(['produce', 'showH5'])}`, params)
          .then(response => {
            up_func('H5_DATA', response.data.ui);
            up_func('BG_UI', response.data.bg);
            up_func('SHARE_MSG', response.data.share);
            up_func('RELEASE', { url: response.data.release });
            choose_up_func(
              'CHOOSE_UI',
              { number: '' },
              { content: true, choose: false }
            );
          })
          .catch(function(error) {
            console.log('访问服务器错误', error);
          });
      }
      return 'release';
    case 'showH5':
      if ($$api.get('surroundings') === 'development') {
        axios
          .get(`${$$api.getIn(['development', 'showH5'])}`)
          .then(response => {
            up_func('H5_DATA', response.data.ui);
            up_func('BG_UI', response.data.bg);
          });
      }
      if ($$api.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        const ajax_data = {
          id: data.id,
          number: data.number,
        };
        params.append('data', `${ajax_data}`);
        axios
          .post(`${$$api.getIn(['produce', 'showH5'])}`, params)
          .then(response => {
            up_func('H5_DATA', response.data.ui);
            up_func('BG_UI', response.data.bg);
          })
          .catch(function(error) {
            console.log('访问服务器错误', error);
          });
      }
      return 'html5';
    default:
      return 'visual';
  }
};

export { router_redirect_common };
