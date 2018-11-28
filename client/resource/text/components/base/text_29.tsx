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

class Text29 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text27c1}>
        <section className={style.text27c2}>
          <section
            className={style.text27c3}
            style={{
              borderColor: ` ${base.color}`
            }}
          />
          <section
            className={style.text27c4}
            style={{
              borderColor: `${base.color}`
            }}
          />
        </section>
        <section className={style.text27c5}>
          <div className={style.text27c6}>
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
        <section className={style.text27c7}>
          <section
            className={style.text27c8}
            style={{
              borderColor: ` ${base.color}`
            }}
          />
        </section>
      </section>
    );
  }
}

export default Text29;
