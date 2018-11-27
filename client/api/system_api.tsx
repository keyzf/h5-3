import axios from "axios";

const system_api = (page:any, tid:any, pagecount:any = `24`) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append("pagecount", pagecount);
    params.append("app", page);
    params.append("tid", tid);
    axios
      .post(`${window.location.origin}/Material/getSys`, params)
      .then(response => {
        if (response.data.error) {

        } else {
          resolve(response.data);
        }
      });
  });
};


export default system_api;