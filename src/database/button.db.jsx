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

const $$button_database = fromJS($$button('button', 150, 40, '#FFF', '#666'));

const $$btn_re_1 = fromJS(
  $$button(
    'btn_re_1',
    155,
    68,
    'white',
    'transparent',
    'https://pimg.xiuzan.com/market/2017/03/20170324134822_BTQtNP?x-oss-process=image/resize,w_750',
    true
  )
);

const $$btn_re_2 = fromJS(
  $$button(
    'btn_re_2',
    155,
    68,
    'white',
    'transparent',
    'https://pimg.xiuzan.com/market/2017/03/20170324134828_MpFC3c?x-oss-process=image/resize,w_750',
    true
  )
);

const $$btn_re_3 = fromJS(
  $$button(
    'btn_re_3',
    155,
    68,
    'white',
    'transparent',
    'https://pimg.xiuzan.com/market/2017/03/20170324134833_TjSKBd?x-oss-process=image/resize,w_750',
    true
  )
);

const $$btn_re_4 = fromJS(
  $$button(
    'btn_re_4',
    163,
    86,
    'white',
    'transparent',
    'https://pimg.xiuzan.com/market/2017/03/20170324134838_ZTRPTA?x-oss-process=image/resize,w_750',
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
    'https://pimg.xiuzan.com/market/2017/03/20170324134843_PC8stN?x-oss-process=image/resize,w_750',
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
