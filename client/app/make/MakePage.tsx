import * as React from "react";
import { useState } from "react";
import { Button, Tabs, Modal, Radio } from "antd";

export default React.memo((props: any) => {
  const [state, setState] = useState(false);
  const [value, setValue] = useState(1);
  const RadioGroup = Radio.Group;
  const showModal = () => {
    setState(true);
  };

  const handleOk = e => {
    setState(false);
  };

  const handleCancel = e => {
    setState(false);
  };

  const onChange = e => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const TabPane = Tabs.TabPane;
  const ButtonGroup = Button.Group;
  const operations = (
    <ButtonGroup style={{ marginRight: "5px" }}>
      <Button htmlType={"button"}>添加一页</Button>
      <Button htmlType={"button"} onClick={showModal}>
        翻页效果{" "}
      </Button>
    </ButtonGroup>
  );

  return (
    <React.Fragment>
      <Tabs
        style={{ marginTop: "5px", marginLeft: "5px" }}
        type="editable-card"
        tabBarExtraContent={operations}
        hideAdd
      >
        <TabPane tab="第一页" key="1">
          {props.children}
        </TabPane>
        <TabPane tab="第二页" key="2">
          {props.children}
        </TabPane>
        <TabPane tab="第三页" key="3">
          {props.children}
        </TabPane>
      </Tabs>
      <Modal
        title="翻页效果"
        visible={state}
        onOk={handleOk}
        okText={"确认"}
        cancelText={"取消"}
        onCancel={handleCancel}
      >
        <RadioGroup onChange={e => onChange(e)} value={value}>
          <Radio value={1}>从下到上</Radio>
          <Radio value={2}>从上到下</Radio>
          <Radio value={3}>从左到右</Radio>
          <Radio value={4}>从右到左</Radio>
        </RadioGroup>
      </Modal>
    </React.Fragment>
  );
});
