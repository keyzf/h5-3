import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title18Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={"text_8_1"}>
        <section className={"text_8_2"}>
          <section
            className={"text_8_3"}
            style={{
              borderColor: `${base.color ? base.color : "#ff8c00"}`
            }}
          >
            <section
              className={"text_8_4"}
              style={{
                backgroundColor: `${base.color ? base.color : "#ff8c00"}`
              }}
            >
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
      </section>
    );
  }
}

export default Title18Text;
