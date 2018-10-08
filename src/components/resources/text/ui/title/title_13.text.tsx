import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title13Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={"text_13_1"}
        style={{
          backgroundColor: `${base.color ? base.color : "#57d9ff"}`
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
    );
  }
}

export default Title13Text;
