import axios from 'axios/index';

export const delete_api = mid => {
  return new Promise((resolve) => {
    let params = new URLSearchParams();
    params.append('mid', mid);
    axios
      .post(`${window.location.origin}/Material/delUser`, params)
      .then(response => {
        resolve(response.data.error);
      });
  });
};
