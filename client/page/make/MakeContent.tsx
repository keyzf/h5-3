import * as React from "react";
import { css } from "emotion";
import BackgroundUI from "../../resource/background/BackgroundUI";
import ContentHeight from "../../components/content/height";
import BaselineH from "../../components/toolbar/baseline-h";
import BaselineV from "../../components/toolbar/baseline-v";

const MakeContent = React.memo(() => {
  return (
    <div className={style.scrollbar} id={"content"}>
      <div className={style.layout}>
        <BaselineH/>
        <BaselineV/>
        <ContentHeight/>
        <div className={style.sketchpad}>
          <BackgroundUI>
            <p>背景</p>
          </BackgroundUI>
        </div>
      </div>
    </div>
  );
});

/**
 * @desc 样式
 */
const style = {
  layout: css`
    position: relative;
    height: 10000px;
  `,
  sketchpad: css`
     {
      width: 320px;
      height: auto;
      overflow: hidden;
      margin: 55px auto 50px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
      word-wrap: break-word;
      
    }
  `,
  scrollbar: css`
     {
      width: 100%;
      height: calc(100vh - 50px);
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
    }
  `
};

export default MakeContent;
