import { action, observable } from "mobx";
import { IRootStore } from "../root-store";

export interface IVisualStore {
  choose: number;
  img: object;
  log: object[]; //  函数
  createLog: any;
  changeLog: any;
}

export default class VisualStore {
  private rootStore: IRootStore;

  @observable public choose: number = 0;
  @observable public img: object = {};
  @observable public log: any = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action("创建历史记录")
  createLog = () => {
    const data: { time: any; bg: object; music: object; ui: object } = {
      time: new Date(),
      bg: this.rootStore.componentsStore.bg,
      music: this.rootStore.componentsStore.music,
      ui: this.rootStore.ui
    };
    if (this.log.length) {
      if (
        new Date(data.time).getMinutes() -
          new Date(this.log[0].time).getMinutes() >=
        5
      ) {
        this.log.unshift(data);
        if (this.log.length > 10) {
          this.log.length = 10;
        }
        localStorage.setItem(
          `e7wei-log-${this.rootStore.id}`,
          JSON.stringify(this.log)
        );
      }
    } else {
      this.log.unshift(data);
      localStorage.setItem(
        `e7wei-log-${this.rootStore.id}`,
        JSON.stringify(this.log)
      );
    }
    setTimeout(() => this.createLog(), 5 * 60 * 1000);
  };

  @action("历史记录数据替换")
  changeLog = (index: number) => {
    this.rootStore.ui = this.log[index].ui;
    this.rootStore.componentsStore.bg = this.log[index].bg;
    this.rootStore.componentsStore.music = this.log[index].music;
  };
}
