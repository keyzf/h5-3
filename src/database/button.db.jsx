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
      style_color: '',
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
const $$two_button_database = fromJS($$button('two_button', 220, 70, 'white'));
const $$three_button_database = fromJS(
  $$button('three_button', 220, 70, 'white')
);
const $$four_button_database = fromJS(
  $$button('four_button', 220, 70, 'white')
);
export {
  $$button_database,
  $$one_button_database,
  $$two_button_database,
  $$three_button_database,
  $$four_button_database,
};
