import { fromJS } from 'immutable';

const $$button = (
  name,
  width,
  height,
  font_color,
  bg_color,
  img_url,
  tiling,
  radius
) => {
  return {
    customize: {
      type: 'button',
      name: name,
      btn_url: { value: '' },
      shadow: { value: undefined },
      bg_color: bg_color,
      radius: { value: radius },
      content: { value: '' },
      font_color: font_color,
    },
    advance: {
      color: '',
      style_color: '',
      img: img_url,
      crop_img: img_url,
      img_config: {
        stretching: { value: '' },
        tiling: { value: tiling },
      },
      move: false,
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

const $$button_database = fromJS(
  $$button('button', 150, 40, 'white', '#2EA5FF')
);

const $$btn_re_1 = fromJS(
  $$button(
    'btn_re_1',
    186,
    49,
    'white',
    'transparent',
    'http://src.e7wei.com/0.21214677242156488.png',
    true
  )
);

const $$btn_re_2 = fromJS(
  $$button(
    'btn_re_2',
    186,
    49,
    'white',
    'transparent',
    'http://src.e7wei.com/0.2228652186281075.png',
    true
  )
);

const $$btn_re_3 = fromJS(
  $$button(
    'btn_re_3',
    186,
    49,
    'white',
    'transparent',
    'http://src.e7wei.com/0.2812003343951739.png',
    true
  )
);

const $$btn_re_4 = fromJS(
  $$button(
    'btn_re_4',
    186,
    49,
    'white',
    'transparent',
    'http://src.e7wei.com/0.3811889973393192.png',
    true
  )
);

const $$btn_re_5 = fromJS(
  $$button(
    'btn_re_5',
    186,
    49,
    'white',
    'transparent',
    'http://src.e7wei.com/0.36788814909137724.png',
    true
  )
);

const $$btn_re_6 = fromJS($$button('btn_re_6', 150, 40, '#000', 'white'));

const $$btn_re_7 = fromJS(
  $$button('btn_re_7', 150, 40, '#FFF', 'grey', '', '', 50)
);

export {
  $$button_database,
  $$btn_re_1,
  $$btn_re_2,
  $$btn_re_3,
  $$btn_re_4,
  $$btn_re_5,
  $$btn_re_6,
  $$btn_re_7,
};
