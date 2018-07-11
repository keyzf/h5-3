import axios from "axios/index";
import { $$api } from "../api/api.database";

/**
 * 将用户操作的数据提交给后台
 * @returns {Promise<any>}
 */
export const upload_ajax = (type, desc, url) => {
  return new Promise((resolve, reject) => {
    if ($$api.get("surroundings") === "development") {
      axios
        .get(`${$$api.getIn(["development", "upload"])}`)
        .then(response => {
          resolve(response.data);
        });

    }
    if ($$api.get("surroundings") === "produce") {
      let params = new URLSearchParams();
      params.append("type", type);
      params.append("desc", desc);
      params.append("url", url);
      axios
        .post(`${$$api.getIn(["produce", "upload"])}`)
        .then((response) => {
          if (response.data.error) {
            resolve(false);
          } else {
            reject(response.data.mid);
          }
        })
        .catch((error) => {
          reject(false);
        });
    }
  });
};
