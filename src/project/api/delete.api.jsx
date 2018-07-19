import axios from 'axios/index';
import { $$env } from '../../env';

/**
 * 将用户操作的数据提交给后台
 * @returns {Promise<any>}
 */
export const delete_api = mid => {
  return new Promise((resolve, reject) => {
    if ($$env.get('surroundings') === 'development') {
      axios.get(`${$$env.getIn(['development', 'delete'])}`).then(response => {
        resolve(response.data);
      });
    }
    if ($$env.get('surroundings') === 'produce') {
      let params = new URLSearchParams();
      params.append('mid', mid);
      axios
        .post(`${$$env.getIn(['produce', 'delete'])}`, params)
        .then(response => {
          if (response.data.error) {
            resolve(false);
          } else {
            reject(true);
          }
        })
        .catch(() => {
          reject(false);
        });
    }
  });
};
