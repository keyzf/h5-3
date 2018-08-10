import axios from 'axios';

// 测试成功✅
export const system_api = (page, tid, pagecount = 24) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append('pagecount', pagecount);
    params.append('page', page);
    params.append('tid', tid);
    axios.post('http://h5.e7wei.com/Material/getSys', params).then(response => {
      if (response.data.error) {
        reject('获取上传失败，请重试');
      } else {
        resolve(response.data);
      }
    });
  });
};
