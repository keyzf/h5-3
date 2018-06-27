import { fromJS } from 'immutable';

export const $$api = fromJS({
  development: {
    //修改模板信息
    editorH5: 'http://localhost:3001/one_ui',
    showH5: 'http://localhost:3001/one_ui',
    share: 'http://localhost:3001/one_ui',
  },
  produce: {
    //修改模板信息
    editorH5: '',
    showH5: '',
    share: 'http://localhost:3001/one_ui',
  },
});
