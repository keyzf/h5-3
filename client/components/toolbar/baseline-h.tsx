import * as React from "react";
import Draggable from "react-draggable";
import Store from "../../typing/store";
import { useCallback } from "react";
import { useMappedState } from "redux-react-hook";


const BaselineH = React.memo(() => {
  const { h, color } = useMappedState(
    useCallback(
      (state: Store) => ({
        h: state.baseline.h,
        color: state.baseline.color
      }),
      []
    )
  );
  return (
    <div>
      {h.map((data: number, index: number) => {
        return (
          <div
            style={{
              position: "absolute",
              zIndex: 1000,
              left: `${50 + index}px`,
              cursor: "col-resize"
            }}
            key={index}
          >
            <Draggable axis="x">
              <div
                style={{
                  height: "10000px",
                  width: "2px",
                  background: `${color}`
                }}
              />
            </Draggable>
          </div>
        );
      })}
    </div>
  );
});


export default BaselineH;
