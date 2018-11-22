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

class FormOptRate extends React.PureComponent<Props, ""> {
    render() {
        const FormItem = Form.Item;
        const {option, title, title_color, option_color} = this.props.data;

        return (
            <FormItem label={title} style={{color: `${title_color}`}}>
                <Rate
                  style={{ color: `${option_color}`, borderColor: title_color }}
                    value={option}
                    onChange={this.props.change.bind(this, this.props.index)}
                />
            </FormItem>
        );
    }
}

export default FormOptRate;
