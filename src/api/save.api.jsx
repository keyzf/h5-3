import axios from 'axios';
import URLSearchParams from 'url-search-params';

// 测试成功✅
export const save_ajax = data => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append('sid', data.sid);
    params.append('bg', JSON.stringify(data.bg));
    params.append('music', JSON.stringify(data.music));
    params.append('form', JSON.stringify(data.form));
    params.append('ui', JSON.stringify(data.ui));
    params.append('cover', data.cover);
    params.append('desc', data.desc);
    params.append('title', data.title);
    axios
      .post(`${window.location.origin}/Create/postData`, params)
      .then(response => {
        if (response.data.message) {
          reject(false);
        } else {
          resolve(true);
        }
      });
  });
};
