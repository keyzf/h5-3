export const RxEditor = (state = { data: {}, index: 0 }, action) => {
  switch (action.type) {
    case 'RxEditor_UpData':
      return { data: { ...action.payload.data }, index: action.payload.index };
    case 'RxEditor_UpIndex':
      return { data: { ...state.data }, index: action.payload};
    default:
      return state;
  }
};
