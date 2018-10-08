import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title9Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={"text_re_1"}>
        <section className={"text_re_2"}>
          <section className={"text_re_3"}>
            <section
              className={"text_re_4"}
              style={{
                borderRightColor: `${base.color ? base.color : "#76e57b"}`
              }}
            />
            <section
              className={"text_re_5"}
              style={{
                backgroundColor: `${base.color ? base.color : "#76e57b"}`
              }}
            >
              <section>
                <section className={"text_re_6"}>
                  <section>
                    <div
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
                    <div
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
        </section>
      </section>
    );
  }
}

export default Title9Text;
