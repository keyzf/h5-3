import axios from 'axios';

const form_api = (data, sid) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append('sid', sid);
    params.append('form', data);
    axios.post(`http://h5.e7wei.com/view/postData`, params).then(response => {
      if (response.data.error) {
        reject('上传失败，请重新尝试');
      } else {
        resolve('上传成功');
      }
    });
  });
};

export { form_api };
