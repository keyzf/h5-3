import axios from "axios/index";
import { $$api } from "../api/api.database";

/**
 * 将用户操作的数据提交给后台
 * @returns {Promise<any>}
 */
export const delect_ajax = (mid) => {
  return new Promise((resolve, reject) => {
    if ($$api.get("surroundings") === "development") {
      axios
        .get(`${$$api.getIn(["development", "del"])}`)
        .then(response => {
          resolve(response.data);
        });
    }
    if ($$api.get("surroundings") === "produce") {
      let params = new URLSearchParams();
      params.append("mid", mid);
      axios
        .post(`${$$api.getIn(["produce", "del"])}`)
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
