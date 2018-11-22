import * as React from "react";
import { Icon, Button, Divider, Row, Col, Popover } from "antd";
import random from "../../../tools/random";
import {
  $$form_opt_upload,
  $$from_opt_address,
  $$from_opt_checkbox,
  $$from_opt_datepicker,
  $$from_opt_email,
  $$from_opt_input,
  $$from_opt_mobile,
  $$from_opt_name,
  $$from_opt_phone,
  $$from_opt_radio,
  $$from_opt_rate,
  $$from_opt_select
} from "../../../resource/form/database";
import { useDispatch } from "redux-react-hook";


const FormItemAdd = React.memo(() => {
  const dispatch = useDispatch();
  const addOpt = (name: string) => {
    switch (name) {
      // data source
      case "address":
        dispatch({ type: "FORM_ADD", payload: $$from_opt_address(random()) });
        break;
      case "phone":
        dispatch({ type: "FORM_ADD", payload: $$from_opt_phone(random()) });
        break;
      case "mobile":
        dispatch({ type: "FORM_ADD", payload: $$from_opt_mobile(random()) });
        break;
      case "email":
        dispatch({ type: "FORM_ADD", payload: $$from_opt_email(random()) });
        break;
      case "name":
        dispatch({ type: "FORM_ADD", payload: $$from_opt_name(random()) });
        break;
      // features
      case "input":
        dispatch({ type: "FORM_ADD", payload: $$from_opt_input(random()) });
        break;
      case "rate":
        dispatch({ type: "FORM_ADD", payload: $$from_opt_rate(random()) });
        break;
      case "radio":
        dispatch({ type: "FORM_ADD", payload: $$from_opt_radio(random()) });
        break;
      case "select":
        dispatch({ type: "FORM_ADD", payload: $$from_opt_select(random()) });
        break;
      case "checkbox":
        dispatch({ type: "FORM_ADD", payload: $$from_opt_checkbox(random()) });
        break;
      case "datePicker":
        dispatch({ type: "FORM_ADD", payload: $$from_opt_datepicker(random()) });
        break;
      case "upload":
        dispatch({ type: "FORM_ADD", payload: $$form_opt_upload(random()) });
        break;
    }
  };

  const content = (
    <div>
        <span>
          <Row gutter={16} style={{ width: "250px", cursor: "pointer" }}>
            <Col span={6} onClick={() => addOpt("name")}>
              姓名
            </Col>
            <Col span={6} onClick={() => addOpt("phone")}>
              手机
            </Col>
            <Col span={6} onClick={() => addOpt("address")}>
              地址
            </Col>
            <Col span={6} onClick={() => addOpt("email")}>
              邮箱
            </Col>
            <Col span={6} onClick={() => addOpt("mobile")}>
              电话
            </Col>
          </Row>
        </span>
      <Divider/>
      <span>
          <Row gutter={16} style={{ width: "250px", cursor: "pointer" }}>
            <Col span={6} onClick={() => addOpt("input")}>
              输入框
            </Col>
            <Col span={6} onClick={() => addOpt("radio")}>
              单选
            </Col>
            <Col span={6} onClick={() => addOpt("select")}>
              选择器
            </Col>
            <Col span={6} onClick={() => addOpt("rate")}>
              评分
            </Col>
            <Col span={6} onClick={() => addOpt("checkbox")}>
              多选框
            </Col>
            <Col span={6} onClick={() => addOpt("datePicker")}>
              日期
            </Col>
            <Col span={6} onClick={() => addOpt("upload")}>
              上传
            </Col>
          </Row>
        </span>
    </div>
  );

  return (
    <React.Fragment>
      <Divider dashed/>
      <Popover
        placement="bottom"
        title={"添加"}
        content={content}
        trigger="click"
      >
        <Button type="dashed" style={{ width: "100%" }}>
          <Icon type="add" theme="outlined"/>
          添加
        </Button>
      </Popover>
    </React.Fragment>
  );
});


export default FormItemAdd;
