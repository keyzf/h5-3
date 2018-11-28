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

class Text11 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section>
        <section
          className={style.text9c1}
          style={{
            backgroundColor: ` ${base.color}`
          }}
        >
          <section className={style.text9c2}>
            <section
              className={style.text9c3}
              style={{
                borderLeftColor: ` ${base.color}`,
                borderRightColor: ` ${base.color}`
              }}
            />
          </section>
        </section>
        <section className={style.text9c4}>
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
    );
  }
}

export default Text11;
