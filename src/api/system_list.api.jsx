import axios from 'axios';

// 测试成功✅
export const system_list_api = type => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append('type', type);
    axios
      .post('http://h5.e7wei.com/Material/getSysType', params)
      .then(response => {
        if (response.data.error) {
          reject('获取上传失败，请重试');
        } else {
          resolve(response.data);
        }
      });
  });
};
