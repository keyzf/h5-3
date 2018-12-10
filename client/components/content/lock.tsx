import * as React from "react";
import { Icon, Tooltip } from "antd";
import RenderUi from "../common/renderUi";
import RenderStyle from "../common/renderStyle";
import Store from "../../typing/store";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useCallback } from "react";


const ContentLock = React.memo(() => {
  const dispatch = useDispatch();
  const state = (state: Store) => ({
    ui: state.ui[state.page.now],
    lockList: state.edit.lock
  });
  const { ui, lockList } = useMappedState(useCallback(state, []));
  const uiAction = useCallback((type:any, data:any) =>
    dispatch({ type: "UI_ACTION", payload: { type: type, data: data } }), []);

  const unLock = (index: number) => {
    uiAction("unlock", index);
  };
  const unlockUI = (data:any) => (
    <div onClick={() => unLock(data)} style={{ cursor: "pointer" }}>
      <Icon
        type="unlock"
        theme="outlined"
        style={{ color: "red", marginRight: "5px" }}
      />
      点击取消锁定
    </div>
  );
  return (
    <React.Fragment>
      {lockList.map((data: number, index: number) => {
        return (
          <RenderStyle {...ui[data].position} key={index}>
            <Tooltip title={() => unlockUI(data)} autoAdjustOverflow>
              <span>
                  <span
                    style={{
                      pointerEvents: "none",
                      userSelect: "none"
                    }}
                  >
                    <RenderUi data={ui[data]}/>
                  </span>
              </span>
            </Tooltip>
          </RenderStyle>
        );
      })}
    </React.Fragment>
  );
});

export default ContentLock;
