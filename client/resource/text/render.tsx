import * as React from "react";
import Text0 from "./components/text_0";
import Text1 from "./components/text_1";
import Text3 from "./components/text_3";

interface Props {
  data: {
    common: {
      type: string,
      id: string | number
    };
    base: {
      html: string;
      index: string;
      color: string;
      wordArt: string;
      link: string;
    }
  }
}

const RenderText = React.memo((props: Props) => {
  const showTextUi = (name:any) => {
    switch (name) {
      case 0:
        return <Text0 html={props.data.base.html}/>;
      case 1:
        return <Text1 html={props.data.base.html}/>;
      default:
        return <Text3 base={props.data.base}/>;
    }
  };
  return showTextUi(props.data.common.id);
});

export default RenderText;
