import * as React from "react";
import {Row, Col, Tabs, Icon, Button} from "antd";
import {useState} from "react";
import VideoList from "../../resource/video/videoList";
import ButtonList from "../../resource/button/buttonList";
import FormList from "../../resource/form/formList";
import {css} from "glamor";

const InterActive = React.memo(() => {
    const [state, setState] = useState({
        type: "",
        name: "",
        back: true
    });

    const onChoose = (type: string, name: string): void => {
        setState({
            type: type,
            name: name,
            back: false
        });
    };

    const onBack = () => {
        setState({
            type: "",
            name: "",
            back: true
        });
    };

    const {type, name, back} = state;

    const Back = () => {
        return (
            <Button
                type="dashed"
                style={{marginRight: "5px"}}
                onClick={onBack}
                htmlType={"button"}
            >
                <Icon type="left" theme="outlined"/>
                返回
            </Button>
        );
    };

    const uiHover = css({
        padding: "5px 6px",
        width: "100%",
        height: "100%",
        transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1)",
        backgroundColor: "0.2s cubic-bezier(0.4, 0, 0.2, 1)",

        willChange: "box-shadow, transform",
        cursor: "pointer",
        "&:hover": {
            padding: "5px 6px",
            background: "rgba(221, 221, 221, 0.21)",
            cursor: "pointer"
        }
    });

    const center = css({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto"
    });

    const scrollbar = css({
        width: "100%",
        height: "calc(100vh - 94px)",

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
        <div>
            {back && !type ? (
                <Row type={"flex"} gutter={8} key={1}>
                    <Col
                        span={8}
                        {...center}
                        onClick={() => onChoose("video", "视频组件")}
                    >
                        <div {...uiHover}>
                            <div style={{marginLeft: "13px"}}>
                                <i
                                    className="iconfont icon-shipin"
                                    style={{fontSize: "26px", flex: "1"}}
                                />
                                <div>视频</div>
                            </div>
                        </div>
                    </Col>
                    <Col
                        span={8}
                        {...center}
                        onClick={() => onChoose("button", "按钮组件")}
                    >
                        <div {...uiHover}>
                            <div style={{marginLeft: "13px"}}>
                                <i
                                    className=" iconfont icon-anniu"
                                    style={{fontSize: "26px", flex: "1"}}
                                />
                                <div style={{flex: "1"}}>按钮</div>
                            </div>
                        </div>
                    </Col>
                    <Col
                        span={8}
                        {...center}
                        onClick={() => onChoose("form", "表单组件")}
                    >
                        <div {...uiHover}>
                            <div style={{marginLeft: "13px"}}>
                                <i
                                    className=" iconfont icon-biaodan"
                                    style={{fontSize: "26px", flex: "1"}}
                                />
                                <div style={{flex: "1"}}>表单</div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6}/>
                </Row>
            ) : (
                <Tabs tabBarExtraContent={<Back/>}>
                    <Tabs.TabPane tab={name} key="1">
                        <div {...scrollbar}>
                            {type === "button" ? <ButtonList/> : ""}
                            {type === "video" ? <VideoList/> : ""}
                            {type === "form" ? <FormList/> : ""}
                        </div>
                    </Tabs.TabPane>
                </Tabs>
            )}
        </div>
    );
});

export default InterActive;
