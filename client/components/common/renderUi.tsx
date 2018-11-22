import * as React from "react";
import RenderText from "../../resource/text/render";
import RenderPicture from "../../resource/picture/render";
import RenderVideo from "../../resource/video/render";
import RenderButton from "../../resource/button/render";
import RenderForm from "../../resource/form/render";

interface Props {
  data: {
    common: any,
    base: any
  }
}

class RenderUi extends React.Component<Props, ""> {
  render() {
    const { data } = this.props;
    const ui = {
      form: () => <RenderForm data={data}/>,
      button: () => <RenderButton data={data}/>,
      video: () => <RenderVideo data={data}/>,
      text: () => <RenderText data={data}/>,
      picture: () => <RenderPicture data={data}/>
    };

    const UI = ui[data.common.type];
    return (
      <UI/>
    );
  }
}

export default RenderUi;