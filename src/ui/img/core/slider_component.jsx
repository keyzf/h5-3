import React, { PureComponent } from "react";

class SliderImgUI extends PureComponent {
  render() {
    const customize = this.props.data.get("customize");
    const $$show_element = customize.getIn(["base", "show_element", "value"]);
    const font_color = customize.getIn(["base", "font_color"]);
    const $$show_element_title =
      $$show_element !== undefined ? $$show_element[0] : "";
    const $$show_element_content =
      $$show_element !== undefined && $$show_element[1]
        ? $$show_element[1]
        : "";
    return (
      <div
        style={{
          width: "100%",
          overflow: "auto",
          display: "flex",
          flex: "0 0 200px"
        }}
      >
        {customize.get("item").map((data, index) => {
          return (
            <div key={index} style={{ flex: "0 0 120px", marginRight: "2px" }}>
              <a href={data.getIn(["link", "value"])} style={{ color: font_color }}>
                <img
                  width={
                    data.getIn(["width", "value"])
                      ? data.getIn(["width", "value"])
                      : "100%"
                  }
                  height={
                    data.getIn(["height", "value"])
                      ? data.getIn(["height", "value"])
                      : "auto"
                  }
                  src={
                    data.get("crop_img")
                      ? data.get("crop_img")
                      : "http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg"
                  }
                  alt={"img"}
                />
              </a>
              {$$show_element_title ? (
                ""
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: font_color
                  }}
                >
                  {data.getIn(["title", "value"])}
                </div>
              )}
              {$$show_element_content ? (
                ""
              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: font_color
                  }}
                >
                  {data.getIn(["content", "value"])}
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export { SliderImgUI };
