import * as React from "react";
import { Input, Slider, Form } from "antd";
import { useDispatch } from "redux-react-hook";
import Store from "../../../typing/store";
import { useMappedState } from "redux-react-hook";
import { useCallback } from "react";
import ButtonLink from "./link";
import ButtonColor from "./color";


const ButtonForm = React.memo(() => {
  const dispatch = useDispatch();
  const { ui, editList } = useMappedState(
    useCallback(
      (state: Store) => ({
        ui: state.ui[state.page.now],,
        editList: state.edit.number
      }),
      []
    )
  );


  return (
    <div style={{ padding: "0 8px" }}>
      <Form>
        <FormItem label="按钮内容" {...formItemLayout}>
          <Input
            placeholder="按钮文本"
            value={ui[editList[0]].base.desc}
            onChange={(e) => dispatch({ type: "BUTTON_VALUE", payload: { desc: e.target.value } })}
          />
        </FormItem>
        <ButtonColor fun={(color:any) => dispatch({ type: "BUTTON_VALUE", payload: { font_color: color.hex } })}
                     name={"文字配色"}>
          <div style={{ width: "100%", height: "30px", background: ui[editList[0]].base.font_color }}/>
        </ButtonColor>
        <FormItem label="按钮圆角" {...formItemLayout}>
          <Slider value={ui[editList[0]].base.radius}
                  onChange={(e) => dispatch({ type: "BUTTON_VALUE", payload: { radius: e } })}/>
        </FormItem>
        <ButtonLink/>

      </Form>
    </div>
  );
});


const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
  wrapperCol: {
    xl: { span: 17, offset: 1 },
    lg: { span: 18, offset: 1 }
  }
};

export default ButtonForm;
