import * as React from 'react';
import random from '../../../../utils/random';
import Paragraph1Text from './paragraph_1.text';
import Paragraph2Text from './paragraph_2.text';
import Paragraph3Text from './paragraph_3.text';
import Paragraph4Text from './paragraph_4.text';
import Paragraph5Text from './paragraph_5.text';
import Paragraph6Text from './paragraph_6.text';
import Paragraph7Text from './paragraph_7.text';
import Paragraph8Text from './paragraph_8.text';
import Paragraph9Text from './paragraph_9.text';
import Paragraph10Text from './paragraph_10.text';
import Paragraph11Text from './paragraph_11.text';
import Paragraph12Text from './paragraph_12.text';
import Paragraph13Text from './paragraph_13.text';
import Paragraph14Text from './paragraph_14.text';
import Paragraph15Text from './paragraph_15.text';
import Paragraph16Text from './paragraph_16.text';
import Paragraph17Text from './paragraph_17.text';
import Paragraph18Text from './pargaraph_18.text';
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
} from '../../text.db';
import { observer } from 'mobx-react';
import MxStore from '../../../../mobx/store';

@observer
class ParagraphText extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_1_text(random()) })}>
          <Paragraph1Text {...$$paragraph_1_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_2_text(random()) })}>
          <Paragraph2Text {...$$paragraph_2_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_3_text(random()) })}>
          <Paragraph3Text {...$$paragraph_3_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_4_text(random()) })}>
          <Paragraph4Text {...$$paragraph_4_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_5_text(random()) })}>
          <Paragraph5Text {...$$paragraph_5_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_6_text(random()) })}>
          <Paragraph6Text {...$$paragraph_6_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_7_text(random()) })}>
          <Paragraph7Text {...$$paragraph_7_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_8_text(random()) })}>
          <Paragraph8Text {...$$paragraph_8_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_9_text(random()) })}>
          <Paragraph9Text {...$$paragraph_9_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_10_text(random()) })}>
          <Paragraph10Text {...$$paragraph_10_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_11_text(random()) })}>
          <Paragraph11Text {...$$paragraph_11_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_12_text(random()) })}>
          <Paragraph12Text {...$$paragraph_12_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_13_text(random()) })}>
          <Paragraph13Text {...$$paragraph_13_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_14_text(random()) })}>
          <Paragraph14Text {...$$paragraph_14_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_15_text(random()) })}>
          <Paragraph15Text {...$$paragraph_15_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_16_text(random()) })}>
          <Paragraph16Text {...$$paragraph_16_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_17_text(random()) })}>
          <Paragraph17Text {...$$paragraph_17_text(random())} />
        </div>
        <div className={'chooseUi_hover'} onClick={MxStore.addUi.bind(this, { ...$$paragraph_18_text(random()) })}>
          <Paragraph18Text {...$$paragraph_18_text(random())} />
        </div>
      </React.Fragment>
    );
  }
}

export default ParagraphText;
