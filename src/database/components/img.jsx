import { List, Map } from 'immutable';

export const $$img_add_item = {
  upload: { value: '' },
  title: { value: '标题' },
  content: { value: '内容' },
  link: { value: '' },
  width: { value: '' },
  height: { value: '' },
};

export const $$img_database = (number, name) => {
  let $$img_item;
  if (number === 1) {
    $$img_item = List([
      {
        upload: { value: '' },
        title: { value: '标题' },
        content: { value: '内容' },
        link: { value: '' },
        width: { value: '' },
        height: { value: '' },
      },
    ]);
  }
  if (number === 4) {
    $$img_item = List([
      {
        upload: { value: '' },
        title: { value: '标题一' },
        content: { value: '内容yi' },
        link: { value: '' },
        width: { value: '' },
        height: { value: '' },
      },
      {
        upload: { value: '' },
        title: { value: '标题二' },
        content: { value: '内容二' },
        link: { value: '' },
        width: { value: '' },
        height: { value: '' },
      },
      {
        upload: { value: '' },
        title: { value: '标题三' },
        content: { value: '内容三' },
        link: { value: '' },
        width: { value: '' },
        height: { value: '' },
      },
      {
        upload: { value: '' },
        title: { value: '标题四' },
        content: { value: '内容四' },
        link: { value: '' },
        width: { value: '' },
        height: { value: '' },
      },
    ]);
  }

  return {
    customize: Map({
      name: name,
      item: $$img_item,
      base: {
        show_element: { value: undefined },
        layout: { value: 0 },
      },
    }),
    advance: Map({
      position: {
        depth: { value: 0 },
        top: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
        bottom: { value: 0 },
      },
      color: {
        color: { value: '' },
        gradientStart: { value: '' },
        gradientEnd: { value: '' },
        slider: { value: 0 },
      },
      img: {
        upload: { value: '' },
      },
      padding: {
        top: { value: 0 },
        bottom: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
      },
    }),
  };
};
