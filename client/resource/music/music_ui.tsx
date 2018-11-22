import * as React from "react";
import { keyframes } from "emotion";
import styled from "react-emotion";
import { useEffect, useState } from "react";

// 设置动画
const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// 设置组件
const RotateAtom = styled("div")`
  animation: ${rotate360} 2s linear infinite;
`;


const MusicUi = React.memo((props: { src: string }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    props.src
      ? onClickStop("stop")
      : "";
  });

  const onClickStop = name => {
    if (name === "open") {
      document.getElementById("h5_audio").onpause;
      setState(true);
    }
    if (name === "stop") {
      document.getElementById("h5_audio").onplay;
      setState(false);
    }
  };

  return (
    <React.Fragment>
      <audio
        id={"h5_audio"}
        loop={true}
        src={props.src}
      />
      {this.state.onClickStop ? (
        <div
          onClick={this.onClickStop.bind(this, "stop")}
          className={"flex_center"}
          style={{
            borderRadius: "50px",
            width: "25px",
            height: "25px",
            background: "rgba(0,0,0,0.4)",
            padding: "6px"
          }}
        >
          <i
            style={{
              padding: 0,
              margin: "0",
              color: "white",
              fontSize: "18px"
            }}
            className={"iconfont icon-yinfu"}
          />
        </div>
      ) : (
        <div
          onClick={this.onClickStop.bind(this, "open")}
          className={"flex_center"}
          style={{
            borderRadius: "50px",
            width: "25px",
            height: "25px",
            background: "rgba(0,0,0,0.4)",
            padding: "6px"
          }}
        >
          <RotateAtom>
            <i
              style={{
                padding: 0,
                margin: 0,
                color: "white",
                fontSize: "18px"
              }}
              className={"iconfont icon-yinfu"}
            />
          </RotateAtom>
        </div>
      )}
    </React.Fragment>
  );
});


export default MusicUi;
