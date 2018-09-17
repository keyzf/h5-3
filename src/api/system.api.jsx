import axios from 'axios';

// 测试成功✅
export const system_api = (page, tid, pagecount = 24) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append('pagecount', pagecount);
    params.append('page', page);
    params.append('tid', tid);
    axios
      .post(`${window.location.origin}/Material/getSys`, params)
      .then(response => {
        if (response.data.error) {

        } else {
          resolve(response.data);
        }
      });
  });
};
