import * as React from "react";
import { Divider, Tag } from "antd";
import { useState } from "react";
import styled from "react-emotion";
import RenderForm from "./render";
import FormUIData from "./database";
import { useDispatch } from "redux-react-hook";


const FormList = React.memo(() => {
  const dispatch = useDispatch();
  const pushDate = data => dispatch({ type: "UI_PUSHDATA", payload: data });
  const [state, setState] = useState({
    type: "apply",
    name: "报名",
    showArray: [0]
  });
  const { type, name, showArray } = state;
  const option = [
    { type: "apply", name: "报名" },
    { type: "recruitment", name: "招聘" },
    { type: "question", name: "问卷" }
  ];


  const chooseTab = (type: string, name: string) => {
    switch (type) {
      case "apply":
        return setState({
          type: type,
          name: name,
          showArray: [0]
        });
      case "recruitment":
        return setState({
          type: type,
          name: name,
          showArray: [1]
        });
      case "question":
        return setState({
          type: type,
          name: name,
          showArray: [2]
        });
    }
  };

  return (
    <React.Fragment>
      <div style={{ padding: "0 3px" }}>
        {option.map((data, index) => {
          return (
            <CheckableTag
              key={index}
              onChange={() => chooseTab(data.type, data.name)}
              checked={type === data.type}
            >
              {data.name}
            </CheckableTag>
          );
        })}
      </div>
      <Divider>{name}</Divider>
      <div>
        {showArray.map((data, index) => {
          return (
            <UIHover key={index} onClick={() => pushDate(FormUIData[data])}>
              <div style={style.center}>
                <RenderForm data={FormUIData[data]}/>
              </div>
            </UIHover>
          );
        })}
      </div>
    </React.Fragment>
  );
});

const { CheckableTag } = Tag;

// 样式组件
const UIHover = styled("div")`
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
    `;
// 样式
const style: { center; imgBorder } = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    pointerEvents: "none",
    userSelect: "none"
  },
  imgBorder: {
    alignItems: "center",
    border: "1px solid #ddd",
    display: "flex",
    height: "50px",
    justifyContent: "center",
    margin: "auto",
    width: "50px"
  }
};

// @ts-ignore
export default FormList;
