import * as React from "react";
import {Form, Input} from "antd";

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

const pattern = /^((1[3-9][0-9])+\d{8})$/;
let islegal = false;

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
        const {option, title, title_color, option_color} = this.props.data;
        if (this.props.name) {
            islegal = false;
        } else {
            islegal = !pattern.test(this.state.value) && this.state.value !== "";
        }

        return (
            <FormItem
                label={<div style={{color: `${title_color}`}}>{title}</div>}
                validateStatus={islegal ? "error" : "success"}
                help={islegal ? "号码格式不正确" : ""}
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
