//  获取图片长度与宽度
export const img_size = (src) => {
  let img = new Image();
  img.src = src;
  return {
    width: img.width,
    height: img.height
  };
};