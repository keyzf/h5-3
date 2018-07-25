import axios from 'axios/index';

/**
 * 将用户操作的数据提交给后台
 * @returns {Promise<any>}
 */
// 测试成功✅
export const upload_api = (type, desc, url) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append('type', type);
    params.append('desc', desc);
    params.append('url', url);
    axios
      .post('http://h5.e7wei.com/Material/addUser', params)
      .then(response => {
        if (response.data.error) {
          reject('上传失败');
        } else {
          resolve('上传成功');
        }
      });
  });
};
