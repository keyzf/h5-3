import axios from 'axios';
import { $$background_database } from '../../ui/background/background.database';

const access_api = (data, up_func) => {
  const access_func = (resolve, reject, response) => {
    if (response.error) {
      reject(response.url);
    } else {
      const share = {
        title: response.info.title,
        cover: response.info.cover,
        desc: response.info.desc,
      };
      up_func('SHARE_MSG', share);
      up_func('RELEASE', { url: response.url });
      up_func('SID', { sid: data.sid });
      if (response.info.ui) {
        up_func('EDITOR_UI', { number: '' }, { content: true, choose: false });
        up_func('H5_DATA', JSON.parse(response.info.ui));
        up_func('BG_UI', JSON.parse(response.info.bg));
      } else {
        up_func('EDITOR_UI', { number: '' }, { content: false, choose: false });
        up_func('H5_DATA', []);
        up_func('BG_UI', $$background_database);
      }
      switch (data.state) {
        case 'editorH5':
          return resolve('visual');
        case 'shareMsg':
          return resolve('preview');
        case 'release':
          return resolve('release');
        case 'renderH5':
          return resolve('renderH5');
        default:
          return reject('http://my.e7wei.com/404.html');
      }
    }
  };

  return new Promise((resolve, reject) => {
    if (data.state && data.sid) {
      let params = new URLSearchParams();
      params.append('sid', data.sid);
      axios.post(`http://h5.e7wei.com/Index/getData`, params).then(response => {
        access_func(resolve, reject, response.data);
      });
    } else {
      reject('http://my.e7wei.com/404.html');
    }
  });
};

export { access_api };
