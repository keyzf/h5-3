import * as React from "react";
import { Form, Checkbox, Row, Col } from "antd";

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

class FormOptCheckBox extends React.PureComponent<Props, any> {
  state = {
    value: []
  };

  change = (checkedValues) => {
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
    const { option, title, title_color, option_color } = this.props.data;

    return (
      <FormItem label={<div style={{ color: `${title_color}` }}>{title}</div>}>
        <Checkbox.Group
          style={{ width: "100%" }}
          onChange={this.change}
        >
          <Row>
            {option.map((data, index) => {
              return (
                <Col span={12} key={index}>
                  <Checkbox value={data} style={{ color: `${option_color}` }}>
                    {data}
                  </Checkbox>
                </Col>
              );
            })}
          </Row>
        </Checkbox.Group>
      </FormItem>
    );
  }
}

export default FormOptCheckBox;
