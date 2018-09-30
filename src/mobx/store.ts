import { observable, configure } from 'mobx';
import $$bg_db from '../resources/bg/bg.db';

configure({ enforceActions: 'observed' });

class Store {
  /**
   * common:公共数据
   * release:页面数据
   * preview:页面数据
   * visual:页面数据
   * component:组件数据
   */
  @observable common = { version: null, ui: [] };
  @observable release = { url: null, sid: null, pv: null };
  @observable preview = { cover: null, desc: null, title: null };
  @observable visual = { editor: {}, choose: 0, img: {} };
  @observable component = { bg: { ...$$bg_db }, music: null };
  @observable test = { ui: [] };
}

const store = new Store();

export default store;
