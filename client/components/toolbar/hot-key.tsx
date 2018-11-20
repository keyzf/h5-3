import * as React from "react";
import { Icon, Tooltip } from "antd";
import { useDispatch } from "redux-react-hook";
import { useCallback } from "react";


const ToolBarKey = React.memo(() => {
  const dispatch = useDispatch();
  const changeShare = useCallback(() =>
    dispatch({ type: "EDIT_VALUE", payload: { type: "hot-key" } }), []);

  /**
   * 组件样式
   */
  const style: { center } = {
    center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      padding: "10px 0",
      fontSize: "19px"
    }
  };
  return (
    <Tooltip title="快捷键" placement="left">
      <Icon style={style.center} type="laptop" theme="outlined" onClick={changeShare}/>
    </Tooltip>
  );
});


export default ToolBarKey;