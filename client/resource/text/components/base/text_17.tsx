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

class Text17 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text15c1}>
        <section className={style.text15c2}>
          <section
            className={style.text15c3}
            style={{
              borderLeftColor: `${base.color}`,
              borderRightColor: `${base.color}`
            }}
          />
          <section
            className={style.text15c4}
            style={{
              borderLeftColor: `${base.color}`,
              borderRightColor: `${base.color}`
            }}
          />
          <section
            className={style.text15c5}
            style={{
              borderLeftColor: `${base.color}`,
              borderRightColor: `${base.color}`
            }}
          />
          <section className={style.text15c6}>
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
    );
  }
}

export default Text17;
