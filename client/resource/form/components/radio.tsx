import * as React from "react";
import { Form, Radio } from "antd";

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

class FormOptRadio extends React.PureComponent<Props, any> {
  state = {
    value: []
  };

  change = (checkedValues) => {
    this.setState({
      value: checkedValues.target.value
    });

    this.props.change(this.props.index, {
      isLegal: true,
      legalMsg: "",
      data: checkedValues.target.value
    });
  };

  render() {
    const FormItem = Form.Item;
    const RadioGroup = Radio.Group;
    const { option, title, title_color, option_color } = this.props.data;

    return (
      <FormItem label={<div style={{ color: `${title_color}` }}>{title}</div>}>
        <RadioGroup
          value={this.state.value}
          onChange={this.change}
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
