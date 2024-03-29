import * as React from "react";
import { mediaPC, mediaMobile } from "./style";

interface Props {
  html: any;
}

const TextUi_1 = React.memo((props: Props) => {
  const html =
    `string` === typeof props.html ? props.html : props.html.toHTML();
  /**
   * 手机端转换
   */
  const replaceByMobile = `<p style="font-size: 14px">${html}</p>`
    .replace(new RegExp("(\\d+)px", "g"), "calc($1/320*100vw)")
    .replace(
      new RegExp("<p></p>", "g"),
      "<br style='line-height:calc(14/320*100vw)'/>"
    )
    .replace(new RegExp("<p>", "g"), "<p style='font-size:calc(14/320*100vw)'>")
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
