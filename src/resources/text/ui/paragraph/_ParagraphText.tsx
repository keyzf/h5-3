import React, { Component } from "react";
import random from "../../../../utils/random";
import Paragraph1Text from "./paragraph_1.text";
import Paragraph2Text from "./paragraph_2.text";
import Paragraph3Text from "./paragraph_3.text";
import Paragraph4Text from "./paragraph_4.text";
import Paragraph5Text from "./paragraph_5.text";
import Paragraph6Text from "./paragraph_6.text";
import Paragraph7Text from "./paragraph_7.text";
import Paragraph8Text from "./paragraph_8.text";
import Paragraph9Text from "./paragraph_9.text";
import Paragraph10Text from "./paragraph_10.text";
import Paragraph11Text from "./paragraph_11.text";
import Paragraph12Text from "./paragraph_12.text";
import Paragraph13Text from "./paragraph_13.text";
import Paragraph14Text from "./paragraph_14.text";
import Paragraph15Text from "./paragraph_15.text";
import Paragraph16Text from "./paragraph_16.text";
import Paragraph17Text from "./paragraph_17.text";
import Paragraph18Text from "./pargaraph_18.text";
import {
  $$paragraph_1_text,
  $$paragraph_2_text,
  $$paragraph_3_text,
  $$paragraph_4_text,
  $$paragraph_5_text,
  $$paragraph_6_text,
  $$paragraph_7_text,
  $$paragraph_8_text,
  $$paragraph_9_text,
  $$paragraph_10_text,
  $$paragraph_11_text,
  $$paragraph_12_text,
  $$paragraph_13_text,
  $$paragraph_14_text,
  $$paragraph_15_text,
  $$paragraph_16_text,
  $$paragraph_17_text,
  $$paragraph_18_text,
} from "../../text.db";
import { inject, observer } from "mobx-react";

interface IProps {
  action?: {
    addUi;
  };
}

interface IState {}

@inject("action")
@observer
class ParagraphText extends Component<IProps, IState> {
  addUi = data_fun => {
    const data = data_fun(random());
    this.props.action.addUi({ ...data });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_1_text)}
        >
          <Paragraph1Text {...$$paragraph_1_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_2_text)}
        >
          <Paragraph2Text {...$$paragraph_2_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_3_text)}
        >
          <Paragraph3Text {...$$paragraph_3_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_4_text)}
        >
          <Paragraph4Text {...$$paragraph_4_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_5_text)}
        >
          <Paragraph5Text {...$$paragraph_5_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_6_text)}
        >
          <Paragraph6Text {...$$paragraph_6_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_7_text)}
        >
          <Paragraph7Text {...$$paragraph_7_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_8_text)}
        >
          <Paragraph8Text {...$$paragraph_8_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_9_text)}
        >
          <Paragraph9Text {...$$paragraph_9_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_10_text)}
        >
          <Paragraph10Text {...$$paragraph_10_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_11_text)}
        >
          <Paragraph11Text {...$$paragraph_11_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_12_text)}
        >
          <Paragraph12Text {...$$paragraph_12_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_13_text)}
        >
          <Paragraph13Text {...$$paragraph_13_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_14_text)}
        >
          <Paragraph14Text {...$$paragraph_14_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_15_text)}
        >
          <Paragraph15Text {...$$paragraph_15_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_16_text)}
        >
          <Paragraph16Text {...$$paragraph_16_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_17_text)}
        >
          <Paragraph17Text {...$$paragraph_17_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$paragraph_18_text)}
        >
          <Paragraph18Text {...$$paragraph_18_text(random())} />
        </div>
      </React.Fragment>
    );
  }
}

export default ParagraphText;
