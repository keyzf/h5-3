import axios from 'axios';

// 测试成功✅
export const system_list_api = () => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append('type', '1');
    axios
      .post(`${window.location.origin}/Material/getSysType`, params)
      .then(response => {
        if (response.data.error) {

        } else {
          resolve(response.data);
        }
      });
  });
};
