import { fromJS } from 'immutable';

export const $$video_database = (name, url) => {
  return fromJS({
    customize: {
      type: 'video',
      name: name,
      video: url,
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
      perimeter: { width: { value: 320 }, height: { value: 174 } },
      transform: { translateX: { value: 0 }, translateY: { value: 0 } },
    },
  });
};
