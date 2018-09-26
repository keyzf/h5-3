import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title10Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section>
        <section
          className={"text_20_1"}
          style={{
            backgroundColor: ` ${base.color ? base.color : "#76e57b"}`
          }}
        >
          <section className={"text_20_2"}>
            <section
              className={"text_20_3"}
              style={{
                borderLeftColor: ` ${base.color ? base.color : "#76e57b"}`,
                borderRightColor: ` ${base.color ? base.color : "#76e57b"}`
              }}
            />
          </section>
        </section>
        <section className={"text_20_4"}>
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

export default Title10Text;
