import axios from 'axios';
import { $$env } from '../../env';
import { $$background_database } from '../../ui/background/background.database';

const access_api = (data, up_func) => {
  const access_func = (resolve, reject, response) => {
    if (JSON.parse(response.error)) {
      reject(response.link);
    } else {
      if ($$env.get('surroundings') === 'development') {
        const share = {
          title: response.info.title,
          cover: response.info.cover,
          desc: response.info.desc,
        };
        up_func('SHARE_MSG', share);
        up_func('RELEASE', { url: response.url });
        if (data.guide) {
          up_func('GUIDE', { guide: true });
        }
        if (response.info.ui) {
          up_func(
            'EDITOR_UI',
            { number: '' },
            { content: true, choose: false }
          );
          up_func('H5_DATA', response.info.ui);
          up_func('BG_UI', response.info.bg);
        } else {
          up_func(
            'EDITOR_UI',
            { number: '' },
            { content: false, choose: false }
          );
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
      if ($$env.get('surroundings') === 'produce') {
        const share = {
          title: response.info.title,
          cover: response.info.cover,
          desc: response.info.desc,
        };
        up_func('SHARE_MSG', share);
        up_func('RELEASE', { url: response.url });
        if (data.guide) {
          up_func('GUIDE', { guide: true });
        }
        if (response.info.ui) {
          up_func(
            'EDITOR_UI',
            { number: '' },
            { content: true, choose: false }
          );
          up_func('H5_DATA', JSON.parse(response.info.ui));
          up_func('BG_UI', JSON.parse(response.info.bg));
        } else {
          up_func(
            'EDITOR_UI',
            { number: '' },
            { content: false, choose: false }
          );
          up_func('H5_DATA', []);
          up_func('BG_UI', {});
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
    }
  };

  return new Promise((resolve, reject) => {
    if (data.state && data.sid) {
      if ($$env.get('surroundings') === 'development') {
        axios
          .get(`${$$env.getIn(['development', 'access'])}`)
          .then(response => {
            access_func(resolve, reject, response.data);
          });
      }
      if ($$env.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        params.append('sid', data.sid);
        axios
          .post($$env.getIn(['produce', 'access']), params)
          .then(response => {
            access_func(resolve, reject, response.data);
          });
      }
    } else {
      reject('http://my.e7wei.com/404.html');
    }
  });
};

export { access_api };
