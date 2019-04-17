interface oldData {
  customize: {
    type: string;
    types: string;
    name: string;
    item: object[];
    btn_content: {
      value: "提交";
    };
    btn_color: "white";
    btn_bg_color: "";
  };
  advance: {
    color: "";
    img: "";
    width: 300;
    left: 10;
    height: 500;
    live: false;
    move: true;
    crop_img: "";
    top: 36;
    zIndex: 100;
    rotate: 0;
    img_config: {
      stretching: {
        value: "";
      };
      tiling: {
        value: "";
      };
    };
  };
}

const formAdapter = (oldData: oldData): object => {
  const items = [];

  oldData.customize.item.map((data: any, index) => {
    data.title = data.title.value;
    if (
      data.type !== "checkbox" &&
      data.type !== "radio" &&
      data.type !== "select"
    ) {
      data.option = data.option.value;
    }
    items[index] = data;
  });

  const common = {
    type: oldData.customize.type,
    id: 0
  };
  const base = {
    item: items,
    desc: oldData.customize.btn_content.value,
    font_color: oldData.customize.btn_color,
    bg_color: oldData.customize.btn_bg_color,
    date: "3000-12-13"
  };
  const position = {
    width: oldData.advance.width,
    height: oldData.advance.height,
    left: oldData.advance.left,
    top: oldData.advance.top,
    rotate: oldData.advance.rotate,
    zIndex: oldData.advance.zIndex
  };
  return { common, base, position };
};

export default formAdapter;
