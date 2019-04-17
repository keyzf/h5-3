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

class Text33 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text31c1}>
        <section className={style.text31c2}>
          <section className={style.text31c3}>
            <section
              className={style.text31c4}
              style={{ borderColor: ` ${base.color} ` }}
            />
            <section
              className={style.text31c5}
              style={{ borderColor: ` ${base.color} ` }}
            />
          </section>
          <section
            className={style.text31c6}
            style={{ border: ` 2px solid ${base.color} ` }}
          >
            <div className={style.text31c7}>
              <span className={style.text31c8}>
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
              </span>
            </div>
          </section>
        </section>
      </section>
    );
  }
}

export default Text33;
