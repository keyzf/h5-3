import * as React from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useCallback } from "react";
import RenderUi from "../common/renderUi";
import Store from "../../typing/store";
import RenderStyle from "../common/renderStyle";


const ContentChoose = React.memo(() => {
  const dispatch = useDispatch();
  const state = (state: Store) => ({
    editList: state.edit.number,
    lockList: state.edit.lock,
    ui: state.ui
  });
  const { editList, ui, lockList } = useMappedState(useCallback(state, []));
  const uiChoose = useCallback((data: number[]) =>
    dispatch({ type: "UI_CHOOSE", payload: data }), []);

  const choice = (number: number, event:any) => {
    if (event.shiftKey) {
      const editorList = [...editList];
      editorList.push(number);
      uiChoose(editorList);
    } else {
      uiChoose([number]);
    }
    dispatch({ type: "EDIT_VALUE", payload: { type: ui[number].common.type } });
  };

  return (
    <React.Fragment>
      {
        ui.map((data: any, index: number) => {
          return (
            editList.includes(index) || lockList.includes(index) ? "" :
              <RenderStyle {...data.position} key={index} onMouseDown={(e) => choice(index, e)}>
                <div style={{ pointerEvents: "none", userSelect: "none" }}>
                  <RenderUi data={data}/>
                </div>
              </RenderStyle>
          );
        })
      }
    </React.Fragment>
  );
});


export default ContentChoose;
