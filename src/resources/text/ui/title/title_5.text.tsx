import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title5Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section style={{ textAlign: "center", marginTop: "10px" }}>
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
              background: `${base.color ? base.color : "yellow"}`,
              marginRight: "5px"
            }}
          />
          <section
            style={{
              width: "25px",
              height: "25px",
              borderRadius: "100%",
              background: `${base.color ? base.color : "yellow"}`,
              marginRight: "5px"
            }}
          />
          <span
            className={"mobile"}
            style={{ whiteSpace: "pre-wrap" }}
            dangerouslySetInnerHTML={{
              __html: `<p style="font-size: 14px">${base.html}</p>`.replace(
                new RegExp("(\\d+)px", "g"),
                "calc($1/320*100vw)"
              )
            }}
          />
          <span
            className={"pc"}
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
              background: `${base.color ? base.color : "yellow"}`,
              marginRight: "5px",
              marginLeft: "5px"
            }}
          />
          <section
            style={{
              width: "15px",
              height: "15px",
              borderRadius: "100%",
              background: `${base.color ? base.color : "yellow"}`,
              marginRight: "5px"
            }}
          />
        </section>
      </section>
    );
  }
}

export default Title5Text;
