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

class Text25 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <div>
        <section
          className={style.text23c1}
          style={{ borderBottom: ` 1px solid ${base.color}` }}
        />
        <section
          className={style.text23c2}
          style={{ borderLeft: ` 1px solid ${base.color}` }}
        />
        <section className={style.text23c3}>
          <div className={style.text23c4}>
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
              dangerouslySetInnerHTML={{ __html: base.html }}
            />
          </div>
        </section>
        <section className={style.text23c5}>
          <section
            className={style.text23c6}
            style={{ borderRight: ` 1px solid ${base.color}` }}
          />
          <section
            className={style.text23c7}
            style={{ borderBottom: ` 1px solid ${base.color}` }}
          />
        </section>
      </div>
    );
  }
}

export default Text25;
