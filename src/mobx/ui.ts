import { types } from 'mobx-state-tree';




const MxUi = types.model('MxUi', { ui: types.array({data:})})
  .actions((data: object) => ({
    action1() {},
    action2() {},
  }))
  .views(self => ({}));

const Store = types.model('Store', {
  Store: types.map(MxUi),
});

export default Store;