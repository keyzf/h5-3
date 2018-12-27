import axios from "axios";


export const userAsset_list_api = () => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append("type", "1");
    axios
      .post(`${window.location.origin}/Material/getSysType`, params)
      .then(response => {
        return response.data.error ? "" : resolve(response.data);
      });
  });
};

export default userAsset_list_api;
