import *as React from "react";
import { Form, Button } from "antd";
import FormOptInput from "./components/input";
import FormOptTextArea from "./components/textarea";
import FormOptCheckBox from "./components/checkbox";
import FormOptUpLoad from "./components/upload";
import FormOptDatePicker from "./components/datepicker";
import FormOptRate from "./components/rate";
import FormOptRadio from "./components/radio";
import FormOptSelect from "./components/select";
import { useState } from "react";

const RenderForm = React.memo((props: any) => {
  const [state, setState] = useState({
    valueList: [],
    isLegal: { index: "", msg: "" }
  });


  const onChange= (id, event) => {
    /**
     * @desc 判断值
     */
    // if (this.props.data.base.item[id].type === "phone") {
    //   const pattern = /^((1[3-9][0-9])+\d{8})$/;
    //   if (!pattern.test(event.target.value)) {
    //     this.setState({
    //       isLegal: {
    //         index: id,
    //         msg: "手机格式不正确"
    //       }
    //     });
    //   } else {
    //     this.setState({
    //       isLegal: {
    //         index: "",
    //         msg: ""
    //       }
    //     });
    //   }
    // }
    // if (this.props.data.base.item[id].type === "email") {
    //   const pattern = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
    //   if (!pattern.test(event.target.value)) {
    //     this.setState({
    //       isLegal: {
    //         index: id,
    //         msg: "邮箱格式不正确"
    //       }
    //     });
    //   }
    // }

    // const value = state.valueList;
    // try {
    //   value[id] = event.target.value;
    // } catch (e) {
    //   value[id] = event;
    // }
    // /**
    //  * @desc 记录修改值
    //  */
    // this.setState({
    //   valueList: value
    // });
  };

  const { item, desc, font_color, bg_color } = props.data.base;
  return (
    <Form layout={"vertical"} hideRequiredMark={true}>
      {item.map((data, index) => {
        const option = {
          input: () => (
            <FormOptInput
              isLegal={state.isLegal}
              change={(e)=>onChange(index,e)}
              data={data}
              key={index}
              index={index}
            />
          ),
          name: () => (
            <FormOptInput
              isLegal={state.isLegal}
              change={(e)=>onChange(index,e)}
              data={data}
              key={index}
              index={index}
            />
          ),
          phone: () => (
            <FormOptInput
              isLegal={state.isLegal}
              change={(e)=>onChange(index,e)}
              data={data}
              key={index}
              index={index}
            />
          ),
          email: () => (
            <FormOptInput
              isLegal={state.isLegal}
              change={(e)=>onChange(index,e)}
              data={data}
              key={index}
              index={index}
            />
          ),
          mobile: () => (
            <FormOptInput
              isLegal={state.isLegal}
              change={(e)=>onChange(index,e)}
              data={data}
              key={index}
              index={index}
            />
          ),
          address: () => (
            <FormOptInput
              isLegal={state.isLegal}
              change={(e)=>onChange(index,e)}
              data={data}
              key={index}
              index={index}
            />
          ),
          textarea: () => (
            <FormOptTextArea
              change={(e)=>onChange(index,e)}
              data={data}
              key={index}
              index={index}
            />
          ),
          checkbox: () => (
            <FormOptCheckBox
              change={(e)=>onChange(index,e)}
              data={data}
              key={index}
              index={index}
            />
          ),
          upload: () => (
            <FormOptUpLoad
              change={(e)=>onChange(index,e)}
              data={data}
              key={index}
              index={index}
            />
          ),
          rate: () => (
            <FormOptRate
              change={(e)=>onChange(index,e)}
              data={data}
              key={index}
              index={index}
            />
          ),
          datePicker: () => (
            <FormOptDatePicker
              change={(e)=>onChange(index,e)}
              data={data}
              index={index}
            />
          ),
          radio: () => (
            <FormOptRadio change={(e)=>onChange(index,e)} data={data} index={index}/>
          ),
          select: () => (
            <FormOptSelect change={(e)=>onChange(index,e)} data={data} index={index}/>
          )
        };
        const FormUiRender = option[data.type];
        return <FormUiRender key={index}/>;
      })}
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          style={{
            width: "100%",
            border: "none",
            color: font_color,
            background: bg_color
          }}
        >
          {desc}
        </Button>
      </Form.Item>
    </Form>
  );
});

export default RenderForm;
