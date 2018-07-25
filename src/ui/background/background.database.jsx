import { fromJS } from 'immutable';

const $$background_database = fromJS({
  name: 'background',
  customize: {
    color: '',
    img: '',
    crop_img: '',
    img_config: {
      //重复：背景图随x轴重复
      repeat: undefined,
      //固定：图片锁定在固定位置
      fixed: undefined,
    },
  },
  advanced: {
    height: { value: 0 },
  },
});

export { $$background_database };
