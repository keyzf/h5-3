import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title8Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={"text_2_1"}>
        <section className={"text_2_2"}>
          <section
            className={"text_2_3"}
            style={{
              backgroundColor: `${base.color ? base.color : "#7880c8"}`
            }}
          >
            <section>
              <section className={"text_2_4"}>
                <section>
                  <section style={{ color: `${base.color}` }}>
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
              </section>
            </section>
          </section>
          <section
            className={"text_2_5"}
            style={{
              borderLeftColor: `${base.color ? base.color : "#7880c8"}`
            }}
          />
        </section>
      </section>
    );
  }
}

export default Title8Text;
