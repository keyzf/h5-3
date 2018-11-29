import axios from 'axios';

const form_api = (data, sid) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append('sid', sid);
    params.append('form', JSON.stringify(data));
    axios
      .post(`${window.location.origin}/view/postData`, params)
      .then(response => {
        if (response.data.error) {
          reject(response.data.msg);
        } else {
          resolve(response.data.msg);
        }
      });
  });
};

export default form_api;
