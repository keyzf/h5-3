import * as React from 'react';
import RenderUiLoadable from '../../routes/components/renderUi';
import BgUi from '../../resources/bg/bgUi';
import UiPosition from '../common/uiPosition';
import Draggable from './draggable';
import connect from '../../redux/connect';

interface marData {
  common: { name };
  position: {
    zIndex: number;
    width: number;
    height: number;
    left: number;
    top: number;
    rotate: number;
  };
  base: { html };
}

interface Props {
  RxUi: any;
  RxBg: any;
  RxAction: any;
  RxEditor: any;
}

@connect
export default class Canvas extends React.Component<Props, any> {
  render() {
    const { RxUi, RxBg, RxAction, RxEditor } = this.props;
    console.log('canver', RxUi.ui);
    return (
      <BgUi {...RxBg}>
        {RxUi.ui.map((data: marData, index: number) => {
          return RxEditor.index === index ? (
            <Draggable {...data.position} index={index} key={index} ui={RxUi}>
              <RenderUiLoadable {...data} />
            </Draggable>
          ) : (
            <UiPosition
              key={index}
              onClick={() => RxAction('RxEditor_UpData', { index: index, data: { ...data } })}
              {...data.position}
            >
              <div style={{ pointerEvents: 'none', userSelect: 'none' }}>
                <RenderUiLoadable {...data} />
              </div>
            </UiPosition>
          );
        })}
      </BgUi>
    );
  }
}
