import { fromJS } from 'immutable';

export const $$music_database = name => {
  return fromJS({
    customize: {
      name: name,
      //上传
      music: 'https://e7wei-img.oss-cn-beijing.aliyuncs.com/music.mp3',
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
      perimeter: { width: { value: 319 }, height: { value: 147 } },
      transform: { translateX: { value: 0 }, translateY: { value: 0 } },
    },
  });
};
