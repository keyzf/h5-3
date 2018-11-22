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

class FormOptTextArea extends React.PureComponent<Props, ""> {
  render() {
    const FormItem = Form.Item;
    const { option, title, title_color, option_color } = this.props.data;
    return (
      <FormItem label={<div style={{ color: `${title_color}` }}>{title}</div>}>
        <Input.TextArea
          value={option}
          rows={4}
          style={{ color: `${option_color}`, borderColor: title_color }}
          onChange={this.props.change.bind(this, this.props.index)}
        />
      </FormItem>
    );
  }
}

export default FormOptTextArea;
