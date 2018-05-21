import React from "react";
import { Divider } from "antd";
import QueueAnim from "rc-queue-anim";
import { HorizontalTextTemplate, VerticalTextTemplate } from "../../../components/template/text";


class TextSelect extends React.Component {

  render() {
    return (
      <QueueAnim delay={200}>
        <div className={"components_hover"} key={1}>
          <HorizontalTextTemplate/>
        </div>
        <div className={"components_hover"} key={2}>
          <VerticalTextTemplate/>
        </div>
        <Divider orientation="left" >设计师推荐</Divider>
      </QueueAnim>
    );
  }
}

// hoc
export default TextSelect;