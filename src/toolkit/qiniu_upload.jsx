import qiniu from 'qiniu';

/**
 * 通过配置七牛云数据，实现上传
 * @type {string}
 */
const accessKey = 'HWKT9-xKIYPCH7skpgjDAff_md01u5_cqMH7EyIt';
const secretKey = 'ww5mVtlXP1pu1P4-PfQy0OXIbEa-6bMipevEhCUW';
const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
const options = {
  scope: 'e7wei-test',
};
const putPolicy = new qiniu.rs.PutPolicy(options);
export const uploadToken = putPolicy.uploadToken(mac);

