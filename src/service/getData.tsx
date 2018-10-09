import axios from 'axios';
import Mock from 'mockjs';

const getDataApi = (id: number, state: string) => {
  const params: any = new URLSearchParams();
  const ajaxUrl: string = `${
    state === 'r' ? '/view/getData' : '/Create/getData'
    }`;

  /**
   * 模拟数据
   */
  Mock.setup({
    timeout: '200-600',
  });
  Mock.mock(
    `${window.location.origin}${ajaxUrl}`,
    'post',
    JSON.stringify({
      error: 0,
      info: {
        bg: '',
        cover: 'http://src.e7wei.com/0.644043773965004.png',
        desc: '',
        form: null,
        music: null,
        pv: '0',
        sid: '10775',
        title: '我的页面',
        ui: '',
        version: '1',
      },
      url: 'http://h5.e7wei.com/r/10775',
    }),
  );

  params.append('id', `${id}`);
  return new Promise((resolve: any, reject: any) => {
    axios
      .post(`${window.location.origin}${ajaxUrl}`, params)
      .then(response => {
        if (parseInt(response.data.error)) {
          reject(response.data.url);
        } else {
          // 调用函数，调整数据源数据
          resolve(response.data);
        }
      })
      .catch(() => {
        window.location.href = 'http://my.e7wei.com/404.html';
      });
  });
};

export default getDataApi;
