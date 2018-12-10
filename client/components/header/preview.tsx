import * as React from "react";
import { Icon, Modal } from "antd";
import RenderStyle from "../common/renderStyle";
import RenderUi from "../common/renderUi";
import { useCallback, useEffect, useState } from "react";
import BackgroundUI from "../../resource/background/BackgroundUI";
import Store from "../../typing/store";
import { useMappedState } from "redux-react-hook";
import { css } from "glamor";
import MusicUi from "../../resource/music/music_ui";
import LinkMapOphoneOweb from "../common/link";
import { useDispatch } from "redux-react-hook";
import "animate.css";


const NavPreview = React.memo(() => {
  const dispatch = useDispatch();
  const [state, setState] = useState(false);
  const { ui, sid, now, motion, allUi } = useMappedState(
    useCallback(
      (state: Store) => ({
        ui: state.ui[state.page.now],
        sid: state.global.sid,
        now: state.page.now,
        motion: state.page.motion,
        allUi: state.ui
      }),
      []
    )
  );

  useEffect(
    () => {
      const element = document.getElementById("mots");
      if (element !== null && motion !== "none") {
        element.classList.remove(`animated`, `${motion}`);
        setTimeout(() => {
          element.classList.add(`animated`, `${motion}`);
        }, 1);
      }
    },
    [now]
  );

  const onPreview = () => {
    dispatch({
      type: "PAGE_CHANGE",
      payload: 0
    });
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };

  const change = () => {
    dispatch({
      type: "PAGE_CHANGE",
      payload: allUi.length === now + 1 ? 0 : now + 1
    });
  };

  const phoneHeader = css({
    position: "relative",
    flex: "1",
    width: "100%",
    height: "7%",
    "&:after": {
      content: "",
      display: "block",
      position: "absolute",
      width: "10px",
      height: "10px",
      borderRadius: "10px",
      background: "rgb(229, 229, 229)",
      transform: "translateX(-50px)",
      zIndex: "100",
      top: "40%",
      right: "50%"
    },
    "&:before": {
      display: "block",
      position: "absolute",
      content: "",
      width: "70px",
      height: "8px",
      background: "rgb(229, 229, 229)",
      borderRadius: "10px",
      zIndex: "100",
      top: "40%",
      right: "38%"
    }
  });
  const phoneContent = css({
    flex: "1",
    position: "relative",
    height: "86%",
    width: "100%",
    overflow: "auto",
    background: "rgb(229, 229, 229)",
    borderTop: "1px rgb(229, 229, 229) solid",
    borderBottom: "1px rgb(229, 229, 229) solid",

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
  const phoneFooter = css({
    position: "relative",
    flex: "1",
    height: "7%",
    "&:after": {
      content: "",
      display: "block",
      position: "absolute",
      width: "35px",
      height: "35px",
      borderRadius: "40px",
      background: "rgb(229, 229, 229)",
      zIndex: "100",
      bottom: "10%",
      right: "44%"
    }
  });
  const phone = css({
    boxSizing: "content-box",
    position: "relative",
    width: "320px",
    height: "600px",
    borderRadius: "25px",
    margin: "auto",
    zIndex: "11",
    background: "rgb(255, 255, 255)",
    boxShadow: "0 0 30px rgba(0, 0, 0, 0.65)"
  });

  return (
    <React.Fragment>
      <div style={{ color: "white" }} onClick={onPreview}>
        <i className={"iconfont icon-yulan"} style={{ marginRight: "10px" }} />
        预览
      </div>
      <Modal
        bodyStyle={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
        title="预览"
        visible={state}
        footer={null}
        onCancel={onClose}
      >
        <div {...phone}>
          <div {...phoneHeader} />
          <div {...phoneContent}>
            <BackgroundUI>
              <div
                style={{
                  position: "absolute",
                  zIndex: 999,
                  top: "28px",
                  left: "8px"
                }}
              >
                <MusicUi />
              </div>
              <div
                style={{
                  position: "absolute",
                  zIndex: 999,
                  lineHeight: "25px",
                  top: "28px",
                  right: "0"
                }}
              >
                <div
                  style={{
                    borderRadius: "10px",
                    background: "rgba(0,0,0,0.4)",
                    color: "white",
                    marginRight: "5px"
                  }}
                >
                  &nbsp;
                  <a
                    href={`${
                      window.location.origin
                    }/View/reports/vid/${sid}.html`}
                    target="view_window"
                    style={{ color: "white", fontSize: "12px" }}
                  >
                    投诉
                  </a>
                  &nbsp;
                </div>
              </div>
              <div
                id={"mots"}
                className={`animated ${motion}`}
                style={{ animationDuration: "2500ms" }}
              >
                {ui.map((data: any, index: number) => {
                  return (
                    <RenderStyle {...data.position} key={index}>
                      {data.common.type === "text" ||
                      (data.common.type === "picture" &&
                        data.common.id !== 1) ||
                      data.common.type === "button" ? (
                        <LinkMapOphoneOweb
                          key={index}
                          type={data.base.link.type}
                          link={data.base.link.url}
                        >
                          <RenderUi data={data} />
                        </LinkMapOphoneOweb>
                      ) : (
                        <RenderUi data={data} />
                      )}
                    </RenderStyle>
                  );
                })}
              </div>
              <div
                style={{
                  position: "absolute",
                  zIndex: 999,
                  bottom: 0,
                  width: "100%",
                  lineHeight: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",
                  alignContent: "center"
                }}
              >
                <div
                  style={{
                    borderRadius: "50px",
                    background: "rgba(0,0,0,0.4)",
                    marginBottom: "5px"
                  }}
                >
                  <a
                    href={"http://m.e7wei.com"}
                    style={{ color: "white", fontSize: "12px" }}
                  >
                    &nbsp;&nbsp;&nbsp; 技术支持 >> 易企微&nbsp;&nbsp;&nbsp;
                  </a>
                </div>
              </div>
            </BackgroundUI>
          </div>
          <div {...phoneFooter} />
          {allUi.length > 1 ? (
            <div
              onClick={change}
              style={{
                position: "absolute",
                zIndex: 999,
                right: 5,
                top: 300
              }}
            >
              <Icon
                type="right"
                style={{ fontSize: "20px" }}
                className={"animated infinite fadeInLeft"}
              />
            </div>
          ) : (
            ""
          )}
        </div>
      </Modal>
    </React.Fragment>
  );
});

export default NavPreview;
