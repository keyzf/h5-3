import * as React from "react";
import connect from "../../../../redux/connect";
import { $$horizontal_text, $$vertical_text } from "../../text.db";
import random from "../../../../utils/random";
import { HorizontalTextExample, VerticalTextExample } from "./example";

@connect
export default class ExampleText extends React.Component<any, any> {
  /**
   * 向ui 数据源中添加ui 数据
   * @param name 名称
   */
  addUiData = (name: string) => {
    switch (name) {
      case "horizontal":
        this.props.RxAction.bind(this, "RxUi_Add", {
          ...$$horizontal_text(random())
        });
        this.props.RxAction.bind(
          this,
          "RxEditor_UpIndex",
          this.props.RxUi.ui.length - 1
        );
        break;
      case "vertical":
        this.props.RxAction.bind(this, "RxUi_Add", {
          ...$$vertical_text(random())
        });
        this.props.RxAction.bind(
          this,
          "RxEditor_UpIndex",
          this.props.RxUi.ui.length - 1
        );
        break;
    }
  };

  render() {
    return (
      <React.Fragment>
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
      </React.Fragment>
    );
  }
}
