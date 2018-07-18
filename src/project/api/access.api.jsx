import axios from 'axios';
import { $$env } from '../../env';
import { fromJS } from 'immutable';

const access_api = (data, up_func) => {
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
                title: response.data.info.title,
                cover: response.data.info.cover,
                desc: response.data.info.desc,
              };
              if (data.guide) {
                up_func('GUIDE', { guide: true });
              }
              if (response.data.info.ui) {
                up_func(
                  'EDITOR_UI',
                  { number: '' },
                  {
                    content: true,
                    choose: false,
                  }
                );
              } else {
                up_func(
                  'EDITOR_UI',
                  { number: '' },
                  {
                    content: false,
                    choose: false,
                  }
                );
              }
              up_func(
                'H5_DATA',
                response.data.info.ui ? response.data.info.ui : []
              );
              up_func(
                'BG_UI',
                response.data.info.bg ? response.data.info.bg : {}
              );
              up_func('SHARE_MSG', share);
              up_func('RELEASE', {
                url: response.data.info.url,
              });
              if (data.state === 'editorH5') {
                resolve('visual');
              }
              if (data.state === 'shareMsg') {
                resolve('preview');
              }
              if (data.state === 'release') {
                resolve('release');
              }
              if (data.state === 'renderH5') {
                resolve('renderH5');
              }
            }
          });
      }
      if ($$env.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        params.append('sid', data.sid);
        axios
          .post($$env.getIn(['produce', 'access']), params)
          .then(response => {
            if (response.data.error) {
              reject(response.data.link);
            } else {
              const share = {
                title: response.data.info.title,
                cover: response.data.info.cover,
                desc: response.data.info.desc,
              };
              if (response.data.guide) {
                up_func('GUIDE', { guide: true });
              }
              if (JSON.parse(response.data.info.ui)) {
                up_func(
                  'EDITOR_UI',
                  { number: '' },
                  {
                    content: true,
                    choose: false,
                  }
                );
              } else {
                up_func(
                  'EDITOR_UI',
                  { number: '' },
                  {
                    content: false,
                    choose: false,
                  }
                );
              }
              up_func(
                'H5_DATA',
                JSON.parse(response.data.info.ui)
                  ? JSON.parse(response.data.info.ui)
                  : []
              );
              up_func(
                'BG_UI',
                JSON.parse(response.data.info.bg)
                  ? JSON.parse(response.data.info.bg)
                  : {}
              );
              up_func('RELEASE', { url: response.data.info.url });
              up_func('SHARE_MSG', share);
              if (data.state === 'editorH5') {
                resolve('visual');
              }
              if (data.state === 'shareMsg') {
                resolve('preview');
              }
              if (data.state === 'release') {
                resolve('release');
              }
              if (data.state === 'renderH5') {
                resolve('renderH5');
              }
            }
          })
          .catch(error => {
            console.log(error);
            // reject("http://my.e7wei.com/404.html");
          });
      }
    } else {
      reject('http://my.e7wei.com/404.html');
    }
  });
};

export { access_api };
