import React, { useState } from "react";
import { Icon } from "antd";

const FormSubmitMode = React.memo((props: any) => {
  return (
    <div
      className={`${props.mode ? "modal" : ""}`}
      style={{ display: `${props.mode ? "flex" : "none"}` }}
    >
      <div className="modal-content">
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
            谢谢您的参与!
          </div>
        </div>
        <div
          style={{
            background: "rgb(35,199,255)",
            color: "white",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px"
          }}
        >
          <div
            onClick={props.onclose}
            style={{
              padding: "10px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              width: "100%"
            }}
          >
            <div style={{ fontSize: "15px" }}>关闭</div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default FormSubmitMode;
