export const select_action = (data, meta, error) => {
  return {
    type: 'SELECT_COMPONENTS',
    payload: data,
    meta: meta,
    error: error,
  };
};

export const choose_action = (data, meta, error) => {
  return {
    type: 'CHOOSE_COMPONENTS',
    payload: data,
    meta: meta,
    error: error,
  };
};

export const bg_action = (data, meta, error) => {
  return {
    type: 'BG_COMPONENTS',
    payload: data,
    meta: meta,
    error: error,
  };
};


export const up_img_action = (data, meta, error) => {
  return {
    type: 'UP_IMG_COMPONENTS',
    payload: data,
    meta: meta,
    error: error,
  };
};