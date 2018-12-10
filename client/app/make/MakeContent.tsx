import * as React from "react";
import {useCallback} from "react";
import {useDispatch, useMappedState} from "redux-react-hook";
import BackgroundUI from "../../resource/background/BackgroundUI";
import ContentHeight from "../../components/content/height";
import BaselineH from "../../components/toolbar/baseline-h";
import BaselineV from "../../components/toolbar/baseline-v";
import ContentDrag from "../../components/content/drag";
import ContentChoose from "../../components/content/choose";
import ContentLock from "../../components/content/lock";
import ContentHotKey from "../../components/content/hot-key";
import Store from "../../typing/store";
import {css} from "glamor";
import MakePage from './MakePage'

const MakeContent = React.memo(() => {
    const dispatch = useDispatch();
    const {ui} = useMappedState(
        useCallback(
            (state: Store) => ({
                ui: state.ui[state.page.now],
            }),
            []
        )
    );

    const layout = css({
        position: "relative",
        height: "10000px"
    });
    const scrollbar = css({
        width: "100%",
        height: "calc(100vh - 50px)",
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
        <div {...scrollbar} id={"content"}>
            <div {...layout}>
                <MakePage>
                    <BaselineH/>
                    <BaselineV/>
                    <ContentHeight/>
                    <ContentHotKey fun={dispatch} ui={ui}>
                        <BackgroundUI>
                            <ContentLock/>
                            <ContentChoose/>
                            <ContentDrag/>
                        </BackgroundUI>
                    </ContentHotKey>
                </MakePage>
            </div>
        </div>
    );
});

export default MakeContent;
