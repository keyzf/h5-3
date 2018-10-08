import * as React from "react";

interface Props {
  html?: string;
}

class VTextUi extends React.Component<Props, any> {
  render() {
    /**
     * 手机端转换
     */
    const replaceByMobile = `<div style=" writing-mode:vertical-rl"><p style="font-size: 14px">${
      this.props.html
      }</p></div>`
      .replace(new RegExp("(\\d+)px", "g"), "calc($1/320*100vw)")
      .replace(new RegExp("<p></p>", "g"), "<br/>");
    /**
     * 电脑端转换
     */
    const replaceByPc =  `<div style=" writing-mode:vertical-rl">${
      this.props.html
      }</div>`.replace(new RegExp("<p></p>", "g"), "<br/>");
    return (
      <React.Fragment>
        <div className={"mobile"}>
          <div
            style={{ whiteSpace: "pre-wrap" }}
            dangerouslySetInnerHTML={{
              __html: replaceByMobile
            }}
          />
        </div>
        <div className={"pc"}>
          <div
            style={{ whiteSpace: "pre-wrap" }}
            dangerouslySetInnerHTML={{
              __html:replaceByPc
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default VTextUi;
