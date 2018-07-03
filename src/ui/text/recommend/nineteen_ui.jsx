import React, { PureComponent } from "react";

/**
 * 接收数据
 * 1. html 信息
 */
class NineTeenTextUi extends PureComponent {
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
            marginTop: "-30px",
            zIndex: "-1",
            position: "relative",


          }}
        >
          <img
            width={30}
            height={30}
            src={"http://src.e7wei.com/0.9261524853060168.png"}
            alt={"img"}
          />
        </div>
      </div>
    );
  }
}

const nineteen_html_text = "<h2>大会介绍</h2>";

export { NineTeenTextUi, nineteen_html_text };
