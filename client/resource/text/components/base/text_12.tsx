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

class Text12 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={style.text10c1}
        style={{
          backgroundColor: ` ${base.color}`
        }}
      >
        <section className={style.text10c2}>
          <div className={style.text10c3}>
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
          </div>
        </section>
      </section>
    );
  }
}

export default Text12;
