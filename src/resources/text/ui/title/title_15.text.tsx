import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}

class Title15Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={"text_11_1"}>
        <section className={"text_11_2"}>
          <section
            className={"text_11_3"}
            style={{
              backgroundColor: `${base.color ? base.color : "#f05454"}`
            }}
          />
          <section className={"text_11_4"}>
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
          <section
            className={"text_11_5"}
            style={{
              backgroundColor: `${base.color ? base.color : "#f05454"}`
            }}
          />
          <section className={"text_11_6"} />
        </section>
      </section>
    );
  }
}

export default Title15Text;
