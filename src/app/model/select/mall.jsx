import React from "react";
import { Divider } from "antd";
import QueueAnim from "rc-queue-anim";
import { GridMallTemplate, ListMallTemplate } from "../../../components/template/mall";


class MallSelect extends React.Component {

  render() {
    return (
      <QueueAnim delay={200}>
        <div className={"components_hover"} key={1}>
          <GridMallTemplate/>
        </div>
        <div className={"components_hover"} key={2}>
          <ListMallTemplate/>
        </div>
        <Divider orientation="left" >设计师推荐</Divider>
      </QueueAnim>
    );
  }
}

// hoc
export default MallSelect;