interface oldData {
  customize: {
    type: string;
    name: string;
    video: string;
    share: string;
    history: any;
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

const videoAdapter = (oldData: oldData): object => {
  const common = {
    type: oldData.customize.type,
    id: 0
  };
  const base = {
    url: oldData.customize.share
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

export default videoAdapter;
