import axios from 'axios/index';
import { $$env } from '../env';

export const system_library_list_api = () => {
  return new Promise((resolve, reject) => {
    if ($$env.get('surroundings') === 'development') {
      axios
        .get(`${$$env.getIn(['development', 'system_library_list'])}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
    if ($$env.get('surroundings') === 'produce') {
      let params = new URLSearchParams();
      params.append('type', '1');
      axios
        .post(`${$$env.getIn(['produce', 'system_library_list'])}`, params)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
  });
};
