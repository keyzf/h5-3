import * as React from "react";
import {  Form, Radio } from "antd";

interface Props {
  change: any;
  index: number;
  data: {
    option: [];
    title: string;
    title_color: string;
    font_color: string;
    option_color: string;
  };
}

class FormOptRadio extends React.PureComponent<Props, ""> {
  render() {
    const FormItem = Form.Item;
    const RadioGroup = Radio.Group;
    const { option, title, title_color, option_color } = this.props.data;

    return (
      <FormItem label={<div style={{ color: `${title_color}` }}>{title}</div>} >
        <RadioGroup
          value={option}
          onChange={this.props.change.bind(this, this.props.index)}
        >
          {option.map((data, index) => {
            return (
              <Radio

                value={data}
                key={index}
                style={{ color: `${option_color}`, borderColor: title_color }}
              >
                {data}
              </Radio>
            );
          })}
        </RadioGroup>
      </FormItem>
    );
  }
}

export default FormOptRadio;
