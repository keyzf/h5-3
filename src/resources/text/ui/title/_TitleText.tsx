import * as React from "react";
import random from "../../../../utils/random";
import Title1Text from "./title_1.text";
import Title2Text from "./title_2.text";
import Title3Text from "./title_3.text";
import Title4Text from "./title_4.text";
import Title5Text from "./title_5.text";
import Title6Text from "./title_6.text";
import Title7Text from "./title_7.text";
import Title8Text from "./title_8.text";
import Title9Text from "./title_9.text";
import Title10Text from "./title_10.text";
import Title11Text from "./title_11.text";
import Title12Text from "./title_12.text";
import Title13Text from "./title_13.text";
import Title14Text from "./title_14.text";
import Title15Text from "./title_15.text";
import Title16Text from "./title_16.text";
import Title17Text from "./title_17.text";
import Title18Text from "./title_18.text";
import {
  $$title_1_text,
  $$title_2_text,
  $$title_3_text,
  $$title_4_text,
  $$title_5_text,
  $$title_6_text,
  $$title_7_text,
  $$title_8_text,
  $$title_9_text,
  $$title_10_text,
  $$title_11_text,
  $$title_12_text,
  $$title_13_text,
  $$title_14_text,
  $$title_15_text,
  $$title_16_text,
  $$title_17_text,
  $$title_18_text
} from "../../text.db";
import { observer } from "mobx-react";
import store from '../../../../mobx/store';

@observer
class TitleText extends React.Component<any, any> {
  addUi = data_fun => {
    const data = data_fun(random());
    store.addUi({ ...data });
  };

  render() {
    return (
      <React.Fragment>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_1_text)}
        >
          <Title1Text {...$$title_1_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_2_text)}
        >
          <Title2Text {...$$title_2_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_3_text)}
        >
          <Title3Text {...$$title_3_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_4_text)}
        >
          <Title4Text {...$$title_4_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_5_text)}
        >
          <Title5Text {...$$title_5_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_6_text)}
        >
          <Title6Text {...$$title_6_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_7_text)}
        >
          <Title7Text {...$$title_7_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_8_text)}
        >
          <Title8Text {...$$title_8_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_9_text)}
        >
          <Title9Text {...$$title_9_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_10_text)}
        >
          <Title10Text {...$$title_10_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_11_text)}
        >
          <Title11Text {...$$title_11_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_12_text)}
        >
          <Title12Text {...$$title_12_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_13_text)}
        >
          <Title13Text {...$$title_13_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_14_text)}
        >
          <Title14Text {...$$title_14_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_15_text)}
        >
          <Title15Text {...$$title_15_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_16_text)}
        >
          <Title16Text {...$$title_16_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_17_text)}
        >
          <Title17Text {...$$title_17_text(random())} />
        </div>
        <div
          className={"chooseUi_hover"}
          onClick={this.addUi.bind(this, $$title_18_text)}
        >
          <Title18Text {...$$title_18_text(random())} />
        </div>
      </React.Fragment>
    );
  }
}

export default TitleText;
