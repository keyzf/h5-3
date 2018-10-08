import { observable } from "mobx";
import Action from "./action";
import Computes from "./computed";

/**
 * @description 数据源接口
 */
export interface IStore {
  common: { version: number; ui: any; id: number; state: string };
  release: { url: string; pv: number };
  preview: { cover: string; desc: string; title: string };
  visual: { choose: number; img: object };
  component: { bg: object; music: string };
}

/**
 * @description 数据源
 */
class rootStore {
  // 数据源
  @observable common = { version: null, ui: [], state: null, id: null };
  @observable release = { url: null, pv: null };
  @observable preview = { cover: null, desc: null, title: null };
  @observable visual = { choose: 0, img: {} };
  @observable component = { bg: {}, music: null };
}

/**
 * @description 所有的action
 */
export const rootProps = {
  store: new rootStore(),
  action: new Action(new rootStore()),
  computes: new Computes(new rootStore())
};
