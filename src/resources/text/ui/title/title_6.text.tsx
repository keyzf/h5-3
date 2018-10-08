import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title6Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section>
        <section className={"text_4_1"}>
          <span className={"text_4_2"} />
          <span className={"text_4_4"}>
            <span className={"text_4_4"} />
            <span className={"text_4_5"} />
          </span>
        </section>
        <section className={"text_4_6"}>
          <span>
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
          </span>
        </section>
      </section>
    );
  }
}

export default Title6Text;
