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

class Text21 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text19c1}>
        <section
          className={style.text19c2}
          style={{
            border: ` 2px solid ${base.color}`
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
        <section
          className={style.text19c3}
          style={{
            borderTopColor: ` ${base.color }`,
            borderBottomColor: ` ${base.color }`
          }}
        />
        <section className={style.text19c4} />
      </section>
    );
  }
}

export default Text21;
