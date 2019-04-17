import * as React from "react";
import { ButtonAtom } from "./atom";

interface Props {
  data: {
    base: {
      font_color: string;
      bg_color: string;
      bg_img: { url: string; crop: string };
      radius: number;
      desc: string;
      link: { type: ""; url: "" };
    };
    position: any;
  };
}

class Button0 extends React.PureComponent<Props, ""> {
  render() {
    const { base, position } = this.props.data;
    const atom = {
      font_color: base.font_color,
      bg_color: base.bg_color,
      img: base.bg_img.crop,
      radius: base.radius,
      width: position.width,
      height: position.height
    };
    return <ButtonAtom {...atom}>{base.desc}</ButtonAtom>;
  }
}

export default Button0;
