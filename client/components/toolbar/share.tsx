import * as React from "react";
import { Icon, Tooltip } from "antd";
import { useDispatch } from "redux-react-hook";
import {useMappedState} from "redux-react-hook";



const ToolBarShare = React.memo(() => {
  const dispatch = useDispatch();

  const changeShare = () =>
    dispatch({ type: "EDIT_VALUE", payload: { type:'share'} });

  /**
   * 组件样式
   */
  const style: { center:any } = {
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

    <Tooltip title="分享设置" placement="left">
      <Icon style={style.center} type="share-alt" theme="outlined" onClick={changeShare}/>
    </Tooltip>
  );
});


export default ToolBarShare;
