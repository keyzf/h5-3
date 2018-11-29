import * as React from "react";
import {Form, Button, message} from "antd";
import {useCallback, useState} from "react";
import FormOptInput from "./components/input";
import FormOptTextArea from "./components/textarea";
import FormOptCheckBox from "./components/checkbox";
import FormOptUpLoad from "./components/upload";
import FormOptDatePicker from "./components/datepicker";
import FormOptRate from "./components/rate";
import FormOptRadio from "./components/radio";
import FormOptSelect from "./components/select";
import FormSubmitMode from "./model";
import Store from "../../typing/store";
import {useMappedState} from "redux-react-hook";
import form_api from "../../api/formUp_api";

const value: any = [];
const RenderForm = React.memo((props: any) => {
    const {ui, sid} = useMappedState(
        useCallback(
            (state: Store) => ({
                ui: state.ui,
                sid: state.global.sid
            }),
            []
        )
    );
    const [state, setState] = useState(false);

    const change = (id: any, data: any) => {
        value[id] = data;
    };

    const submit = () => {
        const update = [];
        let isleg = true;
        value.map(data => {
            if (!data.isLegal) {
                isleg = false;
            }
        });
        if (!isleg) {
            message.error("表单输入内容不合法");
        } else {
            ui.map(data => {
                if (data.common.type === "form") {
                    data.base.item.map((data, index) => {
                        if (data.isNeed) {
                            isleg =  value[index];
                        }
                        update.push({form_id: data.form_id, value: value[index] ? value[index].data : ''});
                    });
                }
            });



            if (!isleg) {
                message.error("表单必填项未填写");
            } else {
                form_api(update, sid)
                    .then(() => {
                        setState(true);
                    })
                    .catch(() => {
                        message.error("提交错误，请重试");
                    });
            }
        }
    };

    const onclose = () => {
        setState(false);
    };

    const {item, desc, font_color, bg_color} = props.data.base;
    return (
        <Form layout={"vertical"} hideRequiredMark={true}>
            {item.map((data: any, index: any) => {
                const option: any = {
                    input: () => (
                        <FormOptInput
                            change={change}
                            data={data}
                            key={index}
                            index={index}
                        />
                    ),
                    name: () => (
                        <FormOptInput
                            change={change}
                            data={data}
                            key={index}
                            index={index}
                        />
                    ),
                    phone: () => (
                        <FormOptInput
                            change={change}
                            data={data}
                            key={index}
                            index={index}
                        />
                    ),
                    email: () => (
                        <FormOptInput
                            change={change}
                            data={data}
                            key={index}
                            index={index}
                        />
                    ),
                    mobile: () => (
                        <FormOptInput
                            change={change}
                            data={data}
                            key={index}
                            index={index}
                        />
                    ),
                    address: () => (
                        <FormOptInput
                            change={change}
                            data={data}
                            key={index}
                            index={index}
                        />
                    ),
                    textarea: () => (
                        <FormOptTextArea
                            change={change}
                            data={data}
                            key={index}
                            index={index}
                        />
                    ),
                    checkbox: () => (
                        <FormOptCheckBox
                            change={change}
                            data={data}
                            key={index}
                            index={index}
                        />
                    ),
                    upload: () => (
                        <FormOptUpLoad
                            change={change}
                            data={data}
                            key={index}
                            index={index}
                        />
                    ),
                    rate: () => (
                        <FormOptRate
                            change={change}
                            data={data}
                            key={index}
                            index={index}
                        />
                    ),
                    datePicker: () => (
                        <FormOptDatePicker change={change} data={data} index={index}/>
                    ),
                    radio: () => (
                        <FormOptRadio change={change} data={data} index={index}/>
                    ),
                    select: () => (
                        <FormOptSelect change={change} data={data} index={index}/>
                    )
                };
                const FormUiRender: any = option[data.type];
                return <FormUiRender key={index}/>;
            })}
            <Form.Item>
                <Button
                    onClick={submit}
                    type="primary"
                    htmlType="submit"
                    style={{
                        width: "100%",
                        border: "none",
                        color: font_color,
                        background: bg_color
                    }}
                >
                    {desc}
                </Button>
                <FormSubmitMode mode={state} onclose={onclose}/>
            </Form.Item>
        </Form>
    );
});

export default RenderForm;
