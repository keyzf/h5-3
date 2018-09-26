import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title17Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={"text_9_1"}>
        <section
          className={"text_9_2"}
          style={{
            backgroundColor: `${base.color ? base.color : "#57d9ff"}`
          }}
        />
        <section
          className={"text_9_3"}
          style={{
            border: `1px solid ${base.color ? base.color : "#57d9ff"}`
          }}
        >
          <section>
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
          </section>
        </section>
      </section>
    );
  }
}

export default Title17Text;
