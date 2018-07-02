import { fromJS } from 'immutable';

const $$button = (name, height, font_color) => {
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
      perimeter: { width: { value: 320 }, height: { value: height } },
      transform: { translateX: { value: 0 }, translateY: { value: 0 } },
    },
  };
};

const $$button_database = fromJS($$button('button', 40, 'black'));

const $$one_button_database = fromJS($$button('one_button', 40, 'white'));

export { $$button_database, $$one_button_database };
