import * as React from "react";
import Draggable from "react-draggable";
import Store from "../../typing/store";
import { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";


const ContentHeight = React.memo(() => {
  const dispatch = useDispatch();
  const { height } = useMappedState(
    useCallback(
      (state: Store) => ({
        height: state.bg.base.height
      }),
      []
    )
  );
  const changeHeight = (height: number) =>
    dispatch({ type: "BG_VALUE", payload: { height: height } });


  const handleDrag = (e, ui) => {
    changeHeight(ui.deltaY + height);

  };


  const style = {
    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "auto",
      width: "180px",
      height: "30px",
      borderRadius: "20px",
      color: "white",
      background: "#47a8f9",
      boxShadow:
        "0px 0px 51px 0px rgba(0, 0, 0, 0.08), 0px 6px 18px 0px rgba(0, 0, 0, 0.05)"
    }
  };
  return (
    <div style={{ cursor: "s-resize", position: "relative", top: "715px" }}>
      <Draggable
        axis="y"
        onDrag={(e, ui) => handleDrag(e, ui)}
        bounds={{ top: 0, left: 0, right: 0, bottom: 10000 }}
      >
        <div style={style.button}>
          <div
            style={{
              pointerEvents: "none",
              userSelect: "none"
            }}
          >
            拖住调整高度:
            {Math.floor(height + 1 - 1)}
            px
          </div>
        </div>
      </Draggable>
    </div>
  );

});


export default ContentHeight;
