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

class Text31 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text29c1}>
        <section className={style.text29c2}>
          <section className={style.text29c3}>
            <span
              className={style.text29c4}
              style={{
                color: `${base.color} `
              }}
            >
              ★
            </span>
          </section>
        </section>
        <section
          className={style.text29c5}
          style={{
            borderTop: `1px solid ${base.color} `,
            borderBottom: `1px solid ${base.color} `
          }}
        >
          <div className={style.text29c6}>
            <span className={style.text29c7}>
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
            </span>
          </div>
        </section>
        <section className={style.text29c8}>
          <section className={style.text29c9}>
            <span
              className={style.text29c10}
              style={{
                color: `${base.color} `
              }}
            >
              ★
            </span>
          </section>
        </section>
      </section>
    );
  }
}

export default Text31;
