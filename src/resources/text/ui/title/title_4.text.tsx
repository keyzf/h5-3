import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title4Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={"text_28_1"}>
        <section className={"text_28_2"}>
          <section className={"text_28_3"}>
            <section className={"text_28_4"}>
              <section
                className={"text_28_5"}
                style={{
                  borderBottomColor: `${base.color ? base.color : "#57d9ff"}`,
                  borderTopColor: `${base.color ? base.color : "#57d9ff"}`
                }}
              />
              <section
                className={"text_28_6"}
                style={{
                  borderRightColor: `${base.color ? base.color : "#57d9ff"}`,
                  borderLeftColor: `${base.color ? base.color : "#57d9ff"}`
                }}
              />
              <section
                className={"text_28_7"}
                style={{
                  borderLeftColor: `${base.color ? base.color : "#57d9ff"}`,
                  borderRightColor: `${base.color ? base.color : "#57d9ff"}`
                }}
              />
            </section>
            <section className={"text_28_8"}>
              <section className={"text_28_9"}>
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
            <section className={"text_28_10"}>
              <section className={"text_28_11"}>
                <section
                  className={"text_28_5"}
                  style={{
                    borderBottomColor: `${base.color ? base.color : "#57d9ff"}`,
                    borderTopColor: `${base.color ? base.color : "#57d9ff"}`
                  }}
                />
                <section
                  className={"text_28_6"}
                  style={{
                    borderRightColor: `${base.color ? base.color : "#57d9ff"}`,
                    borderLeftColor: `${base.color ? base.color : "#57d9ff"}`
                  }}
                />
                <section
                  className={"text_28_7"}
                  style={{
                    borderLeftColor: `${base.color ? base.color : "#57d9ff"}`,
                    borderRightColor: `${base.color ? base.color : "#57d9ff"}`
                  }}
                />
              </section>
            </section>
          </section>
        </section>
      </section>
    );
  }
}

export default Title4Text;
