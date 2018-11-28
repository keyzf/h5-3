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

class Text30 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <div>
        <section className={style.text28c1}>
          <section
            className={style.text28c2}
            style={{
              border: ` 1px solid ${base.color}`
            }}
          />
          <section
            className={style.text28c3}
            style={{
              border: ` 1px solid ${base.color}`
            }}
          />
        </section>
        <section
          className={style.text28c4}
          style={{
            border: ` 1px solid ${base.color}`
          }}
        >
          <div className={style.text28c5}>
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
          </div>
        </section>
        <section className={style.text28c6}>
          <section
            className={style.text28c7}
            style={{
              border: ` 1px solid ${base.color}`
            }}
          />
          <section
            className={style.text28c8}
            style={{
              border: ` 1px solid ${base.color}`
            }}
          />
        </section>
      </div>
    );
  }
}

export default Text30;
