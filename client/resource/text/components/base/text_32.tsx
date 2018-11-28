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

class Text32 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={style.text30c1}
        style={{
          border: `1px solid ${base.color} `
        }}
      >
        <section className={style.text30c2}>
          <section
            className={style.text30c3}
            style={{
              borderLeft: `1px solid ${base.color} `,
              borderBottom: `1px solid ${base.color} `
            }}
          />
          <section
            className={style.text30c4}
            style={{
              borderRight: `1px solid ${base.color} `,
              borderBottom: `1px solid ${base.color} `
            }}
          />
        </section>
        <section
          className={style.text30c5}
          style={{
            borderColor: `${base.color} `
          }}
        >
          <section
            className={style.text30c6}
            style={{
              border: `1px solid ${base.color} `
            }}
          />
          <section
            className={style.text30c7}
            style={{
              border: `1px solid ${base.color} `
            }}
          />
        </section>
        <section
          className={style.text30c8}
          style={{
            borderColor: `${base.color} `
          }}
        >
          <section className={style.text30c9}>
            <div className={style.text30c10}>
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
            </div>
          </section>
        </section>
        <section
          className={style.text30c11}
          style={{
            borderColor: `${base.color} `
          }}
        >
          <section
            className={style.text30c12}
            style={{
              border: ` 1px solid ${base.color} `
            }}
          />
          <section
            className={style.text30c13}
            style={{
              border: ` 1px solid ${base.color} `
            }}
          />
        </section>
        <section
          className={style.text30c14}
          style={{
            borderColor: `${base.color} `
          }}
        >
          <section
            className={style.text30c15}
            style={{
              borderTop: `1px solid ${base.color} `,
              borderLeft: `1px solid ${base.color} `
            }}
          />
          <section
            className={style.text30c16}
            style={{
              borderTop: `1px solid ${base.color} `,
              borderRight: `1px solid ${base.color} `
            }}
          />
          <section
            className={style.text30c17}
            style={{
              borderTop: `1px solid ${base.color} `,
              borderRight: `1px solid ${base.color} `
            }}
          />
        </section>
      </section>
    );
  }
}

export default Text32;
