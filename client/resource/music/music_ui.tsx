import * as React from "react";
import { css, keyframes } from "emotion";
import styled from "react-emotion";
import { useCallback, useState } from "react";
import { useMappedState } from "redux-react-hook";
import Store from "../../typing/store";

// 设置动画
const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// 设置组件
const RotateAtom = styled("div")`
  animation: ${rotate360} 2s linear infinite;
`;

const MusicUi = React.memo(() => {
  const [state, setState] = useState(false);

  const { music } = useMappedState(
    useCallback(
      (state: Store) => ({
        music: state.music
      }),
      []
    )
  );
  const onClickStop = (name: any) => {
    if (name === "open") {
      // @ts-ignore
      document.getElementById("h5_audio").pause();
      setState(true);
    }
    if (name === "stop") {
      // @ts-ignore
      document.getElementById("h5_audio").play();
      setState(false);
    }
  };
  const mobileStyle = css`
    @media (min-width: 0) and (max-width: 575px) {
      width: calc(20 / 320 * 100vw);
      height: calc(20 / 320 * 100vw);
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
      width: calc(20 / 320 * 100vw);
      height: calc(20 / 320 * 100vw);
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
      width: calc(20 / 320 * 100vw);
      height: calc(20 / 320 * 100vw);
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
      width: 25px;
      height: 25px;
    }

    @media (min-width: 1200px) {
      width: 25px;
      height: 25px;
    }
  `;
  const mobileFont = css`
    @media (min-width: 0) and (max-width: 575px) {
      font-size: calc(18 / 320 * 100vw);
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
      font-size: calc(18 / 320 * 100vw);
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
      font-size: calc(18 / 320 * 100vw);
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
      font-size: 18px;
    }

    @media (min-width: 1200px) {
      font-size: 18px;
    }
  `;

  return (
    <React.Fragment>
      <audio id={"h5_audio"} loop={true} src={music.url} autoPlay={true} />
      {state ? (
        <div
          className={mobileStyle}
          onClick={() => onClickStop("stop")}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            background: "rgba(0,0,0,0.4)",
            padding: "6px"
          }}
        >
          <i
            {...mobileFont}
            style={{
              padding: 0,
              margin: "0",
              color: "white"
            }}
            className={`${mobileFont} iconfont icon-yinfu`}
          />
        </div>
      ) : (
        <div
          className={mobileStyle}
          onClick={() => onClickStop("open")}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50px",
            background: "rgba(0,0,0,0.4)",
            padding: "6px"
          }}
        >
          <RotateAtom>
            <i
              style={{
                padding: 0,
                margin: 0,
                color: "white"
              }}
              className={`${mobileFont} iconfont icon-yinfu`}
            />
          </RotateAtom>
        </div>
      )}
    </React.Fragment>
  );
});

export default MusicUi;
