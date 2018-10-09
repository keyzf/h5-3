// 固定引入
import { computed } from 'mobx';
// IStore接口
import { IStore } from './store';

// 监听数据变化
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