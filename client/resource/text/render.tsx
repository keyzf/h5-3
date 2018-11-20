import * as React from "react";
import Text0 from "./components/text_0";
import Text1 from "./components/text_1";

interface Props {
  base: {
    html: string;
    index: string;
    color: string;
    wordArt: string;
    link: string;
  };
}

const RenderText = React.memo((props: Props) => {
  const { index, html } = props.base;
  const showTextUi = name => {
    switch (name) {
      case 1:
        return <Text0 html={html}/>;
      case 2:
        return <Text1 html={html}/>;
    }
  };
  return showTextUi(index);
});

export default RenderText;
