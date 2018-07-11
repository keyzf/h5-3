import { Map } from "immutable";

const choose_data = {
  data: Map(),
  meta: Map({ content: false, choose: false })
};

const editor_ui_reducer = (state = { ...choose_data }, action) => {
  switch (action.type) {
    case "EDITOR_UI":
      return {
        data: action.payload,
        meta: action.meta
      };
    default:
      return state;
  }
};

export { editor_ui_reducer };
