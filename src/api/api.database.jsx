import { fromJS } from "immutable";

export const $$api = fromJS({
  // 当前使用环境
  surroundings: "development",
  // 开发环境
  development: {
    // 初始化路由访问地址
    access: "http://localhost:3001/access",
    // 保存数据
    save: "",
    // 上传数据（添加用户素材）
    upload: "http://localhost:3001/upload",
    // 删除资源
    del: "http://localhost:3001/del",
    // 子类型库（图片库选项列表）
    public_img_list: "http://localhost:3001/child_type_list",
    // 视频库
    video_library: "http://localhost:3001/video_library",
    // 音乐库
    music_library: "http://localhost:3001/music_library",
    //  图片库
    img_library: "http://localhost:3001/img_library"
  },
  // 生产环境
  produce: {
    // 初始化路由访问地址
    access: "http://h5.e7wei.com/Index/getData",
    // 保存数据
    save: "http://h5.e7wei.com/Index/postData",
    // 上传数据（添加用户素材）
    upload: "http://h5.e7wei.com/Material/addUser",
    // 删除资源
    del: "http://h5.e7wei.com/Material/delUser",
    // 获取用户素材库，
    user_library: "http://h5.e7wei.com/Material/getUser ",
    //  获取系统素材库库
    system_library: "http://h5.e7wei.com/Material/getSys",
    //  子类型库（图片库选项列表）
    system_library_list: "http://h5.e7wei.com/Material/getSysType"
  }
});
