import { fromJS } from "immutable";

const $$button = (name, width, height) => {
  return {
    customize: {
      name: name,
      btn_url: { value: "" },
      shadow: { value: undefined },
      radius: { value: "" },
      content: { value: "" }
    },
    advance: {
      color: "",
      img: "",
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      },
      perimeter: { width: { value: width }, height: { value: height } },
      transform: { translateX: { value: 0 }, translateY: { value: 0 } }
    }
  };
};

const $$button_database = fromJS($$button("button", 320, 40));

const $$one_button_database = fromJS($$button("one_button", 320, 40));

export { $$button_database, $$one_button_database };
