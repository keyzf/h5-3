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

class Text5 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text4c1}>
        <section className={style.text4c2}>
          <section className={style.text4c3}>
            <section className={style.text4c4}>
              <section
                className={style.text4c5}
                style={{
                  borderBottomColor: `${base.color}`,
                  borderTopColor: `${base.color}`
                }}
              />
              <section
                className={style.text4c6}
                style={{
                  borderRightColor: `${base.color ? base.color : "#57d9ff"}`,
                  borderLeftColor: `${base.color ? base.color : "#57d9ff"}`
                }}
              />
              <section
                className={style.text4c7}
                style={{
                  borderLeftColor: `${base.color }`,
                  borderRightColor: `${base.color }`
                }}
              />
            </section>
            <section className={style.text4c8}>
              <section className={style.text4c9}>
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
            <section className={style.text4c10}>
              <section className={style.text4c11}>
                <section
                  className={style.text4c5}
                  style={{
                    borderBottomColor: `${base.color }`,
                    borderTopColor: `${base.color }`
                  }}
                />
                <section
                  className={style.text4c6}
                  style={{
                    borderRightColor: `${base.color }`,
                    borderLeftColor: `${base.color }`
                  }}
                />
                <section
                  className={style.text4c7}
                  style={{
                    borderLeftColor: `${base.color }`,
                    borderRightColor: `${base.color }`
                  }}
                />
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Text5;
