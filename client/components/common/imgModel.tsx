import * as React from "react";
import { useState } from "react";
import { Modal, Tabs, Button, Row, Col } from "antd";


const ImgModel = React.memo((props: { children: any }) => {
  const [state, setState] = useState(false);
  const open = () => {
    setState(true);
  };

  const ok = () => {
    setState(false);
  };

  const close = () => {
    setState(false);
  };

  const TabPane = Tabs.TabPane;
  const operations = <Button>一键上传</Button>;

  return (
    <div>
      <div onClick={open}>{props.children}</div>
      <Modal
        title="素材库"
        visible={state}
        width={600}
        onCancel={close}
        onOk={ok}
        okText={"确定"}
        cancelText={"取消"}
      >
        <Tabs tabBarExtraContent={operations}>
          <TabPane tab="我的素材" key="1">
            <Row gutter={16}>
              {[1, 2, 3, 4, 5, 6].map((data, index) => {
                return (
                  <Col span={6} style={{ height: "100px", marginBottom: "10px" }} key={index}>
                    <img
                      src="https://pimg.xiuzan.com/market/2018/05/20180522112216_RZSFfP?x-oss-process=image/resize,w_750"
                      alt={"img"}
                      width={"100%"}
                      height={"100%"}
                    />
                  </Col>
                );
              })}
            </Row>
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
});


export default ImgModel;
