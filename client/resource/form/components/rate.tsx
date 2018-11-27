import * as React from "react";
import { Form, Rate } from "antd";

interface Props {
  change: any;
  index: number;
  data: {
    option: number;
    title: string;
    title_color: string;
    font_color: string;
    option_color: string;
  };
}

class FormOptRate extends React.PureComponent<Props, any> {
  state = {
    value: 5
  };

  change = (e:any) => {
    this.setState({
      value: e
    });

    this.props.change(this.props.index, {
      isLegal: true,
      legalMsg: "",
      data: e
    });
  };

  render() {
    const FormItem = Form.Item;
    const { title, title_color, option_color } = this.props.data;

    return (
      <FormItem label={title} style={{ color: `${title_color}` }}>
        <Rate
          style={{ color: `${option_color}`, borderColor: title_color }}
          value={this.state.value}
          onChange={this.change}
        />
      </FormItem>
    );
  }
}

export default FormOptRate;
