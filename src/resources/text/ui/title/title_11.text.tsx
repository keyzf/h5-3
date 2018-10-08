import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title11Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={"text_19_1"}
        style={{
          backgroundColor: ` ${base.color ? base.color : "#f58fc6"}`
        }}
      >
        <section className={"text_19_2"}>
          <div className={"text_19_3"}>
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

export default Title11Text;
