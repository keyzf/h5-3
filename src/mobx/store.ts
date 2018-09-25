import { observable, computed, action } from 'mobx';


class Store {

  /**
   * 公共数据
   */
  @observable common = { version: null, ui: null };
  /**
   * 页面数据
   */
  @observable release = { url: null, sid: null, pv: null };
  @observable preview = { cover: null, desc: null, title: null };
  @observable visual = { editor: '', choose_ui: '' };
  /**
   * 组件数据
   */
  @observable component = { bg: null, music: null };

  /**
   * 全部数据更新
   */
  @action globalUpData = (info, url) => {
    this.common = { version: info.version, ui: info.ui };
    this.release = { url: url, sid: info.sid, pv: info.pv };
    this.preview = { cover: info.cover, desc: info.desc, title: info.title };
    this.component = { bg: info.bg, music: info.music };
  };

  /**
   * 检测数据，自动更新
   */
  @computed get unfinishedTodoCount() {
    return '';
  }

}

export default Store;