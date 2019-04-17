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

class Text20 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text18c1}>
        <section className={style.text18c2}>
          <section
            className={style.text18c3}
            style={{
              border: `1px solid  ${base.color} `
            }}
          />
          <section
            className={style.text18c4}
            style={{
              border: `1px solid  ${base.color} `
            }}
          />
        </section>
        <section
          className={style.text18c5}
          style={{
            border: `1px solid  ${base.color} `,
            backgroundColor: ` ${base.color} `
          }}
        >
          <section
            className={style.text18c6}
            style={{
              border: `1px solid  ${base.color} `
            }}
          >
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
          </section>
        </section>
        <section className={style.text18c2}>
          <section
            className={style.text18c3}
            style={{
              border: `1px solid  ${base.color} `
            }}
          />
          <section
            className={style.text18c4}
            style={{
              border: `1px solid  ${base.color} `
            }}
          />
        </section>
      </section>
    );
  }
}

export default Text20;
