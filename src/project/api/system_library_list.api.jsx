import axios from 'axios/index';
import { $$env } from '../../env';

/**
 * 获取图片资源列表
 * 请求数据
 * type : ${number} 大类型列表
 *
 * 返回数据
 *
 *  {
 *       {
 *          childtype: 子类型（int）,
 *          name: 名称(string),
 *       }，
 *       ...
 *    }
 *
 *
 * @param type_number 大类型列表
 * @returns {Promise<any>}
 */
export const system_library_list_api = type_number => {
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
      params.append('type', type_number);
      axios
        .post(`${$$env.getIn(['produce', 'system_library_list'])}`, params)
        .then(response => {
          if (response.data.error) {
            reject(response.data.msg);
          } else {
            resolve(response.data);
          }
        })
        .catch(function(error) {
          reject('访问服务器错误', error);
        });
    }
  });
};
