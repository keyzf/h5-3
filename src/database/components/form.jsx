export const $$form_database = (name) => {
  return {
    customize: {
      name: name,
      item: []
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


export const $$form_item_database = (decorator, title, option) => {
  return {
    title: title,
    decorator: decorator,
    option: option
  };
};
