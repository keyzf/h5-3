import { fromJS } from 'immutable'; //不可变数据结构库

/**
 * 背景组件数据结构
 * @type {any}
 */
export const $$background_database = fromJS({
  // 组件名称，用于后期的content判断与editor判断
  name: 'background',
  // 基础属性
  customize: {
    //背景色
    color: '',
    //背景图
    img: '',
    crop_img: '',
    // 背景图的配套属性
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
