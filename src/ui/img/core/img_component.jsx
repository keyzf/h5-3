import React, { PureComponent } from "react";
import { ImgAtom } from "../img_atom";

class UpImgUi extends PureComponent {
  toUrl = url => {
    // eslint-disable-next-line
    url ? (window.location.href = url) : "";
  };

  render() {
    const customize = this.props.data.get("customize");
    const advance = this.props.data.get("advance");
    const advanced_settings = {
      width: advance.get("width"),
      height: advance.get("height"),
      // img:'http://src.e7wei.com/0.3450422325195559.png',
      img: customize.getIn(["item", 0, "crop_img"]),
      radius: customize.getIn(["item", 0, "radius", "value"])
    };

    return (
      <ImgAtom {...advanced_settings}>
        {advanced_settings.img ? (
          <img
            onClick={this.toUrl.bind(this, customize.getIn(["item", 0, "link", "value"]))}
            src={advanced_settings.img}
            alt={"图片"}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        ) : (
          <span
            className={"flex_center"}
            style={{ whiteSpace: "pre-wrap" }}
            dangerouslySetInnerHTML={{
              __html: customize.getIn(["item", 0, "content", "value"])
            }}
          />
        )}
      </ImgAtom>
    );
  }
}

export { UpImgUi };
