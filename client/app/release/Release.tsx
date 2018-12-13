import * as React from "react";
import { Col, Row } from "antd";
import { css } from "emotion";
import axios from "axios";
import wx from "weixin-js-sdk";
import { useMappedState, useDispatch } from "redux-react-hook";
import { useCallback, useEffect } from "react";
import BackgroundUI from "../../resource/background/BackgroundUI";
import MusicUi from "../../resource/music/music_ui";
import RenderStyle from "../../components/common/renderStyle";
import LinkMapOphoneOweb from "../../components/common/link";
import RenderUi from "../../components/common/renderUi";
import Store from "../../typing/store";
import ReleaseEdit from "./editor.page";
import entrance_api from "../../api/entrance";

interface Props {
  id: number;
  web: string;
}

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

export default React.memo((props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GLOBAL", payload: { sid: props.id } });
    entrance_api(props.id, props.web).then(resp => {
      dispatch({ type: "INIT", payload: resp });
    });
  }, []);

  return <Init />;
});

const Init = React.memo(() => {
  const { ui, sid, title, pv, cover, desc } = useMappedState(
    useCallback(
      (state: Store) => ({
        ui: state.ui,
        sid: state.global.sid,
        title: state.share.title,
        cover: state.share.cover,
        desc: state.share.desc,
        pv: state.global.pv
      }),
      []
    )
  );

  let params = new URLSearchParams();
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
          "onMenuShareTimeline",
          "onMenuShareAppMessage",
          "onMenuShareQQ",
          "onMenuShareWeibo",
          "hideMenuItems"
        ]
      });
      wx.ready(() => {
        if (response.data.limitPv <= pv) {
          wx.hideMenuItems({
            menuList: ["menuItem:share:timeline"]
          });
        }
        wx.onMenuShareTimeline({
          title: title, // 分享标题
          desc: desc, // 分享描述
          link: `${window.location.href}`, //
          imgUrl: cover, // 分享图标
          success: () => {
            let params = new URLSearchParams();
            params.append("sid", this.props.sid);
            axios.post(`${window.location.origin}/view/addShare`, params);
          }
        });
        wx.onMenuShareAppMessage({
          title: title, // 分享标题
          desc: desc, // 分享描述
          link: `${window.location.href}`, //
          imgUrl: cover, // 分享图标
          success: () => {
            let params = new URLSearchParams();
            params.append("sid", this.props.sid);
            axios.post(`${window.location.origin}/view/addShare`, params);
          }
        });
        wx.onMenuShareQQ({
          title: title, // 分享标题
          desc: desc, // 分享描述
          link: `${window.location.href}`, //
          imgUrl: cover, // 分享图标
          success: () => {
            let params = new URLSearchParams();
            params.append("sid", this.props.sid);
            axios.post(`${window.location.origin}/view/addShare`, params);
          }
        });
        wx.onMenuShareWeibo({
          title: title, // 分享标题
          desc: desc, // 分享描述
          link: `${window.location.href}`, //
          imgUrl: cover, // 分享图标
          success: () => {
            let params = new URLSearchParams();
            params.append("sid", this.props.sid);
            axios.post(`${window.location.origin}/view/addShare`, params);
          }
        });
        setTimeout(() => {
          try {
            // @ts-ignore
            document.getElementById("h5_audio").play();
          } catch (error) {}
        }, 800);
      });
    });

  return (
    <div>
      <div className={mediaMobile}>
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
              lineHeight: "calc(18/320*100vw)",
              width: "calc(30/320*100vw)",
              top: "30px",
              right: "0"
            }}
          >
            <div
              style={{
                padding: "3px",
                display: "flex",
                justifyContent: "center",
                borderRadius: "35%",
                alignItems: "center",
                background: "rgba(0,0,0,0.4)",
                color: "white",
                marginRight: "5px"
              }}
            >
              &nbsp;
              <a
                href={`${window.location.origin}/View/reports/vid/${sid}.html`}
                target="view_window"
                style={{ color: "white", fontSize: "calc(10/320*100vw)" }}
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
                  <LinkMapOphoneOweb
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
              <Col span={15} style={{ width: "320px", marginRight: "30px" }}>
                <div
                  className={center}
                  style={{
                    width: "320px",
                    fontSize: "16px",
                    color: "#616161",
                    height: "55px",
                    lineHeight: "54px",
                    textAlign: "center",
                    background: "white"
                  }}
                >
                  {title ? title : "易企微 H5 页面设计"}
                </div>
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
                  {ui.map((data: any, index: number) => {
                    return (
                      <RenderStyle {...data.position} key={index}>
                        {data.common.type === "text" ||
                        (data.common.type === "picture" &&
                          data.common.id !== 1) ||
                        data.common.type === "button" ? (
                          <LinkMapOphoneOweb
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
              </Col>
              <Col span={9} className={center}>
                <ReleaseEdit />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
});
