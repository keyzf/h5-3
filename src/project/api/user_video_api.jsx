import axios from 'axios/index';
import { $$env } from '../env';

/**
 * 图片列表获取
 * @returns {Promise<any>}
 */
export const user_video_api = page => {
  return new Promise((resolve, reject) => {
    if ($$env.get('surroundings') === 'development') {
      axios
        .get(`${$$env.getIn(['development', 'video_library'])}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
    if ($$env.get('surroundings') === 'produce') {
      let params = new URLSearchParams();
      const ajax_data = {
        page: page,
        pagecount: 40,
        type: 1,
      };
      params.append('data', `${{ ...ajax_data }}`);
      axios
        .post(`${$$env.getIn(['produce', 'video_library'])}`, params)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
  });
};
