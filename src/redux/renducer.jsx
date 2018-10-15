import { combineReducers } from "redux";
import { h5Data_rdc } from "./renducer_list/h5Data.rdc";
import { shareMsg_rdc } from "./renducer_list/shareMsg.rdc";
import { release_rdc } from "./renducer_list/release.rdc";
import { sid_rdc } from "./renducer_list/sid.rdc";
import { editorUi_rdc } from "./renducer_list/editorUi.rdc";
import { bgUi_rdc } from "./renducer_list/bgUi.rdc";
import { musicUi_rdc } from "./renducer_list/musicUi.rdc";
import { imgModel_rdc } from "./renducer_list/imgModel.rdc";
import { formModle_rdc } from "./renducer_list/formModel.rdc";

export const renducer = combineReducers({
  sid_rdc,
  h5Data_rdc,
  shareMsg_rdc,
  release_rdc,
  editorUi_rdc,
  bgUi_rdc,
  musicUi_rdc,
  imgModel_rdc,
  formModle_rdc
});
