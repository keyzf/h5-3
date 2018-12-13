import * as React from "react";
import style from "./text-ui";

interface Props {
  base: {
    html: string;
    index: string;
    color: string;
    wordArt: string;
  };
}

class Text14 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={style.text12c1}
        style={{
          backgroundColor: `${base.color}`
        }}
      >
        <section>
       <span
           className={style.mobile}
           style={{ whiteSpace: "pre-wrap", fontSize: "calc(14/320*100vw)" }}
           dangerouslySetInnerHTML={{
             __html: `${base.html}`.replace(
                 new RegExp("(\\d+)px", "g"),
                 "calc($1/320*100vw)"
             )
           }}
       />
          <span
            className={style.pc}
            style={{ whiteSpace: "pre-wrap" }}
            dangerouslySetInnerHTML={{
              __html: base.html
            }}
          />
        </section>
      </section>
    );
  }
}

export default Text14;
