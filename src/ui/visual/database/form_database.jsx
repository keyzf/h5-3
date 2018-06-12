import { fromJS } from 'immutable';

export const $$form_database = name => {
  return {
    customize: {
      name: name,
      item: [],
    },
    advance: {
      position: {
        depth: { value: 0 },
        top: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
        bottom: { value: 0 },
      },
      color: '',
      img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      padding: {
        top: { value: 0 },
        bottom: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
      },
    },
  };
};

export const $$form_item_database = (type, decorator, title, option) => {
  return {
    type: type,
    title: title,
    decorator: decorator,
    option: option,
  };
};

export const $$from_opt_input = fromJS({
  type: 'input',
  title: { value: '输入框' },
  decorator: 'input',
  option: { value: '' },
});

export const $$from_opt_rate = fromJS({
  type: 'rate',
  title: { value: '评分栏' },
  decorator: 'rate',
  option: { value: '' },
});

export const $$from_opt_checkbox = fromJS({
  type: 'checkbox',
  title: { value: '多选框' },
  decorator: 'checkbox',
  option: ['Apple', 'Pear', 'Orange'],
});

export const $$from_opt_datepicker = fromJS({
  type: 'datePicker',
  title: { value: '日期选择' },
  decorator: 'datePicker',
  option: { value: '' },
});
