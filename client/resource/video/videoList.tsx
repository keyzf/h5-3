import * as React from "react";
import styled from "react-emotion";
import VideoData from "./database";
import RenderVideo from "./render";
import { useDispatch } from "redux-react-hook";

const VideoList = React.memo(() => {
  const dispatch = useDispatch();
  const addToUi = data => {
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
  return (
    <UIHover onClick={() => addToUi(VideoData[0])}>
      <div style={style.center}>
        <RenderVideo data={VideoData[0]}/>
      </div>
    </UIHover>
  );
});

export default VideoList;
