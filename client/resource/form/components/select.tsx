import * as React from "react";
import { Form, Select } from "antd";

interface Props {
  change: any;
  index: number;
  data: {
    option: any;
    title: string;
    title_color: string;
    font_color: string;
    option_color: string;
  };
}

class FormOptSelect extends React.PureComponent<Props, any> {
  state = {
    value: []
  };

  change = (checkedValues:any) => {
    this.setState({
      value: checkedValues
    });

    this.props.change(this.props.index, {
      isLegal: true,
      legalMsg: "",
      data: checkedValues
    });
  };

  render() {
    const FormItem = Form.Item;
    const Option = Select.Option;
    const { option, title, title_color, option_color } = this.props.data;

    return (
      <FormItem label={<div style={{ color: `${title_color}` }}>{title}</div>}>
        <Select
          placeholder={'请选择...'}
          style={{ width: "100%" }}
          onChange={this.change}
        >
          {option.map((data:any, index:any) => {
            return (
              <Option
                key={index}
                value={data}
                style={{ color: `${option_color}`, borderColor: title_color }}
              >
                {data}
              </Option>
            );
          })}
        </Select>
      </FormItem>
    );
  }
}

export default FormOptSelect;
