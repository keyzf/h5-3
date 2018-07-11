import axios from 'axios';
import { $$env } from '../env';

const access_api = (data, up_func, choose_up_func) => {
  return new Promise((resolve, reject) => {
    if (data.state || data.sid) {
      if ($$env.get('surroundings') === 'development') {
        axios
          .get(`${$$env.getIn(['development', 'access'])}`)
          .then(response => {
            if (response.data.error) {
              reject(response.data.link);
            } else {
              const share = {
                title: { value: response.data.info.title },
                cover: { value: response.data.info.cover },
                desc: { value: response.data.info.desc },
              };
              if (data.guide) {
                up_func('GUIDE', { guide: true });
              }
              up_func('USER_ID', data.sid);
              up_func('H5_DATA', response.data.info.ui);
              up_func('BG_UI', response.data.info.bg);
              up_func('SHARE_MSG', share);
              up_func('RELEASE', { url: response.data.url });
              choose_up_func(
                'CHOOSE_UI',
                { number: '' },
                { content: true, choose: false }
              );
              if (data.state === 'editorH5') {
                resolve('visual');
              }
              if (data.state === 'shareMsg') {
                resolve('preview');
              }
              if (data.state === 'release') {
                resolve('release');
              }
            }
          })
          .catch(() => {
            reject('');
          });
      }
      if ($$env.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        params.append('sid', data.sid);
        axios
          .post(`${$$env.getIn(['produce', 'access'])}`, params)
          .then(response => {
            if (response.data.error) {
              reject(response.data.link);
            } else {
              const share = {
                title: response.data.info.title,
                cover: response.data.info.cover,
                desc: response.data.info.desc,
              };
              up_func('GUIDE', { guide: true });
              up_func('H5_DATA', response.data.info.ui);
              up_func('BG_UI', response.data.info.bg);
              up_func('SHARE_MSG', share);
              up_func('RELEASE', { url: response.data.info.url });
              choose_up_func(
                'CHOOSE_UI',
                { number: '' },
                { content: true, choose: false }
              );
              if (data.state === 'editorH5') {
                resolve('visual');
              }
              if (data.state === 'shareMsg') {
                resolve('preview');
              }
              if (data.state === 'release') {
                resolve('release');
              }
            }
          })
          .catch(() => {
            reject('');
          });
      }
    } else {
      // 返回错误跳转链接
      reject('visual');
    }
  });
};

export { access_api };
