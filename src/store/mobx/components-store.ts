import { action, observable } from "mobx";
import { IRootStore } from "../root-store";

export interface IComponentsStore {
  bg: object;
  music: object;
}

export default class ComponentsStore {
  private rootStore: IRootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable public bg: object = {};
  @observable public music: object = {};

  @action("测试")
  test = () => {
    this.rootStore.ui = [];
  };
}
