import axios from 'axios/index';
import { $$env } from '../../env';

export const save_ajax = ({ ...data }) => {
  return new Promise((resolve, reject) => {
    if ($$env.get('surroundings') === 'development') {
      resolve(true);
    }
    if ($$env.get('surroundings') === 'produce') {
      let params = new URLSearchParams();
      params.append('sid', data.sid_value.data.get('user_id'));
      params.append('bg', data.bg_ui_value.data.toJS());
      params.append('ui', data.h5_data_value.data.toJS());
      params.append('cover', data.shareMsg_value.data.toJS().img);
      params.append('desc', data.shareMsg_value.data.toJS().desc);
      params.append('title', data.shareMsg_value.data.toJS().title);
      axios
        .post(`${$$env.getIn(['produce', 'save'])}`, params)
        .then(response => {
          if (response.data.error) {
            reject(response.data.msg);
          } else {
            resolve('保存成功');
          }
        })
        .catch(error => {
          reject(false);
        });
    }
  });
};
