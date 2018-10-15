import { fromJS } from "immutable";

export const imgModel_rdc = (
  state = {
    data: fromJS({
      current: 1,
      number: 0,
      img_library: [],
      img_url: ""
    })
  },
  action
) => {
  switch (action.type) {
    case "IMGMODEL":
      return {
        data: action.payload
      };
    default:
      return state;
  }
};
