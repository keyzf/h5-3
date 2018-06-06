

export const $$button_database = name => {
  return {
    customize: {
      name: name,
      width: { value: '' },
      height: { value: '' },
      btn_url: { value: '' },
      shadow: { value: undefined },
      radius: { value: '' },
      content: { value: '' },
    },
    advance: {
      color: '',
      img: '',
      img_config: {
        stretching: { value: '' },
        tiling: { value: '' },
      },
      padding: {
        top: { value: 0 },
        bottom: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
      },
      position: {
        depth: { value: 0 },
        top: { value: 0 },
        left: { value: 0 },
        right: { value: 0 },
        bottom: { value: 0 },
      },
    },
  };
};
