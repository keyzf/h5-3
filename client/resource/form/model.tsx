import React from "react";
import { Icon, Modal } from "antd";

const FormSubmitMode = React.memo((props: any) => {
  return (
    <Modal
      title={null}
      width={380}
      bodyStyle={{
        padding: 0
      }}
      closable={false}
      footer={null}
      visible={props.mode}
      onOk={props.onclose}
      onCancel={props.onclose}
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
          谢谢您的参与!
        </div>
      </div>
      <div
        style={{
          background: "rgb(35,199,255)",
          color: "white"
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
    </Modal>
  );
});

export default FormSubmitMode;
