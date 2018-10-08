import { computed } from 'mobx';
import { IStore } from './store';


/**
 * @description 监听数据变化
 */
export default class Computes {
  private store: IStore;

  constructor(rootStore) {
    this.store = rootStore;
  }

  /**
   * @description visual页面，工具栏显示内容
   */
  @computed get toolbox() {
    return this.store.common.ui[this.store.visual.choose];
  }
}