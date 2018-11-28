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

class Text24 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text22c1}>
        <section
          className={style.text22c2}
          style={{
            backgroundColor: `${base.color}`
          }}
        >
          <section className={style.text22c3}>
            <section className={style.text22c4} />
            <section className={style.text22c5} />
            <section className={style.text22c6}>
              <section className={style.text22c7}>
                <span
                  className={style.mobile}
                  style={{ whiteSpace: "pre-wrap" }}
                  dangerouslySetInnerHTML={{
                    __html: `<p style="font-size: 14px">${
                      base.html
                    }</p>`.replace(
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
            <section className={style.text22c8} />
            <section className={style.text22c9} />
          </section>
        </section>
      </section>
    );
  }
}

export default Text24;
