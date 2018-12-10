import * as React from "react";
import { useMappedState } from "redux-react-hook";
import { useCallback, useState } from "react";
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
import ImgModel from "../../common/imgModel";
import ImgCrop from "../../common/imgCrop";
import { css } from "glamor";

const PictureEdit = React.memo(() => {
  const dispatch = useDispatch();
  const [state, setState] = useState(-1);
  const { editList, ui } = useMappedState(
    useCallback(
      (state: Store) => ({
        editList: state.edit.number,
        ui: state.ui[state.page.now],
      }),
      []
    )
  );
  // 当前项目数据
  const uiData = ui[editList[0]];

  const choose = (index: any) => {
    setState(index);
  };

  const back = () => {
    setState(-1);
  };

  const add = () => {
    dispatch({ type: "PICTURE_BASE_ADD", payload: PictureDataAdd });
  };

  const changeImg = (url: any) => {
    dispatch({ type: "PICTURE_VALUE", payload: { img: url, crop: url } });
  };

  const itemChangeImg = (url: any) => {
    dispatch({
      type: "PICTURE_BASE_ITEM",
      payload: { data: { img: url, crop: url }, index: state }
    });
  };

  const itemCropImg = (data: any) => {
    dispatch({
      type: "PICTURE_BASE_ITEM",
      payload: {
        index: state,
        data: {
          crop: `${uiData.base.img}?imageMogr2/crop/!${data.width}x${
            data.height
          }a${data.x}a${data.y}`
        }
      }
    });
  };

  const cropImg = (data: any) => {
    dispatch({
      type: "PICTURE_VALUE",
      payload: {
        crop: `${uiData.base.img}?imageMogr2/crop/!${data.width}x${
          data.height
        }a${data.x}a${data.y}`
      }
    });
  };

  const scrollbar = css({
    width: "100%",
    height: "calc(100vh - 135px)",
    overflowX: "auto",
    overflowY: "auto",
    scrollbarArrowColor: "transparent",
    scrollbarFaceColor: "transparent",
    scrollbarHighlightColor: "transparent",
    scrollbarShadowColor: "transparent",
    scrollbarDarkshadowColor: "transparent",
    scrollbarTrackColor: "transparent",
    scrollbarBaseColor: "transparent",

    "&::-webkit-scrollbar": {
      border: "none",
      width: 0,
      height: 0,
      backgroundColor: "transparent"
    },
    "&::-webkit-scrollbar-button": {
      display: "none"
    },
    "&::-webkit-scrollbar-track": {
      display: "none"
    },
    "&::-webkit-scrollbar-track-piece": {
      display: "none"
    },

    "&::-webkit-scrollbar-thumb": {
      display: "none"
    },
    "&::-webkit-scrollbar-corner": {
      display: "none"
    },
    "&::-webkit-resizer": {
      display: "none"
    }
  });
  return (
    <div {...scrollbar}>
      {uiData.common.id === 0 ? (
        <Tabs defaultActiveKey="2">
          <TabPane tab="属性设置" key="2">
            <div style={{ padding: "0 10px" }}>
              <Form>
                <Row gutter={16} type={"flex"}>
                  <Col span={10}>
                    <ImgModel choose={uiData.base.img} imgChange={changeImg}>
                      <div style={style.img}>
                        <img
                          style={{ maxHeight: "100%", maxWidth: "100%" }}
                          src={uiData.base.crop}
                          alt="img"
                        />
                      </div>
                    </ImgModel>
                  </Col>
                  <Col span={14}>
                    <Button.Group>
                      <Button style={{ top: "-5px" }}>
                        {" "}
                        <ImgModel
                          choose={uiData.base.img}
                          imgChange={changeImg}
                        >
                          <div style={{ position: "relative", top: "-15px" }}>
                            更换
                          </div>
                        </ImgModel>
                      </Button>
                      <Button>
                        <ImgCrop src={uiData.base.img} cropImg={cropImg}>
                          裁剪
                        </ImgCrop>
                      </Button>
                    </Button.Group>
                    <p style={{ marginTop: "15px" }}>
                      格式：*.jpg / *.png
                      <br />
                      大小不超过2M
                    </p>
                  </Col>
                </Row>
                <Divider dashed />
                <PictureRadius />
                <PictureLink />
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
                        <ImgModel
                          choose={ui[editList[0]].base[state].crop}
                          imgChange={itemChangeImg}
                        >
                          <div style={style.img}>
                            <img
                              style={{ maxHeight: "100%", maxWidth: "100%" }}
                              src={ui[editList[0]].base[state].crop}
                              alt="img"
                            />
                          </div>
                        </ImgModel>
                      </Col>
                      <Col span={14}>
                        <Button.Group>
                          <Button>
                            <ImgModel
                              choose={ui[editList[0]].base[state].crop}
                              imgChange={itemChangeImg}
                            >
                              <div style={{ position: "relative" }}>更换</div>
                            </ImgModel>
                          </Button>
                          <Button>
                            <ImgCrop
                              src={ui[editList[0]].base[state].img}
                              cropImg={itemCropImg}
                            >
                              裁剪
                            </ImgCrop>
                          </Button>
                        </Button.Group>
                        <p style={{ marginTop: "15px" }}>
                          格式：*.jpg / *.png
                          <br />
                          大小不超过2M
                        </p>
                      </Col>
                    </Row>
                    <Divider dashed />
                    <PictureItemRadius index={state} />
                    <PictureItemColor index={state} />
                    <PictureItemLink index={state} />
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
                    <Divider dashed />
                    <Button
                      type="dashed"
                      style={{ width: "100%" }}
                      onClick={add}
                    >
                      <Icon type="add" theme="outlined" />
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
                <PictureColor />
                <PictureLink />
              </Form>
            </div>
          </TabPane>
        </Tabs>
      )}
    </div>
  );
});

const TabPane = Tabs.TabPane;

const style: { center: any; img: any } = {
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
