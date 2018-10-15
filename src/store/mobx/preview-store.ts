import { action, observable } from 'mobx';
import { IRootStore } from '../root-store';

export interface IPreviewStore {
  cover: string;
  desc: string;
  title: string;
}


export default class PreviewStore {
  private rootStore: IRootStore;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable public cover: string = '';
  @observable public desc: string = '';
  @observable public title: string = '';

  @action('测试')
  test = () => {
    this.rootStore.ui = [];
  };
}
