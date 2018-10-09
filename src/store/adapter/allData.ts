import bgAdapter from "./bg";
import musicAdapter from "./music";
import $$BG_DB from "../../resources/bg/bg.db";
import $$Music_DB from "../../resources/music/music.db";

const defaultUi: string = ``;

const allData = (response: any, id: number, state: string) => {
  const data: any = JSON.parse(response);
  const version: boolean = parseInt(data.info.version) === 1;
  return {
    error: data.error, // 默认含有原始数值
    url: data.url, // 默认含有原始数值
    self: data.self ? data.self : 1,
    info: {
      id: id ? id : 0,
      state: state ? state : "页面错误",
      title: data.info.title, // 默认含有原始数值
      cover: data.info.cover, // 默认含有原始数值
      desc: data.info.desc ? data.info.desc : "我的分享",
      pv: parseInt(data.info.pv), // 默认含有原始数值
      music: data.info.music
        ? version
          ? musicAdapter(data.info.music)
          : data.info.music
        : $$Music_DB,
      ui: data.info.ui ? data.info.ui : defaultUi,
      bg: data.info.bg
        ? version
          ? bgAdapter(data.info.bg)
          : data.info.bg
        : $$BG_DB,
      version: parseInt(data.info.version) // 默认含有原始数值
    }
  };
};

export default allData;
