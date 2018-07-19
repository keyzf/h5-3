import axios from 'axios/index';
import { $$env } from '../../env';

export const system_library_list_api = type_number => {
  return new Promise((resolve, reject) => {
    if ($$env.get('surroundings') === 'development') {
      axios
        .get(`${$$env.getIn(['development', 'system_library_list'])}`)
        .then(response => {
          resolve(response.data);
        });
    }
    if ($$env.get('surroundings') === 'produce') {
      let params = new URLSearchParams();
      params.append('type', type_number);
      axios
        .post(`${$$env.getIn(['produce', 'system_library_list'])}`, params)
        .then(response => {
          if (response.data.error) {
            reject('列表错误');
          } else {
            resolve(response.data);
          }
        });
    }
  });
};
