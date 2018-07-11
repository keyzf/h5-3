import axios from "axios/index";
import { $$api } from "../api/api.database";

/**
 * @description
 * 通过解析的路由数据，经过处理后，返回相应的跳转路径
 * 实现功能
 * 1. 如果没有提交访问路径，则跳转至指定页面 ''
 * 2. 通过ajax获取的信息，判断获取的信息是否包含错误信息
 * 3. 提取信息，将数据提交给相应的reducer
 * 4. 判断state，返回相应的路径
 * @returns {Promise<any>}
 */
export const access = (data, up_func, choose_up_func) => {
  return new Promise((resolve, reject) => {
    /**
     * TODO
     * 1.如果没有提交合法的访问路径，则跳转至指定页面 ''
     * ⚠️ catch 中也使用此方法
     */
    if (data.state === "") {
      reject("");
    } else {
      if ($$api.get("surroundings") === "development") {
        axios
          .get(`${$$api.getIn(["development", "access"])}`)
          .then(response => {
            /**
             * 2. 通过ajax获取的信息，判断获取的信息是否包含错误信息
             */
            if (response.data.error) {
              reject(response.data.link);
            } else {
              /**
               * 提取信息，将数据提交给相应的reducer
               * @type {{title: *, cover: *, desc: SVGDescElement}}
               */
              const share = {
                title: { value: response.data.info.title },
                cover: { value: response.data.info.cover },
                desc: { value: response.data.info.desc }
              };
              if (data.guide) {
                up_func("GUIDE", { guide: true });
              }
              up_func("USER_ID", data.sid);
              up_func("H5_DATA", response.data.info.ui);
              up_func("BG_UI", response.data.info.bg);
              up_func("SHARE_MSG", share);
              up_func("RELEASE", { url: response.data.url });
              choose_up_func(
                "CHOOSE_UI",
                { number: "" },
                { content: true, choose: false }
              );
              /**
               * 4. 判断state，返回相应的路径
               */
              if (data.state === "editorH5") {
                resolve("visual");
              }
              if (data.state === "shareMsg") {
                resolve("preview");
              }
              if (data.state === "release") {
                resolve("release");
              }
            }
          })
          .catch(() => {
            reject("");
          });
      }
      if ($$api.get("surroundings") === "produce") {
        let params = new URLSearchParams();
        params.append("sid", data.sid);
        axios
          .post(`${$$api.getIn(["produce", "access"])}`, params)
          .then(response => {
            /**
             * 2. 通过ajax获取的信息，判断获取的信息是否包含错误信息
             */
            if (response.data.error) {
              reject(response.data.link);
            } else {
              /**
               * 提取信息，将数据提交给相应的reducer
               * @type {{title: *, cover: *, desc: SVGDescElement}}
               */
              const share = {
                title: response.data.info.title,
                cover: response.data.info.cover,
                desc: response.data.info.desc
              };
              up_func("GUIDE", { guide: true });
              up_func("H5_DATA", response.data.info.ui);
              up_func("BG_UI", response.data.info.bg);
              up_func("SHARE_MSG", share);
              up_func("RELEASE", { url: response.data.info.url });
              choose_up_func(
                "CHOOSE_UI",
                { number: "" },
                { content: true, choose: false }
              );
              /**
               * 4. 判断state，返回相应的路径
               */
              if (data.state === "editorH5") {
                resolve("visual");
              }
              if (data.state === "shareMsg") {
                resolve("preview");
              }
              if (data.state === "release") {
                resolve("release");
              }
            }
          })
          .catch(() => {
            reject("");
          });
      }
    }
  });
};
