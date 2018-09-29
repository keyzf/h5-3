export const RxUi = (state = { ui: [] }, action) => {
  switch (action.type) {
    case 'RxUi_Add':
      let add = state.ui;
      console.log('add', add);
      add.push(action.payload);
      return { ui: add };

    case 'RxUi_Copy':
      // let copy = state.ui;
      console.log('ui', action.payload);

      action.payload.push(action.payload[0]);
      // copy.push({ ...action.payload });
      return { ui: action.payload };
    case 'RxUi_Delete':
      let deleteUi = state.ui;
      deleteUi.splice(action.payload, 1);
      return { ui: deleteUi };
    case 'RxUi_Rotate':
      let rotate = state.ui;
      rotate[action.payload.index].position.rotate = action.payload.data;
      return { ui: rotate };
    case 'RxUi_Drag':
      let drag = state.ui;
      drag[action.payload.index].position.top =
        drag[action.payload.index].position.top + action.payload.data.top;
      // drag[action.payload.index].position.left =
      //   drag[action.payload.index].position.left + action.payload.data.left;
      return { ui: state.ui };

    case 'RxUi_Resize':
      let resize = state.ui;
      resize[action.payload.index].position.top = action.payload.data.top;
      resize[action.payload.index].position.left = action.payload.data.left;
      resize[action.payload.index].position.width = action.payload.data.width;
      resize[action.payload.index].position.height = action.payload.data.height;
      return { ui: resize };
    case 'RxUi_Left':
      let left = state.ui;
      --left[action.payload].position.left;
      return { ui: left };
    case 'RxUi_Up':
      let up = state.ui;
      --up[action.payload].position.top;
      return { ui: up };
    case 'RxUi_Right':
      let right = state.ui;
      ++right[action.payload].position.left;
      return { ui: right };
    case 'RxUi_Down':
      let down = state.ui;
      ++down[action.payload].position.top;
      return { ui: down };
    default:
      return state;
  }
};
