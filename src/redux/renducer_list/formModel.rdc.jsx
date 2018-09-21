import { fromJS } from "immutable";

export const formModle_rdc = (state = { data: fromJS({ show: false }) }, action) => {
  switch (action.type) {
    case "FORMMODEL":
      return {
        data: action.payload
      };
    default:
      return state;
  }
};
