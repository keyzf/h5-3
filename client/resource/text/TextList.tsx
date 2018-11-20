import * as React from "react";
import { useState } from "react";
import { useDispatch } from "redux-react-hook";
import { Col, Divider, Icon, Row, Tag } from "antd";
import { css } from "emotion";
import TextData from "./database";

const TextList = React.memo(() => {
  const dispatch = useDispatch();
  const pushDate = (data) => dispatch({ type: "UI_PUSHDATA", payload: data });
  const [state, setState] = useState({ type: "composing", name: "排版", show: [] });
  // 切换标签
  const changeTab = (type: string, name: string): void => {
    setState({
      type: type,
      name: name,
      show: state.show
    });
  };

  const pushData = (data) => {
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
            <br/>
            内容纵向排版的文本
          </Col>
          <Col span={3} className={style.center}>
            <Icon type="plus-circle-o" style={{ fontSize: "18px" }}/>
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
            <br/>
            内容横向排版的文本
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
              onChange={() => changeTab(data.type, data.name)}
              checked={state.type === data.type}
            >
              {data.name}
            </CheckableTag>
          );
        })}
      </div>
      <Divider>{name}</Divider>
    </React.Fragment>
  );
});

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
  `
};

/**
 * @desc row 配置
 */
const rowConfig: { type; gutter; style } = {
  type: "flex",
  gutter: 16,
  style: { padding: "0 8px" }
};

export default TextList;