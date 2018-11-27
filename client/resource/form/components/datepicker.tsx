import * as React from "react";
import { Form, DatePicker } from "antd";
import moment from "moment";
import "moment/locale/zh-cn";

moment.locale("zh-cn");
import locale from "antd/lib/date-picker/locale/zh_CN";

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

class FormOptDatePicker extends React.PureComponent<Props, any> {
  state = {
    value: moment("2019-01-01", "YYYY-MM-DD")
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
    const { option, title, title_color, option_color } = this.props.data;

    return (
      <FormItem label={<div style={{ color: `${title_color}` }}>{title}</div>}>
        <DatePicker
          locale={locale}
          style={{ color: `${option_color}`, borderColor: title_color }}
          value={this.state.value}
          onChange={this.change}
        />
      </FormItem>
    );
  }
}

export default FormOptDatePicker;
