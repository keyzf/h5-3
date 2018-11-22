import * as React from "react";
import { css } from "emotion";
import { useState } from "react";
import { useDispatch } from "redux-react-hook";
import { Row, Col, Divider, Icon, Tag } from "antd";
import PictureData from "./database";
import Picture36 from "./components/icon/picture_36";


const PictureList = React.memo(() => {
  const dispatch = useDispatch();
  const pushDate = data => dispatch({ type: "UI_PUSHDATA", payload: data });
  const [state, setState] = useState({
    type: "shape",
    name: "形状",
    showArray: []
  });

  const chooseTab = (type: string, name: string) => {
    switch (type) {
      case "shape":
        return setState({
          type: type,
          name: name,
          showArray: []
        });
      case "line":
        return setState({
          type: type,
          name: name,
          showArray: []
        });
      case "banner":
        return setState({
          type: type,
          name: name,
          showArray: []
        });
      case "icon":
        return setState({
          type: type,
          name: name,
          showArray: [
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
            28,
            29,
            30
          ]
        });
    }
  };

  const pushData = data => {
    pushDate(data);
  };

  const option = [
    { type: "shape", name: "形状" },
    { type: "line", name: "线条" },
    { type: "icon", name: "图标" },
    { type: "banner", name: "条幅" }
  ];

  return (
    <React.Fragment>
      <div className={style.uiHover} onClick={() => pushData(PictureData[0])}>
        <Row type={"flex"} gutter={16} style={{ padding: "0 6px" }}>
          <Col span={5} className={style.imgBorder}>
            <img
              style={{ margin: "10px 0" }}
              src={"http://src.e7wei.com/0.46851856602664643.png"}
              alt={"UpPictureExample"}
            />
          </Col>
          <Col span={16} className={style.center}>
            单图
            <br/>
            展示图片的真实比例
          </Col>
          <Col span={3} className={style.center}>
            <Icon type="plus-circle-o" style={{ fontSize: "18px" }}/>
          </Col>
        </Row>
      </div>
      <div className={style.uiHover} onClick={() => pushData(PictureData[1])}>
        <Row type={"flex"} gutter={16} style={{ padding: "0 6px" }}>
          <Col span={5} className={style.imgBorder}>
            <img
              style={{ margin: "10px 0" }}
              src={"http://src.e7wei.com/0.5602715866542995.png"}
              alt={"horizontal_text_img"}
            />
          </Col>
          <Col span={16} className={style.center}>
            多图幻灯
            <br/>
            自动切换当前图集组件
          </Col>
          <Col span={3} className={style.center}>
            <Icon type="plus-circle-o" style={{ fontSize: "18px" }}/>
          </Col>
        </Row>
      </div>
      <Divider/>
      <div style={{ padding: "0 3px" }}>
        {option.map((data, index) => {
          return (
            <CheckableTag
              key={index}
              onChange={() => chooseTab(data.type, data.name)}
              checked={state.type === data.type}
            >
              {data.name}
            </CheckableTag>
          );
        })}
      </div>
      <Divider>{name}</Divider>
      <div className={style.scrollbar}>
        {state.type === "icon" ? (
          <Row gutter={8} style={{ padding: "0 5px" }}>
            {
              state.showArray.map((data, index) =>
                <Col span={8} key={index} onClick={() => pushData(PictureData[data])}>
                  <div className={style.uiHover}>
                    <div className={style.center}>
                      <Picture36 key={index} data={PictureData[data]}/>
                    </div>
                  </div>
                </Col>
              )
            }
          </Row>
        ) : (
          ""
        )}

      </div>
    </React.Fragment>
  );
});


const { CheckableTag } = Tag;
/**
 * @desc 样式
 */
const style = {
  imgBorder: css`
    align-items: center;
    border: 1px solid #ddd;
    display: flex;
    height: 50px;
    justify-content: center;
    margin: auto;
    width: 50px;
  `,
  center: css`
     {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      pointer-events: none;
      user-select: none;
    }
  `,
  uiHover: css`
     {
      padding: 5px 6px;
      transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
        background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
        -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
      will-change: box-shadow, transform;
      cursor: pointer;
      &:hover {
        padding: 5px 6px;
        background: rgba(221, 221, 221, 0.21);
        cursor: pointer;
      }
    }
  `,
  scrollbar: css`
    width: 100%;
    height: calc(100vh - 320px);
    overflow-x: auto;
    overflow-y: auto;
    scrollbar-arrow-color: transparent;
    scrollbar-face-color: transparent;
    scrollbar-3dlight-color: transparent;
    scrollbar-highlight-color: transparent;
    scrollbar-shadow-color: transparent;
    scrollbar-darkshadow-color: transparent;
    scrollbar-track-color: transparent;
    scrollbar-base-color: transparent;

    &::-webkit-scrollbar {
      border: none;
      width: 0;
      height: 0;
      background-color: transparent;
    }
    &::-webkit-scrollbar-button {
      display: none;
    }
    &::-webkit-scrollbar-track {
      display: none;
    }
    &::-webkit-scrollbar-track-piece {
      display: none;
    }
    &::-webkit-scrollbar-thumb {
      display: none;
    }
    &::-webkit-scrollbar-corner {
      display: none;
    }
    &::-webkit-resizer {
      display: none;
    }
  `
};

export default PictureList;
