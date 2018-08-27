import axios from 'axios';

export const access_api = (sid, state, up_func) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append('sid', sid);
    switch (state) {
      case 'h5View':
        axios
          .post(`http://${window.location.host}/view/getData`, params)
          .then(response => {
            if (response.data.error) {
              reject(response.data.url);
            } else {
              const share = {
                title: response.data.info.title,
                cover: response.data.info.cover,
                desc: response.data.info.desc
                  ? response.data.info.desc
                  : '我用易企微做了一个H5页面，你来看看吧！',
              };
              up_func('SHARE_MSG', share);
              up_func('RELEASE', {
                url: response.data.url,
                self: response.data.self,
              });
              up_func('SID', { sid: sid });
              if (response.data.info.music) {
                up_func('MUSIC_UI', {
                  music_url: JSON.parse(response.data.info.music).music_url,
                  desc: JSON.parse(response.data.info.music).desc,
                });
              }
              if (response.data.info.ui) {
                up_func('H5_DATA', JSON.parse(response.data.info.ui));
                up_func('BG_UI', JSON.parse(response.data.info.bg));
              }
            }
          });
        return '';
      default:
        axios
          .post(`http://h5.e7wei.com/Index/getData`, params)
          .then(response => {
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
              if (response.data.info.music) {
                up_func('MUSIC_UI', {
                  music_url: JSON.parse(response.data.info.music).music_url,
                  desc: JSON.parse(response.data.info.music).desc,
                });
              }
              up_func('SID', { sid: sid });
              if (response.data.info.ui) {
                up_func('H5_DATA', JSON.parse(response.data.info.ui));
                up_func('BG_UI', JSON.parse(response.data.info.bg));
              }
            }
          });
        return '';
    }
  });
};
