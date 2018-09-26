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
  @observable visual = { editor: '', choose: '', img: {} };
  /**
   * 组件数据
   */
  @observable component = { bg: null, music: null };

  /**
   * 全部数据更新
   */
  @action globalUpData = (info, url) => {
    this.common = { version: info.version, ui: JSON.parse(info.ui) };
    this.release = { url: url, sid: info.sid, pv: info.pv };
    this.preview = { cover: info.cover, desc: info.desc, title: info.title };
    this.component = { bg: JSON.parse(info.bg), music: JSON.parse(info.music) };
  };

  /**
   * 检测数据，自动更新
   */
  @computed get unfinishedTodoCount() {
    return '';
  }
}

export default Store;