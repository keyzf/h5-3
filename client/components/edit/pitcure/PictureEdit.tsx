import * as React from "react";
import { useMappedState } from "redux-react-hook";
import { useCallback, useState } from "react";
import { Motion, spring } from "react-motion";
import { useDispatch } from "redux-react-hook";
import { Button, Col, Divider, Form, Icon, Row, Tabs } from "antd";
import PictureColor from "./color";
import PictureLink from "./link";
import Store from "../../../typing/store";
import PictureRadius from "./radius";
import ItemList from "./item-list";
import PictureItemColor from "./item-color";
import PictureItemLink from "./item-link";
import PictureItemRadius from "./item-radius";
import { PictureDataAdd } from "../../../resource/picture/database";

const PictureEdit = React.memo(() => {
  const dispatch = useDispatch();
  const [state, setState] = useState(-1);
  const { editList, ui } = useMappedState(
    useCallback(
      (state: Store) => ({
        editList: state.edit.number,
        ui: state.ui
      }),
      []
    )
  );
  // 当前项目数据
  const uiData = ui[editList[0]];

  const choose = index => {
    setState(index);
  };

  const back = () => {
    setState(-1);
  };

  const add = () => {
    dispatch({ type: "PICTURE_BASE_ADD", payload: PictureDataAdd });
  };

  return (
    <React.Fragment>
      {uiData.common.id === 0 ? (
        <Tabs defaultActiveKey="2">
          <TabPane tab="属性设置" key="2">
            <div style={{ padding: "0 10px" }}>
              <Form>
                <Row gutter={16} type={"flex"}>
                  <Col span={10}>
                    <div style={style.img}>
                      <img
                        style={{ maxHeight: "100%", maxWidth: "100%" }}
                        src="http://7xv429.com1.z0.glb.clouddn.com/mao1.jpg"
                        alt="img"
                      />
                    </div>
                  </Col>
                  <Col span={14}>
                    <Button.Group>
                      <Button>更换</Button>
                      <Button>裁剪</Button>
                    </Button.Group>
                    <p style={{ marginTop: "15px" }}>
                      格式：*.jpg / *.png
                      <br/>
                      大小不超过2M
                    </p>
                  </Col>
                </Row>
                <Divider dashed/>
                <PictureRadius/>
                <PictureLink/>
              </Form>
            </div>
          </TabPane>
        </Tabs>
      ) : uiData.common.id === 1 ? (
        <React.Fragment>
          {state != -1 ? (
            <Tabs
              defaultActiveKey="1"
              tabBarExtraContent={<Button onClick={back}>返回列表</Button>}
            >
              <TabPane tab="属性设置" key="1">
                <Form>
                  <div style={{ padding: "0 10px" }}>
                    <Row gutter={16} type={"flex"}>
                      <Col span={10}>
                        <div style={style.img}>
                          <img
                            style={{ maxHeight: "100%", maxWidth: "100%" }}
                            src="http://7xv429.com1.z0.glb.clouddn.com/mao1.jpg"
                            alt="img"
                          />
                        </div>
                      </Col>
                      <Col span={14}>
                        <Button.Group>
                          <Button>更换</Button>
                          <Button>裁剪</Button>
                        </Button.Group>
                        <p style={{ marginTop: "15px" }}>
                          格式：*.jpg / *.png
                          <br/>
                          大小不超过2M
                        </p>
                      </Col>
                    </Row>
                    <Divider dashed/>
                    <PictureItemRadius index={state}/>
                    <PictureItemColor index={state}/>
                    <PictureItemLink index={state}/>
                  </div>
                </Form>
              </TabPane>
            </Tabs>
          ) : (
            <Tabs defaultActiveKey="1">
              <TabPane tab="图片设置" key="1">
                <React.Fragment>
                  <ItemList
                    showList={uiData}
                    order={uiData.base}
                    changeFun={dispatch}
                    choose={choose}
                  />
                  <Col span={24}>
                    <Divider dashed/>
                    <Button type="dashed" style={{ width: "100%" }} onClick={add}>
                      <Icon type="add" theme="outlined"/>
                      添加
                    </Button>
                  </Col>
                </React.Fragment>
              </TabPane>
            </Tabs>
          )}
        </React.Fragment>
      ) : (
        <Tabs defaultActiveKey="2">
          <TabPane tab="属性设置" key="2">
            <div style={{ padding: "0 10px" }}>
              <Form>
                <PictureColor/>
                <PictureLink/>
              </Form>
            </div>
          </TabPane>
        </Tabs>
      )}
    </React.Fragment>
  );
});

const TabPane = Tabs.TabPane;

const style: { center; img } = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    height: "40px",
    background: "#ccd5db"
  },
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    width: "100%",
    height: "100px",
    border: "1px solid #000",
    color: "#e7e7e7"
  }
};

export default PictureEdit;
