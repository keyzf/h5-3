import axios from 'axios';
import { $$env } from '../../env';

const form_api = data => {
  return new Promise((resolve, reject) => {
    if ($$env.get('surroundings') === 'produce') {
      let params = new URLSearchParams();
      params.append('sid', this.props.sid_value.data.get('user_id'));
      params.append('form', data);
      axios
        .post(`http://v.e7wei.com/view/postData`, params)
        .then(response => {
          resolve(response.data);
        })
        .catch(() => {
          reject('');
        });
    }
  });
};

export { form_api };
