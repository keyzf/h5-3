import { action, observable } from 'mobx';
import { IRootStore } from '../root-store';


export interface IReleaseStore {
  url: string;
  pv: number;
  self: number;
}

export default class ReleaseStore {
  private rootStore: IRootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable public url: string = '';
  @observable public pv: number = 0;
  @observable public self: number = 0;
  @action('测试')
  test = () => {
    this.rootStore.ui = [];
  };
}
