import * as React from "react";
import RenderText from "../../resource/text/render";

interface Props {
  data: {
    common: {
      type:string
    },
    base:any
  }
}

class RenderUi extends React.Component<Props, ""> {
  render() {
    const { data } = this.props;
    const ui = {
      text: () => <RenderText data={data}/>
    };

    const UI = ui[data.common.type];
    return (
      <UI/>
    );
  }
}

export default RenderUi;