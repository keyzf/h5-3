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

class Text36 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text34c1}>
        <section
          className={style.text34c2}
          style={{
            backgroundColor: `${base.color} `
          }}
        />
        <section
          className={style.text34c3}
          style={{
            borderColor: `${base.color} `
          }}
        >
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
        <section
          className={style.text34c4}
          style={{
            borderColor: `${base.color} `
          }}
        />
      </section>
    );
  }
}

export default Text36;
