import * as React from "react";
import copy from "copy-to-clipboard";
import ReactQMap from "react-qmap";
import { message, Modal } from "antd";
import { useState } from "react";

const LinkMapOphoneOweb = React.memo((props: any) => {
  const copys = () => {
    copy(props.link);
    message.success("淘口令复制成功，请打开淘宝APP/淘宝网使用");
  };

  /**
   * @desc 针对地图操作
   * @param map
   * @param wMap
   */
  const getMap = (map: any, wMap: any) => {
    // 点选地图坐标
    const marker = new wMap.Marker({
      position: map.getCenter(),
      map: map
    });
  };

  const ok = (maps: any) => {
    Modal.info({
      title: "活动地址",
      okText: "确认",
      content: (
        <ReactQMap
          center={{ latitude: maps.lat, longitude: maps.lng }}
          getMap={(map: any, wMap: any) => getMap(map, wMap)}
          initialOptions={{ zoomControl: true, mapTypeControl: true }}
          apiKey="MNIBZ-MEKRP-A6QDT-LMYIM-DTG3Q-ZABB5"
          style={{ height: 300 }}
        />
      ),
      onOk() {}
    });
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
        <div onClick={() => ok(props.link)}>
          <div style={{ pointerEvents: "none", userSelect: "none" }}>
            {props.children}
          </div>
        </div>
      ) : (
        ""
      )}
      {props.type === "choose" ? props.children : ""}
    </React.Fragment>
  );
});

export default LinkMapOphoneOweb;
