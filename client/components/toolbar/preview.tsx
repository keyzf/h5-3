import * as React from "react";
import { Icon, Tooltip, Modal } from "antd";
import RenderStyle from "../common/renderStyle";
import RenderUi from "../common/renderUi";
import { css } from "emotion";
import { useCallback, useState } from "react";
import BackgroundUI from "../../resource/background/BackgroundUI";
import Store from "../../typing/store";
import { useMappedState } from "redux-react-hook";


const ToolBarPreview = React.memo(() => {
  const [state,setState] = useState(false);
  const { ui } = useMappedState(
    useCallback(
      (state: Store) => ({
        ui: state.ui,

      }),
      []
    )
  );

  const  onPreview = () => {
    setState(true);
  };

  const onClose = () => {
    setState(false);
  };


  return (
    <React.Fragment>
      <Tooltip title="预览" placement="left">
        <Icon
          className={style.center}
          type="eye"
          theme="outlined"
          onClick={onPreview}
        />
      </Tooltip>
      <Modal
        bodyStyle={{ backgroundColor: "rgba(0, 0, 0, 0.65)" }}
        title="预览"
        visible={state}
        footer={null}
        onCancel={onClose}
      >
        <div className={style.phone}>
          <div className={style.phoneHeader}/>
          <div className={style.phoneContent}>
            <BackgroundUI>
              {ui.map((data: any, index: number) => {
                return (
                  <RenderStyle {...data.position} key={index}>
                    <RenderUi data={data}/>
                  </RenderStyle>
                );
              })}
            </BackgroundUI>
          </div>
          <div className={style.phoneFooter}/>
        </div>
      </Modal>
    </React.Fragment>
  );
});

const style = {
  phoneHeader: css`
    position: relative;
      flex: 1;
      width: 100%;
      height: 7%;
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 10px;
        background: rgb(229, 229, 229);
        transform: translateX(-50px);
        z-index: 100;
        top: 40%;
        right: 50%;
      }
      &:before {
        display: block;
        position: absolute;
        content: "";
        width: 70px;
        height: 8px;
        background: rgb(229, 229, 229);
        border-radius: 10px;
        z-index: 100;
        top: 40%;
        right: 38%;
      }
  `,
  phoneContent: css`
   flex: 1;
      position: relative;
      height: 86%;
      width: 100%;
      overflow: auto;
      background: rgb(229, 229, 229);
      border-top: 1px rgb(229, 229, 229) solid;
      border-bottom: 1px rgb(229, 229, 229) solid;

      scrollbar-arrow-color: transparent; /*三角箭头的颜色*/
      scrollbar-face-color: transparent; /*立体滚动条的颜色（包括箭头部分的背景色）*/
      scrollbar-3dlight-color: transparent; /*立体滚动条亮边的颜色*/
      scrollbar-highlight-color: transparent; /*滚动条的高亮颜色（左阴影？）*/
      scrollbar-shadow-color: transparent; /*立体滚动条阴影的颜色*/
      scrollbar-darkshadow-color: transparent; /*立体滚动条外阴影的颜色*/
      scrollbar-track-color: transparent; /*立体滚动条背景颜色*/
      scrollbar-base-color: transparent; /*滚动条的基色*/

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
  `,
  phoneFooter: css`
    position: relative;
      flex: 1;
      height: 7%;
      &:after {
        content: "";
        display: block;
        position: absolute;
        width: 35px;
        height: 35px;
        border-radius: 40px;
        background: rgb(229, 229, 229);
        z-index: 100;
        bottom: 10%;
        right: 44%;
      }
`,
  center: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 10px 0;
    font-size: 19px
  `,
  phone: css`
    box-sizing: content-box;
    width: 320px;
    height: 600px;
    border-radius: 25px;
    margin: auto;
    z-index: 11;
    background: rgb(255, 255, 255);
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.65)
  `
};


export default ToolBarPreview;
