import axios from 'axios/index';
import { $$api } from '../api/api.database';

/**
 * 图片列表获取
 * @returns {Promise<any>}
 */
export const public_img = (page, childtype) => {
  return new Promise((resolve, reject) => {
    if ($$api.get('surroundings') === 'development') {
      axios
        .get(`${$$api.getIn(['development', 'img_library'])}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
    if ($$api.get('surroundings') === 'produce') {
      let params = new URLSearchParams();
      const ajax_data = {
        page: page,
        pagecount: 40,
        type: 1,
        childtype: childtype,
      };
      params.append('data', `${{ ...ajax_data }}`);
      axios
        .post(`${$$api.getIn(['produce', 'img_library'])}`, params)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
  });
};
