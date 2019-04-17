import * as React from "react";
import { useCallback, useState } from "react";
import { useMappedState, useDispatch } from "redux-react-hook";
import { Col, Icon, Modal, Row } from "antd";
import { css, keyframes } from "emotion";
import axios from "axios";
import wx from "weixin-js-sdk";
import BackgroundUI from "../../resource/background/BackgroundUI";
import RenderStyle from "../../components/common/renderStyle";
import RenderUi from "../../components/common/renderUi";
import Store from "../../typing/store";
import ReleaseEdit from "./editor.page";
import styled from "react-emotion";
import copy from "copy-to-clipboard";

let play = 0; //控制音乐播放次数
let showMap; // 地图微信函数
let params = new URLSearchParams(); // 请求

export default React.memo(() => {
  const [state, setState] = useState(false);
  const [visible, setVisible] = useState(false);
  const { ui, sid, title, pv, cover, desc, music } = useMappedState(
    useCallback(
      (state: Store) => ({
        ui: state.ui,
        sid: state.global.sid,
        title: state.share.title,
        cover: state.share.cover,
        desc: state.share.desc,
        pv: state.global.pv,
        music: state.music
      }),
      []
    )
  );

  params.append("url", `${window.location.href}`);
  axios
    .post(`${window.location.origin}/view/getSignPackage`, params)
    .then(response => {
      wx.config({
        debug: false,
        appId: response.data.appId,
        timestamp: response.data.timestamp,
        nonceStr: response.data.nonceStr,
        signature: response.data.signature,
        jsApiList: [
          "updateAppMessageShareData",
          "updateTimelineShareData",
          "onMenuShareAppMessage",
          "onMenuShareTimeline",
          "hideMenuItems",
          "openLocation"
        ]
      });
      wx.ready(() => {
        showMap = (latitude, longitude) => {
          wx.openLocation({
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            name: "活动地址", // 位置名
            address: "",
            scale: 18,
            infoUrl: ""
          });
        };
        if (play === 0) {
          // @ts-ignore
          setTimeout(document.getElementById("h5_audio").play(), 800);
          play = 1;
        }
        if (response.data.limitPv <= pv) {
          wx.hideMenuItems({
            menuList: ["menuItem:share:timeline"]
          });
        }

        const shareMsg = {
          title: title, // 分享标题
          desc: desc, // 分享描述
          link: `${window.location.href}`, //
          imgUrl: cover, // 分享图标
          success: () => {
            let params = new URLSearchParams();
            params.append("sid", `${sid}`);
            axios.post(`${window.location.origin}/view/addShare`, params);
          }
        };
        wx.updateAppMessageShareData(shareMsg);
        wx.updateTimelineShareData(shareMsg);
        wx.onMenuShareAppMessage(shareMsg);
        wx.onMenuShareTimeline(shareMsg);
      });
    });

  const handleCancel = e => {
    setVisible(false);
  };

  const handleOk = e => {
    setVisible(false);
  };

  const copys = link => {
    copy(link);
    setVisible(true);
  };

  const maplink = link => {
    // @ts-ignore
    if (typeof WeixinJSBridge !== "undefined") {
      showMap(link.lat, link.lng);
    } else {
      window.location.href = `https://apis.map.qq.com/tools/routeplan/eword=活动地址&epointx=${
        link.lat
      }&epointy=${
        link.lng
      }?referer=myapp&key=MNIBZ-MEKRP-A6QDT-LMYIM-DTG3Q-ZABB5`;
    }
  };

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

  const phoneH5 = css`
    @media (min-width: 0) and(max-width: 575px) {
      display: none;
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
      display: none;
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
      background-color: rgb(240, 242, 245);
      width: 100vm;
      height: 100vh;
      overflow: auto;
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
    }

    @media (min-width: 1200px) {
      background-color: rgb(240, 242, 245);
      width: 100vm;
      height: 100vh;
      overflow: auto;
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
    }
  `;
  const center = css`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const mediaPC = css`
    @media (min-width: 0) and (max-width: 575px) {
      display: none;
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
      display: none;
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
      display: none;
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
    }

    @media (min-width: 1200px) {
    }
  `;
  const mediaMobile = css`
    @media (min-width: 0) and (max-width: 575px) {
    }

    @media (min-width: 576px) and (max-width: 767.98px) {
    }

    @media (min-width: 768px) and (max-width: 991.98px) {
    }

    @media (min-width: 992px) and (max-width: 1199.98px) {
      display: none;
    }

    @media (min-width: 1200px) {
      display: none;
    }
  `;

  const mobileStyle = css`
    width: 25px;
    height: 25px;
  `;
  const mobileFont = css`
    font-size: 18px;
  `;
  // 设置动画
  const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

  // 设置组件
  const RotateAtom = styled("div")`
    animation: ${rotate360} 2s linear infinite;
  `;
  return (
    <React.Fragment>
      <audio id={"h5_audio"} loop={true} src={music.url} autoPlay={true} />
      <div className={mediaMobile}>
        <BackgroundUI>
          {music.url ? (
            <div
              style={{
                position: "absolute",
                zIndex: 999,
                top: "28px",
                left: "8px"
              }}
            >
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
            </div>
          ) : (
            ""
          )}

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
                href={`${window.location.origin}/View/reports/vid/${sid}.html`}
                target="view_window"
                style={{ color: "white", fontSize: "12px" }}
              >
                投诉
              </a>
              &nbsp;
            </div>
          </div>
          {ui.map((data: any, index: number) => {
            return (
              <RenderStyle {...data.position} key={index}>
                {data.common.type === "text" ||
                (data.common.type === "picture" && data.common.id !== 1) ||
                data.common.type === "button" ? (
                  <React.Fragment>
                    {data.base.link.type === "phone" ? (
                      <a href={`tel:${data.base.link.url}`}>
                        <div
                          style={{ pointerEvents: "none", userSelect: "none" }}
                        >
                          <RenderUi data={data} />
                        </div>
                      </a>
                    ) : (
                      ""
                    )}
                    {data.base.link.type === "web" ? (
                      <a href={`${data.base.link.url}`}>
                        <div
                          style={{ pointerEvents: "none", userSelect: "none" }}
                        >
                          <RenderUi data={data} />
                        </div>
                      </a>
                    ) : (
                      ""
                    )}
                    {data.base.link.type === "order" ? (
                      <div onClick={() => copys(data.base.link.url)}>
                        <div
                          style={{ pointerEvents: "none", userSelect: "none" }}
                        >
                          <RenderUi data={data} />
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                    {data.base.link.type === "map" ? (
                      <a
                        onClick={() => maplink(data.base.link.url)}
                        style={{ color: "black" }}
                      >
                        <div
                          style={{ pointerEvents: "none", userSelect: "none" }}
                        >
                          <RenderUi data={data} />
                        </div>
                      </a>
                    ) : (
                      ""
                    )}
                    {data.base.link.type === "choose" ? (
                      <RenderUi data={data} />
                    ) : (
                      ""
                    )}

                    <Modal
                      title={null}
                      width={380}
                      bodyStyle={{
                        padding: 0
                      }}
                      closable={false}
                      footer={null}
                      visible={visible}
                      onOk={handleOk}
                      onCancel={handleCancel}
                    >
                      <div style={{ padding: "10px" }}>
                        <div
                          style={{
                            marginTop: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "auto",
                            width: "100%"
                          }}
                        >
                          <Icon
                            style={{ color: "#51d4b2", fontSize: "35px" }}
                            type="check-circle"
                          />
                        </div>
                      </div>
                      <div
                        style={{
                          marginBottom: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "auto",
                          width: "100%"
                        }}
                      >
                        <div
                          style={{
                            fontSize: "18px",
                            color: "rgb(135,145,146)"
                          }}
                        >
                          淘口令复制成功
                        </div>
                      </div>
                      <div
                        style={{
                          marginBottom: "20px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "auto",
                          width: "100%"
                        }}
                      >
                        <div
                          style={{
                            fontSize: "14px",
                            color: "rgb(135,145,146)",
                            marginTop: "5px"
                          }}
                        >
                          打开手机淘宝购买
                        </div>
                      </div>

                      <div
                        style={{
                          background: "rgb(35,199,255)",
                          color: "white"
                        }}
                      >
                        <div
                          onClick={handleOk}
                          style={{
                            padding: "10px",
                            cursor: "pointer",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            marginTop: "5px",
                            width: "100%"
                          }}
                        >
                          <div style={{ fontSize: "15px" }}>关闭</div>
                        </div>
                      </div>
                    </Modal>
                  </React.Fragment>
                ) : (
                  <RenderUi data={data} formStyle={data.position} />
                )}
              </RenderStyle>
            );
          })}
          <div
            style={{
              position: "absolute",
              zIndex: 999,
              bottom: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              lineHeight: "calc(20/320*100vw)",
              width: "100%",
              margin: "auto",
              alignContent: "center"
            }}
          >
            <div
              style={{
                padding: "3px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "50px",
                background: "rgba(0,0,0,0.4)",
                marginBottom: "5px"
              }}
            >
              <a
                href={"http://m.e7wei.com"}
                style={{ color: "white", fontSize: "calc(12/320*100vw)" }}
              >
                &nbsp;&nbsp;&nbsp; 技术支持 >> 易企微&nbsp;&nbsp;&nbsp;
              </a>
            </div>
          </div>
        </BackgroundUI>
      </div>
      <div className={mediaPC}>
        <div className={phoneH5}>
          <div className={center}>
            <Row gutter={32} style={{ marginTop: "30px" }}>
              <Col span={15} style={{ width: "360px", marginRight: "30px" }}>
                <div
                  className={center}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "360px",
                    fontSize: "16px",
                    color: "#616161",
                    height: "55px",
                    lineHeight: "54px",
                    textAlign: "center",
                    background: "white"
                  }}
                >
                  <div
                    style={{
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      width: "150px"
                    }}
                  >
                    {title ? title : "易企微 H5 页面设计"}
                  </div>
                </div>
                <div
                  style={{
                    width: "360px",
                    background: "white",
                    padding: " 0 20px 20px 20px"
                  }}
                >
                  <BackgroundUI>
                    {music.url ? (
                      <div
                        style={{
                          position: "absolute",
                          zIndex: 999,
                          top: "28px",
                          left: "8px"
                        }}
                      >
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
                      </div>
                    ) : (
                      ""
                    )}

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
                    {ui.map((data: any, index: number) => {
                      return (
                        <RenderStyle {...data.position} key={index}>
                          {data.common.type === "text" ||
                          (data.common.type === "picture" &&
                            data.common.id !== 1) ||
                          data.common.type === "button" ? (
                            <React.Fragment>
                              {data.base.link.type === "phone" ? (
                                <a href={`tel:${data.base.link.url}`}>
                                  <div
                                    style={{
                                      pointerEvents: "none",
                                      userSelect: "none"
                                    }}
                                  >
                                    <RenderUi data={data} />
                                  </div>
                                </a>
                              ) : (
                                ""
                              )}
                              {data.base.link.type === "web" ? (
                                <a href={`${data.base.link.url}`}>
                                  <div
                                    style={{
                                      pointerEvents: "none",
                                      userSelect: "none"
                                    }}
                                  >
                                    <RenderUi data={data} />
                                  </div>
                                </a>
                              ) : (
                                ""
                              )}
                              {data.base.link.type === "order" ? (
                                <div onClick={() => copys(data.base.link.url)}>
                                  <div
                                    style={{
                                      pointerEvents: "none",
                                      userSelect: "none"
                                    }}
                                  >
                                    <RenderUi data={data} />
                                  </div>
                                </div>
                              ) : (
                                ""
                              )}
                              {data.base.link.type === "map" ? (
                                <a
                                  onClick={() => maplink(data.base.link.url)}
                                  style={{ color: "black" }}
                                >
                                  <div
                                    style={{
                                      pointerEvents: "none",
                                      userSelect: "none"
                                    }}
                                  >
                                    <RenderUi data={data} />
                                  </div>
                                </a>
                              ) : (
                                ""
                              )}
                              {data.base.link.type === "choose" ? (
                                <RenderUi data={data} />
                              ) : (
                                ""
                              )}

                              <Modal
                                title={null}
                                width={380}
                                bodyStyle={{
                                  padding: 0
                                }}
                                closable={false}
                                footer={null}
                                visible={visible}
                                onOk={handleOk}
                                onCancel={handleCancel}
                              >
                                <div style={{ padding: "10px" }}>
                                  <div
                                    style={{
                                      marginTop: "20px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      margin: "auto",
                                      width: "100%"
                                    }}
                                  >
                                    <Icon
                                      style={{
                                        color: "#51d4b2",
                                        fontSize: "35px"
                                      }}
                                      type="check-circle"
                                    />
                                  </div>
                                </div>
                                <div
                                  style={{
                                    marginBottom: "20px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "auto",
                                    width: "100%"
                                  }}
                                >
                                  <div
                                    style={{
                                      fontSize: "18px",
                                      color: "rgb(135,145,146)"
                                    }}
                                  >
                                    淘口令复制成功
                                  </div>
                                </div>
                                <div
                                  style={{
                                    marginBottom: "20px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    margin: "auto",
                                    width: "100%"
                                  }}
                                >
                                  <div
                                    style={{
                                      fontSize: "14px",
                                      color: "rgb(135,145,146)",
                                      marginTop: "5px"
                                    }}
                                  >
                                    打开手机淘宝购买
                                  </div>
                                </div>

                                <div
                                  style={{
                                    background: "rgb(35,199,255)",
                                    color: "white"
                                  }}
                                >
                                  <div
                                    onClick={handleOk}
                                    style={{
                                      padding: "10px",
                                      cursor: "pointer",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      marginTop: "5px",
                                      width: "100%"
                                    }}
                                  >
                                    <div style={{ fontSize: "15px" }}>关闭</div>
                                  </div>
                                </div>
                              </Modal>
                            </React.Fragment>
                          ) : (
                            <RenderUi data={data} />
                          )}
                        </RenderStyle>
                      );
                    })}
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
                          &nbsp;&nbsp;&nbsp; 技术支持 >>
                          易企微&nbsp;&nbsp;&nbsp;
                        </a>
                      </div>
                    </div>
                  </BackgroundUI>
                </div>
              </Col>
              <Col span={9} className={center}>
                <ReleaseEdit />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
});
