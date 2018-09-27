import axios from "axios";
import { fromJS } from "immutable";
import URLSearchParams from "url-search-params";
import { choose_data } from "../redux/renducer_list/editorUi.rdc";

export const access_api = (sid, state, up_func) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append("sid", sid);
    switch (state) {
      case "r":
        axios
          .post(`${window.location.origin}/view/getData`, params)
          .then(response => {
            if (response.data.error) {
              reject(response.data.url);
            } else {
              const share = {
                title: response.data.info.title,
                cover: response.data.info.cover,
                desc: response.data.info.desc
                  ? response.data.info.desc
                  : "我用易企微做了一个H5页面，你来看看吧！"
              };
              up_func("SHARE_MSG", share);
              up_func("RELEASE", {
                url: response.data.url,
                self: response.data.self,
                pv: response.data.info.pv
              });
              up_func("SID", { sid: sid });
              if (response.data.info.music) {
                up_func("MUSIC_UI", {
                  music_url: JSON.parse(response.data.info.music).music_url,
                  desc: JSON.parse(response.data.info.music).desc
                });
              }
              if (response.data.info.bg) {
                up_func("BG_UI", JSON.parse(response.data.info.bg));
              }

              if (
                response.data.info.ui !== "" &&
                response.data.info.ui !== "[]"
              ) {
                up_func("H5_DATA", JSON.parse(response.data.info.ui));
                up_func(
                  "EDITOR_UI",
                  {
                    data: JSON.parse(response.data.info.ui)[0],
                    number: 0,
                    com: true
                  },
                  { content: true, choose: true }
                );
              }
            }
          });
        return "";
      default:
        axios
          .post(`${window.location.origin}/Create/getData`, params)
          .then(response => {
            if (response.data.error) {
              reject(response.data.url);
            } else {
              const share = {
                title: response.data.info.title,
                cover: response.data.info.cover,
                desc: response.data.info.desc
              };
              up_func("SHARE_MSG", share);
              up_func("RELEASE", {
                url: response.data.url,
                self: response.data.self,
                pv: response.data.info.pv
              });
              up_func("SID", { sid: sid });

              if (response.data.info.music) {
                up_func("MUSIC_UI", {
                  music_url: JSON.parse(response.data.info.music).music_url,
                  desc: JSON.parse(response.data.info.music).desc
                });
              }
              if (response.data.info.bg) {
                up_func("BG_UI", JSON.parse(response.data.info.bg));
              }
              if (
                response.data.info.ui !== "" &&
                response.data.info.ui !== "[]"
              ) {
                up_func("H5_DATA", JSON.parse(response.data.info.ui));
                up_func(
                  "EDITOR_UI",
                  {
                    data: JSON.parse(response.data.info.ui)[0],
                    number: 0,
                    com: true
                  },
                  { content: true, choose: true }
                );
              }
            }
          });
        return "";
    }
  });
};
