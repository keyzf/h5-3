import qiniu from "qiniu";

/**
 * 通过配置七牛云数据，实现上传
 * @type {string}
 */
const secretKey = "aDp5-sbhkDMDq7O6J5NZaYkTJbpmq9zygnH4MWg3";
const accessKey = "ICDmxnosRZlziB7tqFkQs8Hr4cujSTxaUOzzstl-";
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = {
  scope: "e7weih5"
};
const putPolicy = new qiniu.rs.PutPolicy(options);
export const uploadToken = putPolicy.uploadToken(mac);
