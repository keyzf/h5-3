import textAdapter from "./text-legacy";
import pictureAdapter from "./picture-legacy";
import videoAdapter from "./video-legacy";
import buttonAdapter from "./button-legacy";
import formAdapter from "./form-legacy";

const ui_legacy = (data): any => {
  const new_data = [];
  data.map((data, index) => {
    if (data.customize.type === "form") {
      new_data.push(formAdapter(data));
    }
    if (data.customize.type === "text") {
      new_data.push(textAdapter(data));
    }
    if (data.customize.type === "img") {
      new_data.push(pictureAdapter(data));
    }
    if (data.customize.type === "video") {
      new_data.push(videoAdapter(data));
    }
    if (data.customize.type === "button") {
      new_data.push(buttonAdapter(data));
    }
  });
  return new_data;
};

export default ui_legacy;
