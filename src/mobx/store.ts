import { observable, computed, action } from 'mobx';
import $$bg_db from '../resources/bg/bg.db';

class Store {
  /**
   * 公共数据
   */
  @observable common = { version: null, ui: [] };
  /**
   * 页面数据
   */
  @observable release = { url: null, sid: null, pv: null };
  @observable preview = { cover: null, desc: null, title: null };
  @observable visual = { editor: {}, choose: 0, img: {} };
  /**
   * 组件数据
   */
  @observable component = { bg: { ...$$bg_db }, music: null };

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
   * 向ui中添加数据，并修改editor与choose的值
   * @param data
   */
  @action addUi = data => {
    let new_ui = this.common.ui;
    console.log(new_ui);
    new_ui.push(data);
    this.visual = {
      editor: data,
      choose: this.common.ui.length - 1,
      img: this.visual.img,
    };
    this.common = {
      version: this.common.version,
      ui: new_ui,
    };
  };
  /**
   * 修改editor与choose的值
   * @param data
   * @param index
   */
  @action chooseUi = (data, index) => {
    this.visual = {
      editor: data,
      choose: index,
      img: this.visual.img,
    };
  };
  /**
   * 修改ui中某一项的值
   * @param data
   * @param index
   */
  @action editorUiItem = (data, index) => {
    let new_ui = this.common.ui;
    new_ui[index] = data;
    this.common.ui = new_ui;
  };
  /**
   * 修改ui组件位置与删除
   * @param name
   * @param index
   */
  @action optUi = (name: string, index) => {
    // let new_ui = this.common.ui;
    this.common = { version: null, ui: [] };
    this.visual = { editor: {}, choose: 0, img: {} };
    console.log(this.common.ui);
    console.log(name, index);
    // switch (name) {
    //   case 'delete':
    //     let new_ui = this.common.ui;
    //     console.log(new_ui);
    //     new_ui.splice(index + 1, 1);
    //     console.log(new_ui);
    //     return this.common.ui = new_ui;
    // }

  };

  /**
   * 检测数据，自动更新
   */
  @computed
  get unfinishedTodoCount() {
    return '';
  }
}

const MxStore = new Store();

export default MxStore;
