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

class Text7 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section>
        <section className={style.text5c1}>
          <span
            className={style.text5c2}
            style={{ backgroundColor: `${base.color}` }}
          />
          <span
            className={style.text5c4}
            style={{ backgroundColor: `${base.color}` }}
          >
            <span
              className={style.text5c4}
              style={{ backgroundColor: `${base.color}` }}
            />
            <span
              className={style.text5c5}
              style={{ backgroundColor: `${base.color}` }}
            />
          </span>
        </section>
        <section className={style.text5c6} style={{ color: `${base.color}` }}>
          <span>
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
        </section>
      </section>
    );
  }
}

export default Text7;
