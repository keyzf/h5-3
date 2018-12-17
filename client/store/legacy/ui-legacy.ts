import textAdapter from "./text-legacy";
import pictureAdapter from "./picture-legacy";
import videoAdapter from "./video-legacy";
import buttonAdapter from "./button-legacy";
import formAdapter from "./form-legacy";

const ui_legacy = (data): any => {
    const new_data = [];
    data.map((data, index) => {
        if (data.customize.type === "form") {
            new_data[index] = formAdapter(data);
        }
        if (data.customize.type === "text") {
            new_data[index] = textAdapter(data);
        }
        if (data.customize.type === "img") {
            new_data[index] = pictureAdapter(data);
        }
        if (data.customize.type === "video") {
            new_data[index] = videoAdapter(data);
        }
        if (data.customize.type === "button") {
            new_data[index] = buttonAdapter(data);
        }

    });
    return new_data;
};

export default ui_legacy