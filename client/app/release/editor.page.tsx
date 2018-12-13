import * as React from "react";
import { Row, Button, message } from "antd";
import QRCode from "qrcode.react";
import copy from "copy-to-clipboard";
import Store from "../../typing/store";
import { useCallback} from "react";
import { useMappedState, useDispatch } from "redux-react-hook";

const ReleaseEdit = React.memo(() => {
  // 发送log初始化及定时更新请求
    const { url, sid, self } = useMappedState(
        useCallback(
            (state: Store) => ({
                url: state.global.url,
                sid: state.global.sid,
                self: state.global.self
            }),
            []
        )
    );



  const outMessage = () => {
    copy(url);
    message.success("复制成功！");
  };

  const toEditor = () => {
    window.location.href = `${window.location.origin}/v/${sid}`;
  };

  return (
    <Row>
      <div
        style={{
          backgroundColor: "#fff",
          padding: "0 30px 30px",
          marginBottom: "8px"
        }}
      >
        <div
          style={{
            lineHeight: "52px",
            height: "55px",
            textAlign: "center",
            fontSize: "16px",
            color: "#616161"
          }}
        >
          微信扫码 预览效果
        </div>
        <div
          className={"flex_center"}
          style={{
            padding: "10px",
            border: "1px solid #e2e2e2"
          }}
        >
          <QRCode value={url} />
        </div>
      </div>
      {self ? (
        <div style={{ backgroundColor: "#f4f4f4" }}>
          <div
            style={{
              height: "43px",
              lineHeight: "43px",
              backgroundColor: "#f5f5f5",
              color: " #a0a0a0",
              textAlign: "center",
              padding: "0 8px"
            }}
          >
            发布方式
          </div>
          <div
            style={{
              padding: "5px",
              borderBottom: "1px solid #e7e7e7",
              background: "white"
            }}
          >
            <p style={{ color: "rgb(160,160,160)", marginBottom: "5px" }}>
              1.微信扫描二维码分享群或好友；
            </p>
            <p style={{ color: "rgb(160,160,160)", marginBottom: "5px" }}>
              2.参照教程发布到公众号，
              <a
                target={"view_window"}
                href={"http://www.e7wei.com/help/article/id/436.html"}
              >
                进入教程
              </a>
            </p>
            <p style={{ color: "rgb(160,160,160)", marginBottom: "5px" }}>
              3.右击保存二维码，打印用于线下活动。
            </p>
          </div>
          <div
            style={{
              padding: "5px",
              borderBottom: "1px solid #e7e7e7",
              background: "white"
            }}
          >
            <Button
              onClick={toEditor}
              type="primary"
              style={{ width: "100%", marginBottom: "10px" }}
            >
              继续编辑
            </Button>
            <br />
            <Button
              type="dashed"
              style={{ width: "100%", marginBottom: "10px" }}
              onClick={outMessage}
            >
              复制链接
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </Row>
  );
});

export default ReleaseEdit;
