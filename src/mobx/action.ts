import { action } from "mobx";
import store from "./store";
import random from "../utils/random";

class Actions {
  private store: any;

  constructor({ store }) {
    this.store = store;
  }

  @action
  globalUpData = (info: any, url: string) => {
    this.store.common = { version: info.version, ui: JSON.parse(info.ui) };
    this.store.release = { url: url, sid: info.sid, pv: info.pv };
    this.store.preview = {
      cover: info.cover,
      desc: info.desc,
      title: info.title
    };
    this.store.component = {
      bg: JSON.parse(info.bg),
      music: JSON.parse(info.music)
    };
  };
  @action
  addUi = (data: any) => {
    const fun = data => {
      return { ...data };
    };
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

    this.store.common.ui.push(fun(data));
    this.store.visual.choose = this.store.common.ui.length - 1;
  };
  @action
  chooseUi = (data: any, index: number) => {
    this.store.visual.choose = index;
  };
  @action
  editorUiItem = (name: string, data: any, index: number) => {
    switch (name) {
      case "copy":
        const index = this.store.visual.choose;
        this.store.common.ui.push(JSON.parse(JSON.stringify(this.store.common.ui[index])));

        // 添加组件时附加定位
        const id: any = document.getElementById("content");
        if (this.store.common.ui[this.store.common.ui.length].common.type === "text") {
          this.store.common.ui[
            this.store.common.ui.length
          ].base.index = random();
        }
        try {
          const t = id.scrollTop || id.body.scrollTop;
          const h = id.clientHeight;
          this.store.common.ui[this.store.common.ui.length].position.top =
            h / 2 +
            t -
            this.store.common.ui[this.store.common.ui.length].position.height /
              2;
          this.store.common.ui[this.store.common.ui.length].position.left =
            (320 -
              this.store.common.ui[this.store.common.ui.length].position
                .width) /
            2;
        } catch (error) {
          this.store.common.ui[this.store.common.ui.length].position.top =
            this.store.common.ui[this.store.common.ui.length].position.height /
            2;
          this.store.common.ui[this.store.common.ui.length].position.left =
            (320 -
              this.store.common.ui[this.store.common.ui.length].position
                .width) /
            2;
        }
        this.store.visual.choose = this.store.common.ui.length - 1;
        break;
      case "delete":
        return this.store.common.ui.splice(index, 1);
      case "rotate":
        return (this.store.common.ui[index].position.rotate = data);
      case "drag":
        this.store.common.ui[this.store.visual.choose].position.top =
          this.store.common.ui[this.store.visual.choose].position.top +
          data.top;
        this.store.common.ui[this.store.visual.choose].position.left =
          this.store.common.ui[this.store.visual.choose].position.left +
          data.left;
        break;
      case "resize":
        this.store.common.ui[index].position.top = data.top;
        this.store.common.ui[index].position.left = data.left;
        this.store.common.ui[index].position.width = data.width;
        this.store.common.ui[index].position.height = data.height;
        break;
      case "move_left":
        return --this.store.common.ui[index].position.left;
      case "move_up":
        return --this.store.common.ui[index].position.top;
      case "move_right":
        return ++this.store.common.ui[index].position.left;
      case "move_down":
        return ++this.store.common.ui[index].position.top;
    }
  };
}

const actions = new Actions({ store });

export default actions;
