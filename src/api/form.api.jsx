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
          reject('表单提交失败，请重新尝试');
        } else {
          resolve('表单提交成功');
        }
      });
  });
};

export { form_api };
