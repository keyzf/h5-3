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

class Text34 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={style.text32c1}
        style={{ border: `3px solid ${base.color} ` }}
      >
        <section className={style.text32c2}>
          <section
            className={style.text32c3}
            style={{
              borderColor: `${base.color} `,
              backgroundColor: `${base.color} `
            }}
          />
          <section
            className={style.text32c4}
            style={{
              borderColor: `${base.color} `,
              backgroundColor: `${base.color} `
            }}
          />
        </section>
        <section className={style.text32c5}>
          <div className={style.text32c6}>
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
              dangerouslySetInnerHTML={{ __html: base.html }}
            />
          </div>
        </section>
        <section className={style.text32c7}>
          <section
            className={style.text32c8}
            style={{
              borderColor: `${base.color} `,
              backgroundColor: `${base.color} `
            }}
          />
          <section
            className={style.text32c9}
            style={{
              borderColor: `${base.color} `,
              backgroundColor: `${base.color} `
            }}
          />
        </section>
      </section>
    );
  }
}

export default Text34;
