import * as React from "react";
import { Form, Input } from "antd";

interface Props {
  change: any;
  index: number;
  name?: string;
  data: {
    option: string;
    title: string;
    title_color: string;
    font_color: string;
    option_color: string;
  };
}

const pattern = /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/;

let islegal = false;

let i = 0;

class FormOptInput extends React.PureComponent<Props, any> {
  state = {
    value: ""
  };

  change = (e: any) => {

    this.setState({
      value: e.target.value
    });


    this.props.change(this.props.index, {
      isLegal: this.props.name ? true : islegal,
      legalMsg: "号码格式不正确",
      data: e.target.value
    });
  };

  render() {
    const FormItem = Form.Item;
    const { option, title, title_color, option_color } = this.props.data;

    if (!this.props.name) {
      islegal = !(pattern.test(this.state.value) && this.state.value !== "");
    }

    return (
      <FormItem
        label={<div style={{ color: `${title_color}` }}>{title}</div>}
        validateStatus={islegal ? "" : "success"}
        help={islegal ? "" : ""}
      >
        <Input
          style={{
            color: `${option_color}`,
            border: `1px solid ${title_color}`
          }}
          value={this.state.value}
          placeholder={option}
          onChange={this.change}
        />
      </FormItem>
    );
  }
}

export default FormOptInput;
