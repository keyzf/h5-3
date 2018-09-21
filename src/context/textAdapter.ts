interface oldData {
  customize: {
    type?: string,
    index_number?: string,// 编辑器赓续index_Number来更新内容
    name?: string,
    html_content?: string,
  },
  advance: {
    style_color?: string,
    color?: string,
    img?: string,
    crop_img?: string,
    img_config?: {
      stretching?: { value?: string, },
      tiling?: { value?: string, },
    },
    width?: number,
    height?: number,
    move?: boolean,
    left?: number,
    top?: number,
    rotate?: number,
    zIndex?: number,
    live?: boolean,
  },
}

const textAdapter = (oldData: oldData): object => {
  const common = {
    type: oldData.customize.type,
    name: oldData.customize.name
  };
  const base = {
    html: oldData.customize.html_content,
    index: oldData.customize.index_number,
    color:oldData.advance.style_color,
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

export default textAdapter;