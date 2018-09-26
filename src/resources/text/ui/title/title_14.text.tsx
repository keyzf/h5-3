import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title14Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={"text_12_1"}>
        <section
          className={"text_12_2"}
          style={{
            border: ` 1px solid ${base.color ? base.color : "#ff8c00"}`
          }}
        >
          <div className={"text_12_3"}>
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
          </div>
        </section>
      </section>
    );
  }
}

export default Title14Text;
