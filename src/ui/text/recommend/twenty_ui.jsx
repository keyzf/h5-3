import React, { PureComponent } from "react";
import { Row, Col } from "antd";

/**
 * 接收数据
 * 1. html 信息
 */
class TwentyTextUi extends PureComponent {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <div
            dangerouslySetInnerHTML={{
              __html: this.props.html
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-42px",
            zIndex: "-1",
            position: "relative"
          }}
        >
          <img
            width={300}
            height={55}
            src={"http://src.e7wei.com/0.7495235516899124.png"}
            alt={"img"}
          />
        </div>

      </div>
    );
  }
}

const twenty_html_text = "<h2 style=\"color: white;\">多陪陪孩子</h2>";

export { TwentyTextUi, twenty_html_text };
