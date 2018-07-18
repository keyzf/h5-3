import axios from "axios";
import { $$env } from "../../env";
import { fromJS } from "immutable";

/**
 * 处理路由地址，为各数据源添加信息，跳转指定路由
 * @param data 数据
 * @param up_func  替换数据信息
 * @returns {Promise<any>}   返回跳转路由地址
 */
const access_api = (data, up_func) => {
  return new Promise((resolve, reject) => {
    if (data.state || data.sid) {
      if ($$env.get("surroundings") === "development") {
        axios
          .get(`${$$env.getIn(["development", "access"])}`)
          .then(response => {
            if (response.data.error) {
              reject(response.data.link);
            } else {
              const share = {
                title: response.data.info.title,
                cover: response.data.info.cover,
                desc: response.data.info.desc
              };
              if (data.guide) {
                up_func("GUIDE", { guide: true });
              }
              if (response.data.info.ui.length === 0) {
                up_func(
                  "EDITOR_UI",
                  { number: "" },
                  {
                    content: false,
                    choose: false
                  }
                );
              } else {
                up_func(
                  "EDITOR_UI",
                  { number: "" },
                  {
                    content: true,
                    choose: false
                  }
                );
              }
              up_func("H5_DATA", response.data.info.ui);
              up_func("BG_UI", response.data.info.bg);
              up_func("SHARE_MSG", share);
              up_func("RELEASE", {
                url: response.data.info.url
              });
              if (data.state === "editorH5") {
                resolve("visual");
              }
              if (data.state === "shareMsg") {
                resolve("preview");
              }
              if (data.state === "release") {
                resolve("release");
              }
              if (data.state === "renderH5") {
                resolve("renderH5");
              }
            }
          });
      }
      if ($$env.get("surroundings") === "produce") {
        let params = new URLSearchParams();
        params.append("sid", data.sid);
        axios.post($$env.getIn(["produce", "access"]), params)
          .then(response => {
            console.log(response);
            if (response.data.error) {
              reject(response.data.link);
            } else {
              const share = {
                title: response.data.info.title,
                cover: response.data.info.cover,
                desc: response.data.info.desc
              };
              if (data.guide) {
                up_func("GUIDE", { guide: true });
              }
              if (response.data.info.ui.length === 2) {
                up_func(
                  "EDITOR_UI",
                  { number: "" },
                  {
                    content: false,
                    choose: false
                  }
                );
              } else {
                up_func(
                  "EDITOR_UI",
                  { number: "" },
                  {
                    content: true,
                    choose: false
                  }
                );
              }
              up_func("H5_DATA", response.data.info.ui);
              up_func("BG_UI", response.data.info.bg);
              up_func("SHARE_MSG", share);
              up_func("RELEASE", {
                url: response.data.info.url
              });
              if (data.state === "editorH5") {
                resolve("visual");
              }
              if (data.state === "shareMsg") {
                resolve("preview");
              }
              if (data.state === "release") {
                resolve("release");
              }
              if (data.state === "renderH5") {
                resolve("renderH5");
              }
            }
          })
          .catch(error => {
            console.log(error);
            // reject("http://my.e7wei.com/404.html");
          });
      }
    } else {
      reject("http://my.e7wei.com/404.html");
    }
  });
};

export { access_api };
