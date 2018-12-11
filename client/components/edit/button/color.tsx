import * as React from "react";
import { Form,  Popover } from "antd";
import { TwitterPicker } from "react-color";
import Store from "../../../typing/store";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useCallback } from "react";

const ButtonColor = React.memo((props: any) => {
  const { editList, ui } = useMappedState(
    useCallback(
      (state: Store) => ({
        editList: state.edit.number,
        ui: state.ui,
      }),
      []
    )
  );

  const changeColor = (color:any) => {
    props.fun(color);
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
    <React.Fragment>
      {
        props.name === "bg" ?
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

            {props.children}
          </Popover>
          :
          <FormItem label={props.name} {...formItemLayout}>

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
              {props.children}
            </Popover>
          </FormItem>
      }

    </React.Fragment>
  );
});

export default ButtonColor;
