import axios from 'axios/index';
import { $$env } from '../env';

export const public_img_api = (page, childtype) => {
  return new Promise((resolve, reject) => {
    if ($$env.get('surroundings') === 'development') {
      axios
        .get(`${$$env.getIn(['development', 'img_library'])}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
    if ($$env.get('surroundings') === 'system_library') {
      let params = new URLSearchParams();
      const ajax_data = {
        page: page,
        pagecount: 40,
        type: 1,
        childtype: childtype,
      };
      params.append('data', `${{ ...ajax_data }}`);
      axios
        .post(`${$$env.getIn(['produce', 'img_library'])}`, params)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
  });
};
