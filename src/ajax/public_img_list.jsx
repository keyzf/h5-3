import axios from "axios/index";
import { $$api } from "../api/api.database";

/**
 * 图片列表获取
 * @returns {Promise<any>}
 */
export const public_img_list = () => {
  return new Promise((resolve, reject) => {
    if ($$api.get("surroundings") === "development") {
      axios
        .get(`${$$api.getIn(["development", "public_img_list"])}`)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject("访问服务器错误", error);
        });
    }
    if ($$api.get("surroundings") === "produce") {
      let params = new URLSearchParams();
      params.append("type", "1");
      axios
        .post(`${$$api.getIn(["produce", "system_library_list"])}`, params)
        .then(response => {
          resolve(response.data);
        })
        .catch(function(error) {
          reject("访问服务器错误", error);
        });
    }
  });
};
