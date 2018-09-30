import { action, computed, observable, when, configure } from "mobx";
import $$bg_db from "../resources/bg/bg.db";
import random from "../utils/random";

configure({ enforceActions: "observed" });

class Store {
  constructor() {
    when(
      () => this.component.bg === null,
      () => (this.component.bg = { ...$$bg_db })
    );
  }

  /**
   * 数据源
   */
  @observable common = { version: null, ui: [] };
  @observable release = { url: null, sid: null, pv: null };
  @observable preview = { cover: null, desc: null, title: null };
  @observable visual = { choose: 0, img: {} };
  @observable component = { bg: null, music: null };

  /**
   * 对数据源进行操作
   */
  @action
  globalUpData = (info: any, url: string) => {
    this.common = { version: info.version, ui: JSON.parse(info.ui) };
    this.release = { url: url, sid: info.sid, pv: info.pv };
    this.preview = {
      cover: info.cover,
      desc: info.desc,
      title: info.title
    };
    this.component = {
      bg: JSON.parse(info.bg),
      music: JSON.parse(info.music)
    };
  };
  @action
  addUi = (data: any) => {
    // 添加组件时附加定位
    const id: any = document.getElementById("content");
    try {
      const t = id.scrollTop || id.body.scrollTop;
      const h = id.clientHeight;
      data.position.top = h / 2 + t - data.position.height / 2;
      data.position.left = (320 - data.position.width) / 2;
    } catch (error) {
      data.position.top = data.position.height / 2;
      data.position.left = (320 - data.position.width) / 2;
    }

    this.common.ui.push(data);
    this.visual.choose = this.common.ui.length - 1;
  };
  @action
  chooseUi = (index: number) => {
    this.visual.choose = index;
  };
  @action
  editorUiItem = (name: string, data: any) => {
    const index = this.visual.choose;
    switch (name) {
      case "copy":
        const id: any = document.getElementById("content");
        this.common.ui.push(JSON.parse(JSON.stringify(this.common.ui[index])));
        this.visual.choose = this.common.ui.length - 1;
        // 添加组件时附加定位
        if (this.common.ui[this.visual.choose].common.type === "text") {
          this.common.ui[this.visual.choose].base.index = random();
        }
        try {
          const t = id.scrollTop || id.body.scrollTop;
          const h = id.clientHeight;
          this.common.ui[this.visual.choose].position.top =
            h / 2 + t - this.common.ui[this.visual.choose].position.height / 2;
          this.common.ui[this.visual.choose].position.left =
            (320 - this.common.ui[this.visual.choose].position.width) / 2;
        } catch (error) {
          this.common.ui[this.visual.choose].position.top =
            this.common.ui[this.visual.choose].position.height / 2;
          this.common.ui[this.visual.choose].position.left =
            (320 - this.common.ui[this.visual.choose].position.width) / 2;
        }
        break;
      case "delete":
        return this.common.ui.splice(index, 1);
      case "rotate":
        return (this.common.ui[index].position.rotate = data);
      case "drag":
        this.common.ui[this.visual.choose].position.top =
          this.common.ui[this.visual.choose].position.top + data.top;
        this.common.ui[this.visual.choose].position.left =
          this.common.ui[this.visual.choose].position.left + data.left;
        break;
      case "resize":
        this.common.ui[index].position.top = data.top;
        this.common.ui[index].position.left = data.left;
        this.common.ui[index].position.width = data.width;
        this.common.ui[index].position.height = data.height;
        break;
      case "move_left":
        return --this.common.ui[index].position.left;
      case "move_up":
        return --this.common.ui[index].position.top;
      case "move_right":
        return ++this.common.ui[index].position.left;
      case "move_down":
        return ++this.common.ui[index].position.top;
      case "layerUp":
        return ++this.common.ui[index].position.zIndex;
      case "layerDown":
        return --this.common.ui[index].position.zIndex;
    }
  };

  /**
   * 监测数据变化
   */

  @computed
  get editor() {
    return this.common.ui[this.visual.choose];
  }
}

const store = new Store();

export default store;
