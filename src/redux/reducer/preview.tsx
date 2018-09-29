export const RxPreview = (state = { cover: '', title: '', desc: '' }, action) => {
  switch (action.type) {
    case 'RxPreview_UpData':
      return '';
    default:
      return state;
  }
};
