import * as React from 'react';
import { observer } from 'mobx-react';
import MxStore from '../../mobx/store';
import RenderUiLoadable from '../../routes/components/renderUi';
import BgUi from '../../resources/bg/bgUi';
import UiPosition from '../common/uiPosition';
import Draggable from './draggable';


@observer
class Canvas extends React.Component<any, any> {
  render() {
    return (
      <BgUi {...MxStore.component.bg}>
        {MxStore.ui.map(
          (data: {
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
          }, index: number) => {
            return MxStore.choose === index ? (
              <Draggable{...data.position} index={index} key={index} uiData={{ ...data }}>
                <RenderUiLoadable {...data}/>
              </Draggable>
            ) : (
              <UiPosition
                key={index}
                onClick={() => MxStore.chooseUi(data, index)}
                {...data.position}
              >
                <div style={{ pointerEvents: 'none', userSelect: 'none' }}>
                  <RenderUiLoadable {...data}/>
                </div>
              </UiPosition>
            );
          },
        )}
      </BgUi>
    );
  }
}

export default Canvas;
