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

class Text13 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text11c1}>
        <section className={style.text11c2}>
          <section
            className={style.text11c3}
            style={{
              borderColor: ` ${base.color }`
            }}
          >
            <section className={style.text11c4}>
              <section
                className={style.text11c5}
                style={{
                  backgroundColor: ` ${base.color }`
                }}
              />
              <section
                className={style.text11c6}
                style={{
                  backgroundColor: ` ${base.color }`
                }}
              />
              <section className={style.text11c7}>
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
            <section className={style.text11c8}>
              <section
                className={style.text11c9}
                style={{
                  backgroundColor: ` ${base.color }`
                }}
              />
              <section
                className={style.text11c10}
                style={{
                  backgroundColor: ` ${base.color }`
                }}
              />
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Text13;
