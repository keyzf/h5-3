import axios from "axios";

/**
 * @desc 获取全体数据，对正确返回与错误返回作出处理
 * @param id
 * @param web
 */
const entrance_api = (id: number, web: string) => {
  const ajaxUrl: string = `${
    web === "r" ? "/view/getData" : "/Create/getData"
  }`;
  return new Promise((resolve: any, reject: any) => {
    axios
      .get(`${window.location.origin}${ajaxUrl}?sid=${id}`)
      .then(response => {
        if (parseInt(response.data.error)) {
          reject(response.data.url);
        } else {
          // 调用函数，调整数据源数据
          resolve(response.data);
        }
      });
  });
};

export default entrance_api;
