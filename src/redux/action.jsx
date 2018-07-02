import { fromJS } from 'immutable';

const redux_action = (name, data) => {
  return {
    type: name,
    payload: fromJS(data),
  };
};

const choose_redux_action = (name, data, meta) => {
  return {
    type: name,
    payload: fromJS(data),
    meta: fromJS(meta),
  };
};

export { redux_action, choose_redux_action };

//====================================================================================================
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

export const html5_action = (data, meta, error) => {
  return {
    type: 'Html5_message',
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

export const id_action = (data, meta, error) => {
  return {
    type: 'ID',
    payload: data,
    meta: meta,
    error: error,
  };
};

export const guide_action = (data, meta, error) => {
  return {
    type: 'GUIDE',
    payload: data,
    meta: meta,
    error: error,
  };
};

export const share_msg_action = (data, meta, error) => {
  return {
    type: 'USER_H5_MESSAGE',
    payload: data,
    meta: meta,
    error: error,
  };
};

/**
 * 展示visual中的ui
 * @param data
 * @param meta
 * @param error
 * @returns {{type: string, payload: *, meta: *, error: *}}
 */
export const visual_ui_show_action = (data, meta, error) => {
  return {
    type: 'VISUAL_UI_SHOW',
    payload: data,
    meta: meta,
    error: error,
  };
};
