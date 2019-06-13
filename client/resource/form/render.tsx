import * as React from "react";
import { Form, Button, message } from "antd";
import { useCallback, useState } from "react";
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
import { useMappedState } from "redux-react-hook";
import form_api from "../../api/formUp_api";
import FormStyle from "../../components/common/FormStyle";

let value: any = [];

const RenderForm = React.memo((props: any) => {
  const { ui, sid } = useMappedState(
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
    let update = []; // 数据 及 值，用以传递给后台

    let isleg = true; // 判断数据是否合法
    let isNeed = []; // 判断数据必填项是否已填写
    let isNeedTitle = "必填项";

    // 1. 遍历表单项
    ui.map(data => {
      if (data.common.type === "form") {
        data.base.item.map((datas, index) => {
          // 判断必填项是否已填写
          if (datas.isNeed) {
            // 1. 查询必填数据是否有数据录入
            if (value[index]) {
              // 2. 必填字段是否已填充
              if (Boolean(value[index].data)) {
              } else {
                isNeedTitle = datas.title;
                isNeed.push(false);
              }
            } else {
              isNeedTitle = datas.title;
              isNeed.push(false);
            }
          }
          isleg = value[index] ? value[index] : { isLegal: true };
          // 获取值
          update.push({
            form_id: datas.form_id,
            value: value[index] ? value[index].data : ""
          });
        });
      }
    });

    // 验证必填项是否已填写
    if (isNeed.indexOf(false) !== -1) {
      message.error(`${isNeedTitle}未填写`);
    } else {
      // 验证输入项是否合法
      value.map(data => {
        if (!data.isLegal) {
          isleg = false;
        }
      });
      // @ts-ignore
      if (isleg !== "") {
        if (!isleg) {
          message.error("表单输入内容不合法");
        }
      }

      if (isleg && isNeed) {
        form_api(update, sid)
          .then(() => {
            value = []; // 重置
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

  const { item, desc, font_color, bg_color } = props.data.base;
  let dates = "";
  ui.map(data => {
    if (data.common.type === "form") {
      dates = data.base.date;
    }
  });
  const today = new Date().getTime();
  const is = new Date(dates).getTime();
  return (
    <Form layout={"vertical"} hideRequiredMark={true}>
      {item.map((data: any, index: any) => {
        const option: any = {
          input: () => (
            <FormOptInput
              name={"name"}
              change={change}
              data={data}
              key={index}
              index={index}
            />
          ),
          name: () => (
            <FormOptInput
              name={"name"}
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
              name={"email"}
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
            <FormOptTextArea
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
            <FormOptDatePicker change={change} data={data} index={index} />
          ),
          radio: () => (
            <FormOptRadio change={change} data={data} index={index} />
          ),
          select: () => (
            <FormOptSelect change={change} data={data} index={index} />
          )
        };
        const FormUiRender: any = option[data.type];
        return (
          <FormStyle {...props.formStyle} lenght={item.length}>
            <FormUiRender key={index} />
          </FormStyle>
        );
      })}

      <Form.Item>
        {is > today ? (
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
        ) : (
          <Button
            disabled={true}
            type="primary"
            htmlType="submit"
            style={{
              width: "100%",
              border: "none"
            }}
          >
            已截止提交
          </Button>
        )}

        <FormSubmitMode mode={state} onclose={onclose} />
      </Form.Item>
    </Form>
  );
});

export default RenderForm;

