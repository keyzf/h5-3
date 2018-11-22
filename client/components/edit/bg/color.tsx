import * as React from "react";
import { useCallback } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import { Icon, Popover } from "antd";
import { TwitterPicker } from "react-color";
import Store from "../../../typing/store";

const BgEditColor = React.memo(() => {
  const dispatch = useDispatch();
  const { color } = useMappedState(useCallback(state, []));
  const changeColor = useCallback(color => {
    dispatch({ type: "BG_VALUE", payload: { color: color.hex, img: "" } });
  }, []);


  return (
    <Popover
      placement="bottomLeft"
      content={
        <TwitterPicker
          triangle={"hide"}
          color={color}
          onChangeComplete={e => changeColor(e)}
        />
      }
      trigger="click"
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "1px solid black",
          background: color,
          borderRadius: "3px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center"
        }}
      >
        <Icon type="bg-colors" theme="outlined" style={{ fontSize: "18px" }}/>
      </div>
    </Popover>
  );
});

const state = (state: Store) => ({
  color: state.bg.base.color
});

export default BgEditColor;
