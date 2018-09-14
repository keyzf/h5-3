import { fromJS } from 'immutable';

export const $$bg_db = fromJS({
  type: 'background',
  name: 'background',
  customize: {
    color: 'white',
    img: '',
    crop_img: '',
    height: 600,
    img_config: {
      repeat: undefined,
      fixed: undefined,
    },
  },
});
