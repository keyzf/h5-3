import axios from "axios";
import Mock, { Random } from "mockjs";

/**
 * @desc 获取全体数据，对正确返回与错误返回作出处理
 * @param id
 * @param web
 */
const entrance = (id: number, web: string) => {
  const params: any = new URLSearchParams();
  const ajaxUrl: string = `${
    web === "r" ? "/view/getData" : "/Create/getData"
    }`;


  /**
   * ⬇️模拟数据
   */
  const error: number = 0;
  Mock.setup({
    timeout: 200
  });
  Mock.mock(
    `${window.location.origin}${ajaxUrl}`,
    "post",
    JSON.stringify({
      error: error,
      info: {
        bg: "",
        cover: Random.dataImage("200x100"),
        desc: "这里是描述",
        form: null,
        self: "1",
        music: { music_url: Random.url(), desc: "13123qwer" },
        pv: "0",
        sid: "10775",
        title: "我的页面",
        ui: "",
        version: "1"
      },
      url: error ? "http://my.e7wei.com/404.html" : Random.url()
    })
  );
  /**
   * ⬆️模拟数据
   */



  params.append("id", `${id}`);
  return new Promise((resolve: any, reject: any) => {
    axios
      .post(`${window.location.origin}${ajaxUrl}`, params)
      .then(response => {
        if (parseInt(JSON.parse(response.data).error)) {
          reject(JSON.parse(response.data).url);
        } else {
          // 调用函数，调整数据源数据
          resolve(response.data);
        }
      })
      .catch(() => {
        window.location.href = "http://my.e7wei.com/404.html";
      });
  });
};

export default entrance;
