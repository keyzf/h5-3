import axios from "axios";
import URLSearchParams from 'url-search-params';

export const user_api = (type, page) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append("pagecount", "24");
    params.append("page", page);
    params.append("type", type);
    axios
      .post(`${window.location.origin}/Material/getUser`, params)
      .then(response => {
        if (response.data.error) {
          reject(response.data)
        } else {
          resolve(response.data);
        }
      });
  });
};