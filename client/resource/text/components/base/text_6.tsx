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

class Text6 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return (
      <section >
        <section
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center"
          }}
        >
          <section
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "100%",
              background: `${base.color }`,
              marginRight: "5px"
            }}
          />
          <section
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "100%",
              background: `${base.color }`,
              marginRight: "5px"
            }}
          />
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
          <section
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "100%",
              background: `${base.color }`,
              marginRight: "5px",
              marginLeft: "5px"
            }}
          />
          <section
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "100%",
              background: `${base.color }`,
              marginRight: "5px"
            }}
          />
        </section>
      </section>
    );
  }
}

export default Text6;
