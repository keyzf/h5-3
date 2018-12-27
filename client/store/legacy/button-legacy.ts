interface oldData {
  customize: {
    type: string;
    name: string;
    btn_url: { value: string };
    shadow: { value: any };
    bg_color: any;
    radius: { value: any };
    content: { value: any };
    font_color: any;
  };
  advance: {
    style_color?: string;
    color?: string;
    img?: string;
    crop_img?: string;
    img_config?: {
      stretching?: { value?: string };
      tiling?: { value?: string };
    };
    width?: number;
    height?: number;
    move?: boolean;
    left?: number;
    top?: number;
    rotate?: number;
    zIndex?: number;
    live?: boolean;
  };
}

const buttonAdapter = (oldData: oldData): object => {
  const common = {
    type: oldData.customize.type,
    id: idAdapter(oldData.customize.name)
  };
  const base = {
    font_color: oldData.customize.font_color,
    bg_color: oldData.customize.bg_color,
    bg_img: { url: oldData.advance.img, crop: oldData.advance.img },
    radius: 0,
    desc: oldData.customize.content.value,
    link: { type: "web", url: oldData.customize.btn_url.value }
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

const idAdapter = (var_name: string): number => {
  switch (var_name) {
    //模板
    case "button":
      return 0;
    case "btn_re_6":
      return 0;
    case "btn_re_7":
      return 0;
    case "btn_re_1":
      return 1;
    case "btn_re_2":
      return 2;
    case "btn_re_3":
      return 3;
    case "btn_re_4":
      return 4;
    case "btn_re_5":
      return 5;
  }
};

export default buttonAdapter;
