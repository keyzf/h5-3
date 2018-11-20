import produce from "immer";
import BgData from "../resource/background/database";

const store = {
  bg: BgData,
  music: "",
  ui: [],
  share: { title: "测试标题", desc: "测试内容", cover: "" },
  baseline: { h: [], v: [], color: "#ff5722" },
  edit: { type: "share", number: [] }
};

const reducer = (state = store, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EDIT_VALUE":
      return produce(state, draftState => {
        draftState.edit = {
          ...draftState.edit,
          ...payload
        };
      });
    case "BASELINE_ADD":
      return produce(state, draftState => {
        payload === "v" ? draftState.baseline.v.push(0) : draftState.baseline.h.push(0);
      });
    case "BASELINE_VALUE":
      return produce(state, draftState => {
        draftState.baseline = {
          ...draftState.baseline,
          ...payload
        };
      });
    case "BG_VALUE":
      return produce(state, draftState => {
        draftState.bg.base = {
          ...draftState.bg.base,
          ...payload
        };
      });
    case "SHARE_VALUE":
      return produce(state, draftState => {
        draftState.share = {
          ...draftState.share,
          ...payload
        };
      });
    case "UI_PUSHDATA":
      return produce(state, draftState => {
        draftState.ui.push(payload);
      });
    default:
      return state;
  }
};

export default reducer;
