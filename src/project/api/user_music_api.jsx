import axios from 'axios/index';
import { $$env } from '../env';

/**
 * 图片列表获取
 * @returns {Promise<any>}
 */
export const user_music_api = page => {
  return new Promise((resolve, reject) => {
    if ($$env.get('surroundings') === 'development') {
      axios
        .get(`${$$env.getIn(['development', 'music_library'])}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
    if ($$env.get('surroundings') === 'produce') {
      let params = new URLSearchParams();
      params.append('page', page);
      params.append('pagecount', 30);
      params.append('type', 1);

      axios
        .post(`${$$env.getIn(['produce', 'music_library'])}`, params)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
  });
};
