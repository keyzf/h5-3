import * as React from "react";
import { Consumer } from "../context/context";
import BgUi from "../resources/bg/bgUi";
import Draggable from "../components/visual/draggable";
import render_ui from "../components/renderUi";
import UiPosition from "../components/uiPosition";

class Canvas extends React.PureComponent<any, any> {
  render() {
    return (
      <Consumer>
        {({ bg, ui, editor, draggable, clickUi ,optionUi}) => (
          <BgUi {...bg}>
            {ui.map(
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

                return editor.index === index ? (
                  <Draggable
                    {...data.position}
                    draggable={draggable}
                    data={data}
                    index={index}
                    key={index}
                    optionUi={optionUi}
                  >
                    {render_ui(data)}
                  </Draggable>
                ) : (
                  <UiPosition
                    key={index}
                    // @ts-ignore
                    onClick={() => clickUi(data, index)}
                    {...data.position}
                  >
                    <div style={{ pointerEvents: "none", userSelect: "none" }}>
                      {render_ui(data)}
                    </div>
                  </UiPosition>
                );
              }
            )}
          </BgUi>
        )}
      </Consumer>
    );
  }
}

export default Canvas;
