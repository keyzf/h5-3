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

class Text19 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text17c1}>
        <section className={style.text17c2}>
          <section
            className={style.text17c3}
            style={{
              borderColor: `${base.color}`
            }}
          >
            <section
              className={style.text17c4}
              style={{
                backgroundColor: `${base.color}`
              }}
            >
              <span
                className={style.mobile}
                style={{ whiteSpace: "pre-wrap" }}
                dangerouslySetInnerHTML={{
                  __html: `<p style="font-size: 14px">${base.html}</p>`.replace(
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
        </section>
      </section>
    );
  }
}

export default Text19;
