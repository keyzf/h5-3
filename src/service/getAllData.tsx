import axios from "axios";
import Mock, { Random } from "mockjs";

const getAllData = (id: number, state: string) => {
  const params: any = new URLSearchParams();
  const ajaxUrl: string = `${
    state === "r" ? "/view/getData" : "/Create/getData"
  }`;

  /**
   * 模拟数据
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
        desc: "",
        form: null,
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

export default getAllData;
