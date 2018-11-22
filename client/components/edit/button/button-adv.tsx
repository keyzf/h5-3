import * as React from "react";
import { Icon, Row, Col } from "antd";
import ButtonColor from "./color";
import Store from "../../../typing/store";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useCallback } from "react";

const ButtonAdv = React.memo(() => {
  const dispatch = useDispatch();
  const { ui, editList } = useMappedState(
    useCallback(
      (state: Store) => ({
        ui: state.ui,
        editList: state.edit.number
      }),
      []
    )
  );
  return (
    <div style={{ padding: "10px" }}>
      <p>背景色</p>
      <ButtonColor
        name={"bg"}
        fun={color =>
          dispatch({ type: "BUTTON_VALUE", payload: { bg_color: color.hex } })
        }
      >
        <Row gutter={16}>
          <Col span={8} style={{ marginBottom: "5px" }}>
            <div
              style={{
                height: "60px",
                border: "1px solid black",
                borderRadius: "3px",
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                background: ui[editList[0]].base.bg_color
              }}
            >
              <Icon type="bg-colors" theme="outlined" />
            </div>
          </Col>
        </Row>
      </ButtonColor>
      <br />

      <p>背景图</p>
      <Row gutter={16}>
        <Col span={8} style={{ marginBottom: "5px" }}>
          <div
            style={{
              height: "60px",
              border: "1px solid black",
              borderRadius: "3px",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center"
            }}
          >
            <Icon type="upload" theme="outlined" />
          </div>
        </Col>
      </Row>
    </div>
  );
});

export default ButtonAdv;
