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

class Text2 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text1c1}>
        <section className={style.text1c2}>
          <section>
            <section
              className={style.text1c3}
              style={{ background: `${base.color}` }}
            />
            <section
              className={style.text1c4}
              style={{ background: `${base.color}` }}
            />
          </section>
          <section className={style.text1c5}>
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
          <section>
            <section
              className={style.text1c4}
              style={{ background: `${base.color}` }}
            />
            <section
              className={style.text1c3}
              style={{ background: `${base.color}` }}
            />
          </section>
        </section>
      </section>
    );
  }
}

export default Text2;
