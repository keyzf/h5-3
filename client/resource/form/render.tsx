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
import FormSubmitMode from "./model";

const value = [];
const RenderForm = React.memo((props: any) => {
  const [state, setState] = useState(false);

  const change = (id, data) => {
    value[id] = data;
  };

  const submit = () => {
    setState(true);
  };

  const onclose = () => {
    setState(false);
  };

  const { item, desc, font_color, bg_color } = props.data.base;
  return (
    <Form layout={"vertical"} hideRequiredMark={true}>
      {item.map((data, index) => {
        const option = {
          input: () => (
            <FormOptInput
              change={change}
              data={data}
              key={index}
              index={index}
            />
          ),
          name: () => (
            <FormOptInput
              change={change}
              data={data}
              key={index}
              index={index}
            />
          ),
          phone: () => (
            <FormOptInput
              change={change}
              data={data}
              key={index}
              index={index}
            />
          ),
          email: () => (
            <FormOptInput
              change={change}
              data={data}
              key={index}
              index={index}
            />
          ),
          mobile: () => (
            <FormOptInput
              change={change}
              data={data}
              key={index}
              index={index}
            />
          ),
          address: () => (
            <FormOptInput
              change={change}
              data={data}
              key={index}
              index={index}
            />
          ),
          textarea: () => (
            <FormOptTextArea
              change={change}
              data={data}
              key={index}
              index={index}
            />
          ),
          checkbox: () => (
            <FormOptCheckBox
              change={change}
              data={data}
              key={index}
              index={index}
            />
          ),
          upload: () => (
            <FormOptUpLoad
              change={change}
              data={data}
              key={index}
              index={index}
            />
          ),
          rate: () => (
            <FormOptRate
              change={change}
              data={data}
              key={index}
              index={index}
            />
          ),
          datePicker: () => (
            <FormOptDatePicker
              change={change}
              data={data}
              index={index}
            />
          ),
          radio: () => (
            <FormOptRadio change={change} data={data} index={index}/>
          ),
          select: () => (
            <FormOptSelect change={change} data={data} index={index}/>
          )
        };
        const FormUiRender = option[data.type];
        return <FormUiRender key={index}/>;
      })}
      <Form.Item>
        <Button
          onClick={submit}
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
        <FormSubmitMode  mode={state} onclose={onclose}/>
      </Form.Item>

    </Form>
  );
});

export default RenderForm;
