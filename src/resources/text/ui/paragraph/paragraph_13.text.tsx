import React, { PureComponent } from "react";

interface Props {
  base: {
    html: string;
    index: string;
    color: "";
  };
}
class Paragraph13Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={"text_40_1"}
        style={{
          border: `1px solid ${base.color ? base.color : " #f87a7a"} `
        }}
      >
        <section className={"text_40_2"}>
          <section
            className={"text_40_3"}
            style={{
              borderLeft: `1px solid ${base.color ? base.color : " #f87a7a"} `,
              borderBottom: `1px solid ${base.color ? base.color : " #f87a7a"} `
            }}
          />
          <section
            className={"text_40_4"}
            style={{
              borderRight: `1px solid ${base.color ? base.color : " #f87a7a"} `,
              borderBottom: `1px solid ${base.color ? base.color : " #f87a7a"} `
            }}
          />
        </section>
        <section
          className={"text_40_5"}
          style={{
            borderColor: `${base.color ? base.color : " #f87a7a"} `
          }}
        >
          <section
            className={"text_40_6"}
            style={{
              border: `1px solid ${base.color ? base.color : " #f87a7a"} `
            }}
          />
          <section
            className={"text_40_7"}
            style={{
              border: `1px solid ${base.color ? base.color : " #f87a7a"} `
            }}
          />
        </section>
        <section
          className={"text_40_8"}
          style={{
            borderColor: `${base.color ? base.color : " #f87a7a"} `
          }}
        >
          <section className={"text_40_9"}>
            <div className={"text_40_10"}>
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
            </div>
          </section>
        </section>
        <section
          className={"text_40_11"}
          style={{
            borderColor: `${base.color ? base.color : " #f87a7a"} `
          }}
        >
          <section
            className={"text_40_12"}
            style={{
              border: ` 1px solid ${base.color ? base.color : " #f87a7a"} `
            }}
          />
          <section
            className={"text_40_13"}
            style={{
              border: ` 1px solid ${base.color ? base.color : " #f87a7a"} `
            }}
          />
        </section>
        <section
          className={"text_40_14"}
          style={{
            borderColor: `${base.color ? base.color : " #f87a7a"} `
          }}
        >
          <section
            className={"text_40_15"}
            style={{
              borderTop: `1px solid ${base.color ? base.color : " #f87a7a"} `,
              borderLeft: `1px solid ${base.color ? base.color : " #f87a7a"} `
            }}
          />
          <section
            className={"text_40_16"}
            style={{
              borderTop: `1px solid ${base.color ? base.color : " #f87a7a"} `,
              borderRight: `1px solid ${base.color ? base.color : " #f87a7a"} `
            }}
          />
          <section
            className={"text_40_17"}
            style={{
              borderTop: `1px solid ${base.color ? base.color : " #f87a7a"} `,
              borderRight: `1px solid ${base.color ? base.color : "#f87a7a"} `
            }}
          />
        </section>
      </section>
    );
  }
}

export default Paragraph13Text;
