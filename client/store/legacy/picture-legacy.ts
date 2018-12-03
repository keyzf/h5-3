interface oldData {
  customize: {
    type?: any;
    name?: any;
    item?: any;
    model?: any;
    base?: {
      show_element?: { value?: any }; // 元素显示
      layout?: { value?: any }; // 布局
      font_color?: any; //字体颜色
    };
  };
  advance: {
    color?: any;
    img?: any;
    crop_img?: any;
    img_config?: {
      stretching?: { value?: any };
      tiling?: { value?: any };
    };
    width?: any;
    move?: any;
    height?: any;
    left?: any;
    top?: any;
    rotate?: any;
    zIndex?: any;
    content_color?: any;
  };
}

// 修正id
const idAdapter = (var_name: string): number => {
  switch (var_name) {
    //模板
    case "single_img":
      return 0;
    case "img_re_1":
      return 0;
    case "carousel_img":
      return 1;
  }
};
// 修正base
const baseAdapter = (item: any): object[] => {
  let base = [];
  item.map(data => {
    base.push({
      img: data.img,
      crop: data.crop_img,
      link: { type: "", url: data.link.value },
      openness: 0,
      radius: data.radius.value,
      color: ""
    });
  });
  return base;
};
// 修正图片数据
const pictureAdapter = (oldData: oldData): object => {
  const common = {
    type: 'picture',
    id: idAdapter(oldData.customize.name)
  };
  const base = baseAdapter(oldData.customize.item);
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

export default pictureAdapter;