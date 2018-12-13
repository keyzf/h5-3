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

class Text23 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={style.text21c1}
        style={{
          border: ` 3px solid ${base.color}`
        }}
      >
        <section className={style.text21c2}>
          <section
            className={style.text21c3}
            style={{
              border: ` 3px solid ${base.color}`
            }}
          />
          <section
            className={style.text21c4}
            style={{
              border: ` 3px solid ${base.color}`
            }}
          />
        </section>
        <section className={style.text21c5} />
        <section className={style.text21c6}>
          <div className={style.text21c7}>
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
        <section className={style.text21c8}>
          <section
            className={style.text21c9}
            style={{
              border: ` 3px solid ${base.color}`
            }}
          />
          <section
            className={style.text21c10}
            style={{
              border: ` 3px solid ${base.color}`
            }}
          />
        </section>
      </section>
    );
  }
}

export default Text23;
