import * as React from "react";
import { Icon, Tooltip, Modal } from "antd";
import RenderStyle from "../common/renderStyle";
import RenderUi from "../common/renderUi";
import { useCallback, useState } from "react";
import BackgroundUI from "../../resource/background/BackgroundUI";
import Store from "../../typing/store";
import { useMappedState } from "redux-react-hook";
import { css } from "glamor";

const ToolBarPreview = React.memo(() => {
  const [state, setState] = useState(false);
  const { ui } = useMappedState(
    useCallback(
      (state: Store) => ({
        ui: state.ui
      }),
      []
    )
  );

  const onPreview = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
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
  const center = css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    padding: "10px 0",
    fontSize: "19px"
  });
  const phone = css({
    boxSizing: "content-box",
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
      <Tooltip title="预览" placement="left">
        <Icon {...center} type="eye" theme="outlined" onClick={onPreview} />
      </Tooltip>
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
              {ui.map((data: any, index: number) => {
                return (
                  <RenderStyle {...data.position} key={index}>
                    <RenderUi data={data} />
                  </RenderStyle>
                );
              })}
            </BackgroundUI>
          </div>
          <div {...phoneFooter} />
        </div>
      </Modal>
    </React.Fragment>
  );
});

export default ToolBarPreview;