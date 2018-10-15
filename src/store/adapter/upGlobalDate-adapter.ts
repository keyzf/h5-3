import bgAdapter from './bg';
import musicAdapter from './music';
import $$BG_DB from '../../resources/bg/bg.db';
import $$Music_DB from '../../resources/music/music.db';

export interface IupGlobalDateAdapter {
  common: {
    id: number;
    ui: object[];
    state: string;
  };
  release: {
    url: string;
    self: number;
    pv: number;
  };
  preview: {
    title: string;
    cover: string;
    desc: string;
  };
  components: {
    music: object[];

    bg: object[];
  };
}

const upGlobalDateAdapter = (response: any, id: number, state: string): IupGlobalDateAdapter => {
  const data: any = JSON.parse(response);
  const version: boolean = parseInt(data.info.version) === 1;
  return {
    common: {
      id: id,
      ui: data.info.ui ? data.info.ui : [],
      state: state,
    },
    release: {
      url: data.url, // 默认含有原始数值
      self: data.self ? data.self : 1,
      pv: parseInt(data.info.pv), // 默认含有原始数值
    },
    preview: {
      title: data.info.title, // 默认含有原始数值
      cover: data.info.cover, // 默认含有原始数值
      desc: data.info.desc ? data.info.desc : '我的分享',
    },
    components: {
      music: data.info.music
        ? version
          ? musicAdapter(data.info.music)
          : data.info.music
        : $$Music_DB,

      bg: data.info.bg
        ? version
          ? bgAdapter(data.info.bg)
          : data.info.bg
        : $$BG_DB,
    },
  };
};

export default upGlobalDateAdapter;
