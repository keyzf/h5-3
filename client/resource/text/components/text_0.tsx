import * as React from "react";
import { mediaPC, mediaMobile } from "./style";

interface Props {
  html: any;
}

const TextUi_0 = React.memo((props: Props) => {
  const html = `string` === typeof props.html ? props.html : props.html.toHTML();
  /**
   * 手机端转换
   */
  const replaceByMobile = `<div style=" writing-mode:vertical-rl"><p style="font-size: 14px">${html}</p></div>`
    .replace(new RegExp("(\\d+)px", "g"), "calc($1/320*100vw)")
    .replace(new RegExp("<p></p>", "g"), "<br/>");
  /**
   * 电脑端转换
   */
  const replaceByPc = `<div style=" writing-mode:vertical-rl">${html}</div>`.replace(new RegExp("<p></p>", "g"), "<br/>");
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

export default TextUi_0;
