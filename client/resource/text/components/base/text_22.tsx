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

class Text22 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={style.text20c1}
        style={{ border: ` 1px solid ${base.color}` }}
      >
        <section
          className={style.text20c2}
          style={{ border: `0 none ${base.color}` }}
        >
          <section
            className={style.text20c3}
            style={{ backgroundColor: `${base.color}` }}
          />
          <section
            className={style.text20c4}
            style={{ backgroundColor: `${base.color}` }}
          />
        </section>
        <section
          className={style.text20c5}
          style={{ borderColor: `${base.color}` }}
        >
          <section
            className={style.text20c6}
            style={{ backgroundColor: `${base.color}` }}
          />
          <section
            className={style.text20c7}
            style={{ borderColor: `${base.color}` }}
          >
            <div className={style.text20c8}>
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
          <section
            className={style.text20c9}
            style={{ backgroundColor: `${base.color}` }}
          />
          <section
            className={style.text20c10}
            style={{ backgroundColor: `${base.color}` }}
          />
        </section>
        <section
          className={style.text20c11}
          style={{ border: `0 none ${base.color}` }}
        >
          <section
            className={style.text20c12}
            style={{ backgroundColor: `${base.color}` }}
          />
          <section
            className={style.text20c13}
            style={{ backgroundColor: `${base.color}` }}
          />
        </section>
      </section>
    );
  }
}

export default Text22;
