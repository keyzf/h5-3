import $$BG_DB from '../../resources/bg/bg.db';
import bgAdapter from './bg';

const allData = (data: any, id: number, state: string) => {
  let Adapter: object;
  if (parseInt(data.info.version) === 1) {
    Adapter = {
      error: data.error, // 默认含有原始数值
      url: data.url, // 默认含有原始数值
      self: data.self ? data.self : 1,
      info: {
        id: id ? id : 0,
        state: state ? state : '页面错误',
        title: data.info.title, // 默认含有原始数值
        cover: data.info.cover, // 默认含有原始数值
        desc: data.info.desc ? data.info.desc : '我的分享',
        pv: parseInt(data.info.pv), // 默认含有原始数值
        music: JSON.parse(data.info.music)
          ? JSON.parse(data.info.music)
          : '待引入默认值',
        ui: JSON.parse(data.info.ui)
          ? JSON.parse(data.info.ui)
          : '待引入默认值',
        bg: JSON.parse(data.info.bg) ? bgAdapter(JSON.parse(data.info.bg)) : $$BG_DB,
        version: parseInt(data.info.version), // 默认含有原始数值
      },
    };
  }
  if (parseInt(data.info.version) === 2) {
    Adapter = {
      error: data.error, // 默认含有原始数值
      url: data.url, // 默认含有原始数值
      self: data.self ? data.self : 1,
      info: {
        id: id ? id : 0,
        state: state ? state : '页面错误',
        title: data.info.title, // 默认含有原始数值
        cover: data.info.cover, // 默认含有原始数值
        desc: data.info.desc ? data.info.desc : '我的分享',
        pv: parseInt(data.info.pv), // 默认含有原始数值
        music: JSON.parse(data.info.music)
          ? JSON.parse(data.info.music)
          : '待引入默认值',
        ui: JSON.parse(data.info.ui)
          ? JSON.parse(data.info.ui)
          : '待引入默认值',
        bg: JSON.parse(data.info.bg) ? JSON.parse(data.info.bg) : $$BG_DB,
        version: parseInt(data.info.version), // 默认含有原始数值
      },
    };
  }
  return Adapter;
};

export default allData;
