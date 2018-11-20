import * as React from "react";
import Draggable from "react-draggable";
import Store from "../../typing/store";
import { useCallback } from "react";
import { useMappedState } from "redux-react-hook";


const BaselineV = React.memo(() => {
  const { v, color } = useMappedState(
    useCallback(
      (state: Store) => ({
        v: state.baseline.v,
        color: state.baseline.color
      }),
      []
    )
  );
  return (
    <div>
      {
        v.map((data: number, index: number) => {
          return (
            <div style={{ position: "absolute", zIndex: 1000, top: `${50 + index}px`, cursor: "row-resize" }}
                 key={index}>
              <Draggable axis="y">
                <div style={{
                  height: "2px",
                  width: "calc(100vw - 650px)",
                  background: `${color}`
                }}/>
              </Draggable>
            </div>
          );
        })
      }
    </div>
  );
});


export default BaselineV;
