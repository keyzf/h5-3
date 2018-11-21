import * as React from "react";
import Text0 from "./components/text_0";
import Text1 from "./components/text_1";

interface Props {
  data: {
    common: any;
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
  console.log(props);
  const showTextUi = name => {
    switch (name) {
      case 1:
        return <Text0 html={props.data.base.html}/>;
      case 2:
        return <Text1 html={props.data.base.html}/>;
    }
  };
  return showTextUi(props.data.common.id);
});

export default RenderText;
