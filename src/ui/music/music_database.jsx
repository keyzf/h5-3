import { fromJS } from 'immutable';

export const $$music_database = (name,url) => {
  return fromJS({
    customize: {
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
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      perimeter: { width: { value: 80}, height: { value: 80} },
      transform: { translateX: { value: 0 }, translateY: { value: 0 } },
    },
  });
};
