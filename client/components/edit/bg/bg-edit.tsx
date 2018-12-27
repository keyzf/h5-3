import * as React from "react";
import {Tabs, Button, Icon} from "antd";
import BgEditColor from "./color";
import BgEditImg from "./img";
import {css} from "glamor";

const BgEdit = React.memo(() => {
    const TabPane = Tabs.TabPane;

    const scrollbar = css({
        width: "100%",
        height: "calc(100vh - 107px)",
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
        <Tabs>
            <TabPane tab="背景设置" key="1" style={{padding: "0 5px"}}>
                <div {...scrollbar}>
                    <p>背景色</p>
                    <BgEditColor/>
                    <br/>

                    <p>背景图</p>
                    <BgEditImg/>
                </div>
            </TabPane>
        </Tabs>
    );
});

export default BgEdit;
