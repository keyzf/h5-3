/**
 * @description:加载页面时第一个请求用于获取页面必要信息
 * @author:陈迎2018年10月08日13:49:35
 * @version:0.9x
 * @param: id: 用户辨识码，
 * @param: state: 用户操作码，用于辨识网页
 * @param: action: 更新数据源，此action为（globalUpData）
 */
import axios from 'axios';
import allData from '../store/adapter/allData';

const getDataApi = (id: number, state: string) => {
  const params: any = new URLSearchParams();
  const ajaxUrl: string = `${state === 'r' ? '/view/getData' : '/Create/getData'}`;
  params.append('id', `${id}`);
  return new Promise((resolve: any, reject: any) => {
    axios.post(`${window.location.origin}${ajaxUrl}`, params)
      .then(response => {
        if (response.data.error) {
          reject(response.data.url);
        } else {
          resolve(allData(response.data, id, state));
        }
      })
      .catch(() => {
        window.location.href = 'http://my.e7wei.com/404.html';
      });
  });
};

export default getDataApi;
