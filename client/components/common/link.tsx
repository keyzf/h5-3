import React from "react";
import copy from "copy-to-clipboard";

import { Icon, Modal } from "antd";
import { useState } from "react";

const LinkMapOphoneOweb = React.memo((props: any) => {
  const [visible, setVisible] = useState(false);

  const handleOk = e => {
    setVisible(false);
  };

  const handleCancel = e => {
    setVisible(false);
  };

  const copys = () => {
    copy(props.link);
    setVisible(true);
  };

  const maplink = () => {
    const ua = navigator.userAgent.toLowerCase();
    // @ts-ignore
    if (ua.match(/MicroMessenger/i) === "micromessenger") {
      props.func(props.link.lat, props.link.lng);
    } else {
      window.location.href = `https://apis.map.qq.com/tools/routeplan/eword=活动地址&epointx=${
        props.link.lat
      }&epointy=${
        props.link.lng
      }?referer=myapp&key=MNIBZ-MEKRP-A6QDT-LMYIM-DTG3Q-ZABB5`;
    }
  };

  return (
    <React.Fragment>
      {props.type === "phone" ? (
        <a href={`tel:${props.link}`}>
          <div style={{ pointerEvents: "none", userSelect: "none" }}>
            {props.children}
          </div>
        </a>
      ) : (
        ""
      )}
      {props.type === "web" ? (
        <a href={`${props.link}`}>
          <div style={{ pointerEvents: "none", userSelect: "none" }}>
            {props.children}
          </div>
        </a>
      ) : (
        ""
      )}
      {props.type === "order" ? (
        <div onClick={copys}>
          <div style={{ pointerEvents: "none", userSelect: "none" }}>
            {props.children}
          </div>
        </div>
      ) : (
        ""
      )}
      {props.type === "map" ? (
        <a onClick={maplink} style={{ color: "black" }}>
          <div style={{ pointerEvents: "none", userSelect: "none" }}>
            {props.children}
          </div>
        </a>
      ) : (
        ""
      )}
      {props.type === "choose" ? props.children : ""}

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
          <div style={{ fontSize: "18px", color: "rgb(135,145,146)" }}>
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
  );
});

export default LinkMapOphoneOweb;
