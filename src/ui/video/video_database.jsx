import { fromJS } from 'immutable';

export const $$video_database = name => {
  return fromJS({
    customize: {
      name: name,
      video: 'https://e7wei-img.oss-cn-beijing.aliyuncs.com/movie.mp4',
      share: '',
      history: [],
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
