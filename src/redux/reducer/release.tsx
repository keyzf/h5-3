export const RxRelease = (state = { sid: '', pv: '', url: '' }, action) => {
  switch (action.type) {
    case 'RxRelease_UpData':
      return '';
    default:
      return state;
  }
};
