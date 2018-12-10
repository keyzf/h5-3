import * as React from "react";
import { Form, Popover } from "antd";
import { TwitterPicker } from "react-color";
import Store from "../../../typing/store";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useCallback } from "react";


const TextColor = React.memo(() => {
  const dispatch = useDispatch();
  const { editList, ui } = useMappedState(
    useCallback(
      (state: Store) => ({
        editList: state.edit.number,
        ui: state.ui[state.page.now],
      }),
      []
    )
  );

  const changeColor = (color:any) => {
    dispatch({ type: "TEXT_VALUE", payload: { color: color.hex } });
  };

  const FormItem = Form.Item;
  const formItemLayout = {
    labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
    wrapperCol: {
      xl: { span: 17, offset: 1 },
      lg: { span: 18, offset: 1 }
    }
  };
  const color = ui[editList[0]].base.color;

  return (
    <FormItem label={"边框配色"} {...formItemLayout}>
      <Popover
        placement="bottomLeft"
        content={
          <TwitterPicker
            triangle={"hide"}
            color={color}
            onChangeComplete={changeColor}
          />
        }
        trigger="click"
      >
        <div
          style={{
            height: "30px",
            width: "100%",
            border: "1px solid black",
            background: color
          }}
        />
      </Popover>
    </FormItem>
  );
});


export default TextColor;
