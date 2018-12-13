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

class Text4 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text3c1}>
        <section className={style.text3c2}>
          <section className={style.text3c3}/>
          <section
            className={style.text3c4}
            style={{ background: `${base.color}` }}
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
          <section className={style.text3c5}/>
        </section>
      </section>
    );
  }
}

export default Text4;
