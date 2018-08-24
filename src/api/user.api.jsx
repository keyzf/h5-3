import axios from 'axios';

export const user_api = (type, page) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append('pagecount', '24');
    params.append('page', page);
    params.append('type', type);
    axios
      .post('http://h5.e7wei.com/Material/getUser', params)
      .then(response => {
        if (response.data.error) {
          reject('获取上传失败，请重试');
        } else {
          resolve(response.data);
        }
      });
  });
};
