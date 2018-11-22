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

class FormOptSelect extends React.PureComponent<Props, ""> {
  render() {
    const FormItem = Form.Item;
    const Option = Select.Option;
    const { option, title, title_color, option_color } = this.props.data;

    return (
      <FormItem label={<div style={{ color: `${title_color}` }}>{title}</div>}>
        <Select
          defaultValue={option[0]}
          style={{ width: "100%" }}
          onChange={this.props.change.bind(this, this.props.index)}
        >
          {option.map((data, index) => {
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
