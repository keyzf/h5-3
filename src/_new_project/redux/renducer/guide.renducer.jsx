import { fromJS } from "immutable";


const data = fromJS({ guide: false });
const guide_reducer = (state = { data: data }, action) => {
  switch (action.type) {
    case "GUIDE":
      return {
        data: action.payload
      };
    default:
      return state;
  }
};

export { guide_reducer };
