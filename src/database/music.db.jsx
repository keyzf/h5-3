import { fromJS } from 'immutable';

export const $$music_database = (name, url) => {
  return fromJS({
    customize: {
      type: 'music',
      name: name,
      //上传
      music: url,
      // 上传历史
      history: [],
      // 是否自动播放
      auto: { value: 'autoPlay' },
    },
    advance: {
      color: '',
      img: '',
      crop_img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      width: 50,
      height: 50,
      left: 10,
      top: 40,
      live: false,
      rotate: 0,
      zIndex: 100,
    },
  });
};
