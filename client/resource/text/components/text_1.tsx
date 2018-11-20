import * as React from "react";
import { mediaPC, mediaMobile } from "./style";

interface Props {
  html: string | object;
}

const TextUi_1 = React.memo((props: Props) => {
  const html = `string` === typeof this.props.html ? this.props.html : this.props.html.toHTML();
  /**
   * 手机端转换
   */
  const replaceByMobile = `<p style="font-size: 14px">${
    html
    }</p>`
    .replace(new RegExp("(\\d+)px", "g"), "calc($1/320*100vw)")
    .replace(new RegExp("<p></p>", "g"), "<br/>");
  /**
   * 电脑端转换
   */
  const replaceByPc = `${html}`.replace(new RegExp("<p></p>", "g"), "<br/>");
  return (
    <React.Fragment>
      <div className={mediaMobile}>
        <div
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{
            __html: replaceByMobile
          }}
        />
      </div>
      <div className={mediaPC}>
        <div
          style={{ whiteSpace: "pre-wrap" }}
          dangerouslySetInnerHTML={{
            __html: replaceByPc
          }}
        />
      </div>
    </React.Fragment>
  );
});

export default TextUi_1;
