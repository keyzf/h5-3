import $$bg_db from "../../resources/bg/bg.db";

export const RxBg = (state = { ...$$bg_db }, action) => {
  switch (action.type) {
    case "RxBg_UpData":
      return {
        data: action.payload
      };
    default:
      return state;
  }
};
