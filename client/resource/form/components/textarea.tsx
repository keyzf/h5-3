import * as React from "react";
import { Form, Input } from "antd";

interface Props {
  change: any;
  index: number;
  data: {
    option: string;
    title: string;
    title_color: string;
    font_color: string;
    option_color: string;
  };
}

class FormOptTextArea extends React.PureComponent<Props, any> {
  state = {
    value: ""
  };

  change = (e: any) => {
    this.setState({
      value: e.target.value
    });

    this.props.change(this.props.index, {
      isLegal: true,
      legalMsg: "",
      data: e.target.value
    });
  };

  render() {
    const FormItem = Form.Item;
    const { option, title, title_color, option_color } = this.props.data;
    return (
      <FormItem label={<div style={{ color: `${title_color}` }}>{title}</div>}>
        <Input.TextArea
          value={this.state.value}
          rows={4}
          placeholder={option}
          style={{ color: `${option_color}`, borderColor: title_color }}
          onChange={this.change}
        />
      </FormItem>
    );
  }
}

export default FormOptTextArea;
