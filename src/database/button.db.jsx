import { fromJS } from 'immutable';

const $$button = (name, width, height, font_color) => {
  return {
    customize: {
      type: 'button',
      name: name,
      btn_url: { value: '' },
      shadow: { value: undefined },
      radius: { value: '' },
      content: { value: '' },
      font_color: font_color,
    },
    advance: {
      color: '',
      img: '',
      crop_img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      live: false,
      width: width,
      height: height,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100,
    },
  };
};

const $$button_database = fromJS($$button('button', 100, 40, 'black'));

const $$one_button_database = fromJS($$button('one_button', 100, 40, 'white'));

export { $$button_database, $$one_button_database };
