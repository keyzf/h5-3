import * as React from 'react';
import { observer } from 'mobx-react';
import MxStore from '../../mobx/store';
import BgUi from '../../resources/bg/bgUi';
import RenderUiLoadable from '../../routes/components/renderUi';


@observer
class Canvas extends React.Component<any, any> {
  render() {
    return (
      <BgUi {...MxStore.component.bg}>
        {MxStore.common.ui.map(
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
            return <RenderUiLoadable {...data}/>;
          },
        )}
      </BgUi>
    );
  }
}

export default Canvas;
