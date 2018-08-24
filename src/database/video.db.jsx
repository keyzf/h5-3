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
      crop_img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      move: false,
      width: 300,
      height: 170,
      left: 0,
      live: false,
      top: 0,
      rotate: 0,
      zIndex: 100,
    },
  });
};
