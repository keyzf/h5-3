export const $$img_add_item = {
  img: "",
  title: { value: "标题" },
  content: { value: "内容" },
  link: { value: "" },
  width: { value: "" },
  height: { value: "" },
  img_config: {
    stretching: { value: "" },
    tiling: { value: "" }
  }
};

export const $$img_database = (number, name) => {
  let $$img_item;
  if (number === 1) {
    $$img_item = [{
      img: "",
      title: { value: "标题" },
      content: { value: "内容" },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }];
  }
  if (number === 4) {
    $$img_item = [{
      img: "",
      title: { value: "标题" },
      content: { value: "内容" },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }, {
      img: "",
      title: { value: "标题" },
      content: { value: "内容" },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }, {
      img: "",
      title: { value: "标题" },
      content: { value: "内容" },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }, {
      img: "",
      title: { value: "标题" },
      content: { value: "内容" },
      link: { value: "" },
      width: { value: "" },
      height: { value: "" },
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      }
    }];
  }

  return {
    customize: {
      name: name,
      item: $$img_item,
      base: {
        show_element: { value: undefined },
        layout: { value: 0 }
      }
    },
    advance: {
      position: {
        depth: { value: 0 },
        top: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
        bottom: { value: 0 }
      },
      color: "",
      img: "",
      img_config: {
        stretching: { value: "" },
        tiling: { value: "" }
      },
      padding: {
        top: { value: 0 },
        bottom: { value: 0 },
        left: { value: 0 },
        right: { value: 0 }
      }
    }
  };
};
