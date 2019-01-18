import * as React from "react";
import { Input, Form } from "antd";
import { useDispatch } from "redux-react-hook";
import FormEditColor from "./color";
import Store from "../../../typing/store";
import { useMappedState } from "redux-react-hook";
import { useCallback } from "react";
import FormEditDate from "./cutoff";

const SubmitForm = React.memo(() => {
  const dispatch = useDispatch();
  const { ui, editList } = useMappedState(
    useCallback(
      (state: Store) => ({
        ui: state.ui,
        editList: state.edit.number
      }),
      []
    )
  );

  const baseData = ui[editList[0]].base;
  const change = (e: any) => {
    dispatch({ type: "FORM_BASE", payload: { desc: e.target.value } });
  };
  const changeDate = (e: any) => {
    dispatch({ type: "FORM_BASE", payload: { date: e } });
  };
  const changeColor = (type: any, color: any) => {
    type === "bg"
      ? dispatch({ type: "FORM_BASE", payload: { bg_color: color.hex } })
      : dispatch({ type: "FORM_BASE", payload: { font_color: color.hex } });
  };

  const FormItem = Form.Item;
  const formItemLayout = {
    labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
    wrapperCol: {
      xl: { span: 17, offset: 1 },
      lg: { span: 18, offset: 1 }
    }
  };

  return (
    <div style={{ padding: "0 8px" }}>
      <Form>
        <FormItem label="按钮内容" {...formItemLayout}>
          <Input
            placeholder="按钮文本"
            value={baseData.desc}
            onChange={change}
          />
        </FormItem>
        <FormItem label="字体颜色" {...formItemLayout}>
          <FormEditColor
            fun={changeColor}
            type={"font"}
            color={baseData.font_color}
          >
            <div
              style={{
                height: "30px",
                width: "100%",
                background: `${baseData.font_color}`,
                border: "1px solid black"
              }}
            />
          </FormEditColor>
        </FormItem>
        <FormItem label="背景颜色" {...formItemLayout}>
          <FormEditColor
            fun={changeColor}
            type={"bg"}
            color={baseData.bg_color}
          >
            <div
              style={{
                height: "30px",
                width: "100%",
                background: `${baseData.bg_color}`,
                border: "1px solid black"
              }}
            />
          </FormEditColor>
        </FormItem>
        <FormItem label="截止日期" {...formItemLayout}>
          <FormEditDate fun={changeDate} date={baseData.date} />
        </FormItem>
      </Form>
    </div>
  );
});

export default SubmitForm;
