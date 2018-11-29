import * as React from "react";
import { useState } from "react";
import { useDispatch } from "redux-react-hook";
import { Col, Divider, Icon, Row, Tag } from "antd";
import { css } from "emotion";
import TextData from "./database";
import RenderText from "./render";

const TextList = React.memo(() => {
  const dispatch = useDispatch();
  const pushDate = (data: any) =>
    dispatch({ type: "UI_PUSHDATA", payload: data });
  const [state, setState] = useState({
    type: "composing",
    name: "排版",
    show: [
      60,
      61,
      62,
      63,
      64,
      65,
      66,
      67,
      68,
      69,
      70,
      71,
      72,
      73,
      74,
      75,
      76,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      86,
      87,
      88,
      89,
      90,
      91,
      92,
      93,
      94,
      95
    ]
  });
  // 切换标签
  const changeTab = (type: string, name: string): void => {
    let show: number[] = [];
    switch (type) {
      case "recruitment":
        show = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
        break;
      case "promotion":
        show = [15, 16, 17, 18, 19, 20, 21, 22];
        break;
      case "festival":
        show = [23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
        break;
      case "business":
        show = [33, 34, 35, 36];
        break;
      case "invitation":
        show = [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];
        break;
      case "enrollment":
        show = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59];
        break;
      case "composing":
        show = [
          60,
          61,
          62,
          63,
          64,
          65,
          66,
          67,
          68,
          69,
          70,
          71,
          72,
          73,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          82,
          83,
          84,
          85,
          86,
          87,
          88,
          89,
          90,
          91,
          92,
          93,
          94,
          95
        ];
        break;
    }

    // @ts-ignore
    setState({
      type: type,
      name: name,
      show: show
    });
  };

  const pushData = (data: any) => {
    pushDate(data);
  };
  // 选项
  const option = [
    { type: "composing", name: "排版" },
    { type: "recruitment", name: "招聘" },
    { type: "promotion", name: "促销" },
    { type: "festival", name: "节日" },
    { type: "business", name: "商务" },
    { type: "invitation", name: "邀请函" },
    { type: "enrollment", name: "招生" }
  ];

  /**
   * @desc 拆解antd 组件
   */
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

  /**
   * @desc row 配置
   */
  const rowConfig: { type: any; gutter: any; style: any } = {
    type: "flex",
    gutter: 16,
    style: { padding: "0 8px" }
  };

  return (
    <React.Fragment>
      <div className={style.uiHover} onClick={() => pushData(TextData[0])}>
        <Row {...rowConfig}>
          <Col span={5} className={style.imgBorder}>
            <img
              style={{ margin: "10px 3px" }}
              src={"http://src.e7wei.com/0.33359334389678663.png"}
              alt={"horizontal_text_img"}
            />
          </Col>
          <Col span={16} className={style.center}>
            纵向文本
            <br />
            内容纵向排版的文本
          </Col>
          <Col span={3} className={style.center}>
            <Icon type="plus-circle-o" style={{ fontSize: "18px" }} />
          </Col>
        </Row>
      </div>
      <div className={style.uiHover} onClick={() => pushData(TextData[1])}>
        <Row {...rowConfig}>
          <Col span={5} className={style.imgBorder}>
            <img
              style={{ margin: "10px 3px" }}
              src={"http://src.e7wei.com/0.15285884372691427.png"}
              alt={"horizontal_text_img"}
            />
          </Col>
          <Col span={16} className={style.center}>
            横向文本
            <br />
            内容横向排版的文本
          </Col>
          <Col span={3} className={style.center}>
            <Icon type="plus-circle-o" style={{ fontSize: "18px" }} />
          </Col>
        </Row>
      </div>
      <Divider />
      <div style={{ padding: "0 3px" }}>
        {option.map((data, index) => {
          return (
            <CheckableTag
              key={index}
              onChange={() => changeTab(data.type, data.name)}
              checked={state.type === data.type}
            >
              {data.name}
            </CheckableTag>
          );
        })}
      </div>
      <Divider>{name}</Divider>
      <div className={style.scrollbar}>
        {state.show.map((data, index: number) => {

          return (
            <div
              className={style.uiHover}
              key={index}
              onClick={() => pushData(TextData[data])}
            >
              <div className={style.center}>
                <RenderText data={TextData[data]} />
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
});

export default TextList;
