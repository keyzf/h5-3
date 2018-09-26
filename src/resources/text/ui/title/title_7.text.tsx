import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title7Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={"text_3_1"}>
        <section
          className={"text_3_2"}
          style={{
            borderBottomColor: `${base.color ? base.color : "#1e9be8"}`
          }}
        >
          <section
            className={"text_3_3"}
            style={{
              borderColor: `${base.color ? base.color : "#7880c8"}`
            }}
          >
            <span
              className={'mobile'}
              style={{ whiteSpace: "pre-wrap" }}
              dangerouslySetInnerHTML={{
                __html: `<p style="font-size: 14px">${base.html}</p>`.replace(
                  new RegExp("(\\d+)px", "g"),
                  "calc($1/320*100vw)"
                )
              }}
            />
            <span
              className={'pc'}
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

export default Title7Text;
