import { fromJS } from "immutable";

const data = fromJS({ url: "" });
const release_reducer = (state = { data: data }, action) => {
  switch (action.type) {
    case "RELEASE":
      return {
        data: action.payload
      };
    default:
      return state;
  }
};

export { release_reducer };
