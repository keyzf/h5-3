import * as React from "react";
import { useState } from "react";
import ButtonData from "./database";
import styled from "react-emotion";
import { useDispatch } from "redux-react-hook";
import RenderButton from "./render";
import {css} from "glamor";

const ButtonList = React.memo(() => {
  const [state, setState] = useState([0, 1, 2, 3, 4, 5]);
  const dispatch = useDispatch();
  const addToUi = (data:any) => {
    dispatch({ type: "UI_PUSHDATA", payload: data });
  };

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
  const style: { center:any; imgBorder:any } = {
    center: {
      height: "65px",
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
    const scrollbar = css({
        width: "100%",
        height: "calc(100vh - 90px)",
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
      {state.map((data:any, index:any) => {
        return (
          <UIHover key={index} onClick={() => addToUi(ButtonData[data])}>
            <div style={style.center}>
              <RenderButton data={ButtonData[data]} key={index} />
            </div>
          </UIHover>
        );
      })}
    </div>
  );
});

export default ButtonList;
