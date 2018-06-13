import { fromJS } from 'immutable';

const $$button = name => {
  return {
    customize: {
      name: name,
      width: { value: '' },
      height: { value: '' },
      btn_url: { value: '' },
      shadow: { value: undefined },
      radius: { value: '' },
      content: { value: '' },
    },
    advance: {
      color: '',
      img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      perimeter: { width: { value: 319 }, height: { value: 147 } },
      transform: { translateX: { value: 0 }, translateY: { value: 0 } },
    },
  };
};

const $$button_database = fromJS($$button('button'));

export { $$button_database };
