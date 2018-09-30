import * as React from "react";
import { observer } from "mobx-react";
import RenderUiLoadable from "../../routes/components/renderUi";
import BgUi from "../../resources/bg/bgUi";
import UiPosition from "../common/uiPosition";
import Draggable from "./draggable";
import store from "../../mobx/store";

@observer
class Canvas extends React.Component<any, any> {
  render() {
    return (
      <BgUi {...store.component.bg}>
        {store.common.ui.map((data: any, index: number) => {
          return store.visual.choose === index ? (
            <Draggable {...data.position} key={index}>
              <RenderUiLoadable {...data} />
            </Draggable>
          ) : (
            <UiPosition
              key={index}
              onClick={() => store.chooseUi(index)}
              {...data.position}
            >
              <div style={{ pointerEvents: "none", userSelect: "none" }}>
                <RenderUiLoadable {...data} />
              </div>
            </UiPosition>
          );
        })}
      </BgUi>
    );
  }
}

export default Canvas;
