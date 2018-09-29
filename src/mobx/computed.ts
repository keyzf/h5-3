import { computed, configure } from 'mobx';
import store from './store';

configure({ enforceActions: 'observed' });

class Computed {
  private store: any;

  constructor({ store }) {
    this.store = store;
  }

  @computed
  get ui() {
    return this.store.common.ui;
  }

  @computed
  get choose() {
    return this.store.visual.choose;
  }

  @computed
  get editor() {
    console.log('computed_editor');
    return this.store.visual.editor;
  }

  @computed
  get bg() {
    return this.store.component.bg;
  }
}

const computes = new Computed({ store });

export default computes;
