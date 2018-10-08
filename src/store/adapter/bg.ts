interface oldData {
  type: string,
  name: string,
  customize: {
    color: string,
    img: string,
    crop_img: string,
    height: number,
    img_config?: {
      repeat: undefined,
      fixed: undefined,
    },
  },
}

const bg = (oldData: oldData): object => {
  const common = {
    type: oldData.type,
    name: oldData.name
  };
  const base = {
    img: oldData.customize.img,
    color: oldData.customize.color,
    height: oldData.customize.height
  };

  return { common, base };
};

export default bg;