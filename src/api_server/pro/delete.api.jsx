import axios from 'axios/index';

// 测试成功✅
export const delete_api = mid => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append('mid', mid);
    axios
      .post('http://h5.e7wei.com/Material/delUser', params)
      .then(response => {
        if (response.data.error) {
          reject('删除失败');
        } else {
          resolve('删除成功');
        }
      });
  });
};
