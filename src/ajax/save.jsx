import axios from "axios/index";
import { $$api } from "../api/api.database";

/**
 * 将用户操作的数据提交给后台
 * @param data
 * @returns {Promise<any>}
 */
export const save_ajax = ({ ...data }) => {
  return new Promise((resolve, reject) => {
    if ($$api.get("surroundings") === "development") {
      resolve(true);
    }
    if ($$api.get("surroundings") === "produce") {
      const ajax_date = {
        sid: data.id_value.data.get("user_id"),
        bg: data.bg_value.data.toJS(),
        ui: data.h5_data_data.data.toJS(),
        cover: data.shareMsg_value.data.toJS().img,
        desc: data.shareMsg_value.data.toJS().desc,
        title: data.shareMsg_value.data.toJS().title
      };
      let params = new URLSearchParams();
      params.append("id", `${ajax_date}`);
      axios
        .post(`${$$api.getIn(["produce", "save"])}`)
        .then((response) => {
          if (response.data.error) {
            resolve(false);
          } else {
            reject(true);
          }
        })
        .catch((error) => {
          reject(false);
        });
    }
  });
};
