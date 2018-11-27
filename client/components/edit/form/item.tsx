import * as React from "react";
import { TwitterPicker } from "react-color";
import { Button, Form, Icon, Input, Popover, Radio } from "antd";

const FormEditItem = React.memo((props: { data: any; fun: any }) => {
  const changeOptionList = (index:any, e:any) => {
    const { option } = props.data;
    let new_option:any = [];
    option.map((data:any, index:any) => {
      new_option[index] = data;
    });
    new_option[index] = e.target.value;

    props.fun({ option: new_option });
  };

  const delItem = (index:any) => {
    const { option } = props.data;
    let new_option:any = [];
    option.map((data:any, index:any) => {
      new_option[index] = data;
    });
    new_option.splice(index, 1);
    props.fun({ option: new_option });
  };
  const addItem = () => {
    const { option } = props.data;
    let new_option:any = [];
    option.map((data:any, index:any) => {
      new_option[index] = data;
    });
    new_option.push("添加项");
    props.fun({ option: new_option });
  };

  const { option, option_color, title, title_color, type, isNeed } = props.data;
  return (
    <div style={{ padding: "0 8px" }}>
      <Form>
        <FormItem label="标题" {...formItemLayout}>
          <Input
            placeholder="标题文本"
            value={title}
            onChange={e => props.fun({ title: e.target.value })}
          />
        </FormItem>
        <FormItem label="必填" {...formItemLayout}>
          <RadioGroup
            onChange={e => props.fun({ isNeed: e.target.value })}
            value={isNeed}
          >
            <Radio value={true}>是</Radio>
            <Radio value={false}>否</Radio>
          </RadioGroup>
        </FormItem>
        <FormItem label="标题颜色" {...formItemLayout}>
          <Popover
            placement="bottomLeft"
            content={
              <TwitterPicker
                triangle={"hide"}
                color={title_color}
                onChangeComplete={e => props.fun({ title_color: e.hex })}
              />
            }
            trigger="click"
          >
            <div
              style={{
                height: "30px",
                width: "100%",
                border: "1px solid black",
                background: title_color
              }}
            />
          </Popover>
        </FormItem>
        <FormItem label="选项字色" {...formItemLayout}>
          <Popover
            placement="bottomLeft"
            content={
              <TwitterPicker
                triangle={"hide"}
                color={option_color}
                onChangeComplete={e => props.fun({ option_color: e.hex })}
              />
            }
            trigger="click"
          >
            <div
              style={{
                height: "30px",
                width: "100%",
                border: "1px solid black",
                background: option_color
              }}
            />
          </Popover>
        </FormItem>
        {type === "select" || type === "radio" || type === "checkbox" ? (
          <React.Fragment>
            {option.map((data:any, index:any) => {
              return (
                <FormItem label="选项" {...formItemLayout} key={index}>
                  <Input
                    value={data}
                    onChange={e => changeOptionList(index, e)}
                    addonAfter={
                      <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => delItem(index)}
                      />
                    }
                  />
                </FormItem>
              );
            })}

            <Button style={{ width: "100%" }} onClick={addItem}>
              添加选项
            </Button>
          </React.Fragment>
        ) : (
          <FormItem label="选项" {...formItemLayout}>
            <Input
              value={option}
              onChange={e => props.fun({ option: e.target.value })}
            />
          </FormItem>
        )}
      </Form>
    </div>
  );
});

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
  wrapperCol: {
    xl: { span: 17, offset: 1 },
    lg: { span: 18, offset: 1 }
  }
};

export default FormEditItem;
