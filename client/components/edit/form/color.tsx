import * as React from "react";
import { Popover } from "antd";
import { ChromePicker } from "react-color";


const FormEditColor = React.memo((props: { fun: any, color: any, children: any, type: any }) => {


  return (
    <Popover
      placement="bottomLeft"
      content={
        <ChromePicker
          triangle={"hide"}
          color={props.color}
          onChangeComplete={(e) => props.fun(props.type, e)}
        />
      }
      trigger="click"
    >
      {props.children}
    </Popover>
  );
});

export default FormEditColor;
