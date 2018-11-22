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
  isLegal: {
    index: number | string,
    msg: string
  }
}


class FormOptInput extends React.PureComponent<Props, any> {

  state = {
    value: ""
  };

  change = (e) => {
    console.log(e);
    this.setState({
      value: e.target.value
    });
    // this.props.change(this, this.props.index, e);
  };

  render() {
    const FormItem = Form.Item;
    const { option, title, title_color, option_color } = this.props.data;
    const pattern = /^((1[3-9][0-9])+\d{8})$/;
    return (
      <FormItem label={<div style={{ color: `${title_color}` }}>{title}</div>}
                validateStatus={!pattern.test(this.state.value) && this.state.value !== "" ? "error" : "success"}
                help={!pattern.test(this.state.value) && this.state.value !== "" ? "号码格式不正确" : ""}
      >
        <Input
          style={{ color: `${option_color}`, border: `1px solid ${title_color}` }}
          value={this.state.value}
          placeholder={option}
          onChange={this.change}
        />
      </FormItem>
    );
  }
}

export default FormOptInput;
