import axios from 'axios';

export const access_api = (data, up_func) => {
  return new Promise((resolve, reject) => {
    //开发环境
    // resolve('visual');
    // 生产环境
    if (data.state && data.sid) {
      let params = new URLSearchParams();
      params.append('sid', data.sid);
      axios.post(`http://h5.e7wei.com/Index/getData`, params).then(response => {
        if (response.data.error) {
          reject(response.data.url);
        } else {
          const share = {
            title: response.data.info.title,
            cover: response.data.info.cover,
            desc: response.data.info.desc,
          };
          up_func('SHARE_MSG', share);
          up_func('RELEASE', { url: response.data.url });
          up_func('SID', { sid: data.sid });
          if (response.data.info.ui) {
            up_func(
              'EDITOR_UI',
              { number: '' },
              { content: true, choose: false }
            );
            up_func('H5_DATA', JSON.parse(response.data.info.ui));
            up_func('BG_UI', JSON.parse(response.data.info.bg));
          }
          switch (data.state) {
            case 'editorH5':
              return resolve('visual');
            case 'shareMsg':
              return resolve('preview');
            case 'release':
              return resolve('release');
            case 'h5View':
              return resolve('h5View');
            default:
              return reject('http://my.e7wei.com/404.html');
          }
        }
      });
    } else {
      reject('http://my.e7wei.com/404.html');
    }
  });
};
