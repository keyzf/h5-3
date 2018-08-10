import axios from 'axios';

// 测试成功✅
export const user_api = (type, page) => {
  return new Promise((resolve, reject) => {
    // axios
    //     .get('http://localhost:3001/img_library')
    //     .then(response => {
    //         if (response.data.error) {
    //             reject('获取上传失败，请重试');
    //         } else {
    //             resolve(response.data);
    //         }
    //     });
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
