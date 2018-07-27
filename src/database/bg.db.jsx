import { fromJS } from 'immutable';

export const $$bg_db = fromJS({
  type: 'background',
  name: 'background',
  customize: {
    color: '',
    img: '',
    crop_img: '',
    height: 600,
    img_config: {
      repeat: undefined,
      fixed: undefined,
    },
  },
});
