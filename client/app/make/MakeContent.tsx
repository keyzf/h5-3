import * as React from "react";
import { css } from "emotion";
import { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import BackgroundUI from "../../resource/background/BackgroundUI";
import ContentHeight from "../../components/content/height";
import BaselineH from "../../components/toolbar/baseline-h";
import BaselineV from "../../components/toolbar/baseline-v";
import ContentDrag from "../../components/content/drag";
import ContentChoose from "../../components/content/choose";
import ContentLock from "../../components/content/lock";
import ContentHotKey from "../../components/content/hot-key";
import Store from "../../typing/store";


const MakeContent = React.memo(() => {
  const dispatch = useDispatch();
  const { ui } = useMappedState(
    useCallback(
      (state: Store) => ({
        ui: state.ui
      }),
      []
    )
  );
  return (
    <div className={style.scrollbar} id={"content"}>
      <div className={style.layout}>
        <BaselineH/>
        <BaselineV/>
        <ContentHeight/>
        < ContentHotKey fun={dispatch} ui={ui}>
          <BackgroundUI>
            <ContentLock/>
            <ContentChoose/>
            <ContentDrag/>
          </BackgroundUI>
        </ ContentHotKey>
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
