import axios from "axios";
import Mock from "mockjs";

/**
 * 模拟数据
 */
const error: number = 0;
Mock.mock(`${window.location.origin}/Create/postData`, "post", {
  error: error,
  msg: error ? "保存失败" : "保存成功"
});

interface IPostData {
  id: number;
  bg: string;
  music: string;
  form: string;
  ui: string;
  cover: string;
  desc: string;
  title: string;
}

const postAllData = (data: IPostData) => {
  return new Promise((resolve, reject) => {
    let params = new URLSearchParams();
    params.append("sid", `${data.id}`);
    params.append("bg", JSON.stringify(data.bg));
    params.append("music", JSON.stringify(data.music));
    params.append("form", JSON.stringify(data.form));
    params.append("ui", JSON.stringify(data.ui));
    params.append("cover", data.cover);
    params.append("desc", data.desc);
    params.append("title", data.title);
    params.append("version", `2`);
    axios
      .post(`${window.location.origin}/Create/postData`, params)
      .then(response => {
        response.data.error
          ? reject(response.data.msg)
          : resolve(response.data.msg);
      });
  });
};

export default postAllData;
