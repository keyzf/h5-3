import { action } from "mobx";
import { IStore } from "./store";
import random from "../utils/random";

/**
 * @description 后台返回的数据 （getData 接口） 处理后传递来的参数
 */
interface I_info {
  bg: any;
  cover: string;
  desc: string;
  form: any;
  music: any;
  pv: number;
  sid: number;
  title: string;
  ui: any;
  version: number;
}

/**
 * ui组件调整宽高时的接口
 */
interface I_resize {
  top: number;
  left: number;
  width: number;
  height: number;
}

/**
 * @description 修改数据源中的数据
 */
export default class Action {
  private store: IStore;

  constructor(rootStore) {
    this.store = rootStore;
  }

  /**
   * 公共action
   */
  @action("全局更新数据源数据")
  globalUpData = (info: I_info, url: string) => {
    this.store.common = {
      version: info.version,
      ui: JSON.parse(info.ui),
      id: this.store.common.id,
      state: this.store.common.state
    };
    this.store.release = { url: url, pv: info.pv };
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

  @action("将id与state添加至公共数据")
  addIdState = (id: number, state: string) => {
    this.store.common.id = id;
    this.store.common.state = state;
  };

  /**
   * visual页面涉及的action
   */

  @action("向ui添加数据")
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

    this.store.common.ui.push(data);
    this.store.visual.choose = this.store.common.ui.length - 1;
  };

  @action("画布中选择要操作的组件")
  chooseUi = (index: number) => (this.store.visual.choose = index);

  @action("ui组件上移")
  upUi = () => --this.store.common.ui[this.store.visual.choose].position.top;

  @action("组件下移")
  down = () => ++this.store.common.ui[this.store.visual.choose].position.top;

  @action("ui组件左移")
  LeftUi = () => --this.store.common.ui[this.store.visual.choose].position.left;

  @action("ui 组件右移")
  rightUi = () =>
    ++this.store.common.ui[this.store.visual.choose].position.left;

  @action("ui图层下移")
  layerDown = () =>
    --this.store.common.ui[this.store.visual.choose].position.zIndex;

  @action("ui图层上移")
  layerUp = () =>
    ++this.store.common.ui[this.store.visual.choose].position.zIndex;

  @action("ui组件旋转数值")
  rotateUi = (data: number) =>
    (this.store.common.ui[this.store.visual.choose].position.rotate = data);

  @action("ui中进行复制操作")
  copy = () => {
    const index = this.store.visual.choose;
    const id: any = document.getElementById("content");
    this.store.common.ui.push(
      JSON.parse(JSON.stringify(this.store.common.ui[index]))
    );
    this.store.visual.choose = this.store.common.ui.length - 1;
    // 添加组件时附加定位
    if (this.store.common.ui[this.store.visual.choose].common.type === "text") {
      this.store.common.ui[this.store.visual.choose].base.index = random();
    }
    try {
      const t = id.scrollTop || id.body.scrollTop;
      const h = id.clientHeight;
      this.store.common.ui[this.store.visual.choose].position.top =
        h / 2 +
        t -
        this.store.common.ui[this.store.visual.choose].position.height / 2;
      this.store.common.ui[this.store.visual.choose].position.left =
        (320 - this.store.common.ui[this.store.visual.choose].position.width) /
        2;
    } catch (error) {
      this.store.common.ui[this.store.visual.choose].position.top =
        this.store.common.ui[this.store.visual.choose].position.height / 2;
      this.store.common.ui[this.store.visual.choose].position.left =
        (320 - this.store.common.ui[this.store.visual.choose].position.width) /
        2;
    }
  };

  @action("删除ui数据源中指定ui")
  delete = () => {
    const index = this.store.visual.choose;
    this.store.common.ui.splice(index, 1);
  };

  @action("ui组件拖动")
  drag = (data: { top: number; left: number }) => {
    const index = this.store.visual.choose;
    this.store.common.ui[index].position.top += data.top;
    this.store.common.ui[index].position.left += data.left;
  };

  @action("ui组件大小拖选")
  resize = (data: I_resize) => {
    const index = this.store.visual.choose;
    this.store.common.ui[index].position.top = data.top;
    this.store.common.ui[index].position.left = data.left;
    this.store.common.ui[index].position.width = data.width;
    this.store.common.ui[index].position.height = data.height;
  };
}