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

class Text35 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text33c1}>
        <section className={style.text33c2}>
          <section className={style.text33c3}>
            <section
              className={style.text33c4}
              style={{
                borderTopColor: `${base.color } `,
                borderLeftColor: `${base.color } `
              }}
            />
            <section
              className={style.text33c5}
              style={{
                borderTopColor: `${base.color } `,
                borderRightColor: `${base.color } `
              }}
            />
          </section>
          <section className={style.text33c6}>
            <section>
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
          <section className={style.text33c7}>
            <section
              className={style.text33c8}
              style={{
                borderLeftColor: `${base.color } `,
                borderBottomColor: `${base.color } `
              }}
            />
            <section
              className={style.text33c9}
              style={{
                borderRightColor: `${base.color } `,
                borderBottomColor: `${base.color } `
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

export default Text35;
