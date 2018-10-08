import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title12Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={"text_16_1"}>
        <section className={"text_16_2"}>
          <section
            className={"text_16_3"}
            style={{
              borderColor: ` ${base.color ? base.color : "#f96e57"}`
            }}
          >
            <section className={"text_16_4"}>
              <section
                className={"text_16_5"}
                style={{
                  backgroundColor: ` ${base.color ? base.color : "#f96e57"}`
                }}
              />
              <section
                className={"text_16_6"}
                style={{
                  backgroundColor: ` ${base.color ? base.color : "#f96e57"}`
                }}
              />
              <section className={"text_16_7"}>
                <span
                  className={"mobile"}
                  style={{ whiteSpace: "pre-wrap" }}
                  dangerouslySetInnerHTML={{
                    __html: `<p style="font-size: 14px">${
                      base.html
                    }</p>`.replace(
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
            <section className={"text_16_8"}>
              <section
                className={"text_16_9"}
                style={{
                  backgroundColor: ` ${base.color ? base.color : "#f96e57"}`
                }}
              />
              <section
                className={"text_16_10"}
                style={{
                  backgroundColor: ` ${base.color ? base.color : "#f96e57"}`
                }}
              />
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Title12Text;
