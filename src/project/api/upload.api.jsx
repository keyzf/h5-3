import axios from 'axios/index';
import { $$env } from '../../env';

/**
 * 将用户操作的数据提交给后台
 * @returns {Promise<any>}
 */
export const upload_api = (type, desc, url) => {
  return new Promise((resolve, reject) => {
    if ($$env.get('surroundings') === 'development') {
      axios.get(`${$$env.getIn(['development', 'upload'])}`).then(response => {
        resolve(response.data);
      });
    }
    if ($$env.get('surroundings') === 'produce') {
      let params = new URLSearchParams();
      params.append('type', type);
      params.append('desc', desc);
      params.append('url', url);
      axios
        .post(`${$$env.getIn(['produce', 'upload'])}`)
        .then(response => {
          if(response.data.error){
            reject(response.data.msg);
          }else{
            resolve(response.data);
          }
        })
        .catch(error => {
          reject(false);
        });
    }
  });
};
