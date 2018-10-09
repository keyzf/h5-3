//固定导入
import { observable } from "mobx";

// 数据源接口
export interface IStore {
  common: { version: number; ui: any; id: number; state: string; self: number };
  release: { url: string; pv: number };
  preview: { cover: string; desc: string; title: string };
  visual: { choose: number; img: object };
  component: { bg: any; music: any };
}

// 数据源
export class Store {
  // 数据源
  @observable common = { version: null, ui: [], state: null, id: null, self: null };
  @observable release = { url: null, pv: null };
  @observable preview = { cover: null, desc: null, title: null };
  @observable visual = { choose: 0, img: {} };
  @observable component = { bg: {}, music: null };
}
