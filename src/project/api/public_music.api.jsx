import axios from 'axios/index';
import { $$env } from '../../env';

export const public_music_api = page => {
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
      params.append('page', page);
      params.append('pagecount', '30');
      params.append('type', '4');
      params.append('childtype', '');
      axios
        .post(`${$$env.getIn(['produce', 'img_library'])}`, params)
        .then(response => {
          if(response.data.error){
            reject(response.data.msg);
          }else{
            resolve(response.data);
          }
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
  });
};
