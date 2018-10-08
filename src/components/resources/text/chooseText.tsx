import * as React from "react";
import { observer } from "mobx-react";
import Divider from "antd/lib/divider";
import Tag from "antd/lib/tag";
import TitleTextUi from "../../../routes/ui/text/title";
import ParagraphTextUi from "../../../routes/ui/text/paragraph";
import store from "../../mobx/store";
import random from "../../../utils/random";
import { $$horizontal_text, $$vertical_text } from "./text.db";
import {
  HorizontalTextExample,
  VerticalTextExample
} from "./ui/example/example";

interface State {
  type: string;
}

@observer
class ChooseText extends React.Component<any, State> {
  state = {
    type: "title"
  };

  /**
   * 向ui 数据源中添加ui 数据
   * @param name 名称
   */
  addUiData = (name: string) => {
    switch (name) {
      case "horizontal":
        const h_data = { ...$$horizontal_text(random()) };
        return store.addUi({ ...h_data });
      case "vertical":
        const v_data = { ...$$vertical_text(random()) };
        return store.addUi({ ...v_data });
    }
  };

  render() {
    const { CheckableTag } = Tag;
    const { type } = this.state;
    const ShowType = () => {
      switch (this.state.type) {
        case "title":
          return <TitleTextUi />;
        case "paragraph":
          return <ParagraphTextUi />;
      }
    };
    return (
      <div className={"content"}>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUiData.bind(this, "horizontal")}
        >
          <HorizontalTextExample />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUiData.bind(this, "vertical")}
        >
          <VerticalTextExample />
        </div>
        <Divider />
        <div style={{ padding: "0 3px" }}>
          <CheckableTag
            onChange={() => {
              this.setState({ type: "title" });
            }}
            checked={type === "title"}
          >
            标题
          </CheckableTag>
          <CheckableTag
            onChange={() => {
              this.setState({ type: "paragraph" });
            }}
            checked={type === "paragraph"}
          >
            段落
          </CheckableTag>
        </div>
        <Divider>分类</Divider>
        <ShowType />
      </div>
    );
  }
}

export default ChooseText;
