import * as React from "react";
import { Icon, Popover, Row, Col, Tooltip } from "antd";
import { SketchPicker } from "react-color";
import { css } from "emotion";
import Store from "../../typing/store";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useCallback } from "react";

const ToolBarGrid = React.memo(() => {
  const dispatch = useDispatch();
  const { color } = useMappedState(
    useCallback(
      (state: Store) => ({
        color: state.baseline.color
      }),
      []
    )
  );

  const baseLineInit = () => {
    dispatch({
      type: "BASELINE_VALUE",
      payload: { v: [], h: [], color: "#ff5722" }
    });
  };

  const baseLineAdd = (type: string) => {
    dispatch({ type: "BASELINE_ADD", payload: type });
  };

  const changeColor = (color: { hex: string }) => {
    dispatch({ type: "BASELINE_VALUE", payload: { color: color.hex } });
  };

  const colorCard = (
    <SketchPicker color={color} onChangeComplete={changeColor} />
  );

  const uiHover = css({
    padding: "5px 6px",
    transition: "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1)",
    backgroundColor: "0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    willChange: "box-shadow, transform",
    cursor: "pointer",

    "&:hover": {
      padding: "5px 6px",
      background: "rgba(221, 221, 221, 0.21)",
      cursor: "pointer"
    }
  });
  /**
   * @desc 拓展内容
   */
  const content = (
    <div>
      <Popover placement="left" content={colorCard} trigger="click">
        <div {...uiHover}>
          <Row gutter={16}>
            <Col span={5}>
              <Icon
                type="bg-colors"
                theme="outlined"
                style={{ marginRight: "10px" }}
              />
            </Col>
            <Col span={19}>
              <div
                style={{
                  height: "20px",
                  width: "100%",
                  background: `${color}`
                }}
              />
            </Col>
          </Row>
        </div>
      </Popover>
      <div {...uiHover}>
        <Row gutter={16}>
          <Col span={5}>
            <Icon type="border-horizontal" theme="outlined" />
          </Col>
          <Col span={19} onClick={() => baseLineAdd("h")}>
            竖排基准线
          </Col>
        </Row>
      </div>
      <div {...uiHover}>
        <Row gutter={16}>
          <Col span={5}>
            <Icon type="border-verticle" theme="outlined" />
          </Col>
          <Col span={19} onClick={() => baseLineAdd("v")}>
            横排基准线
          </Col>
        </Row>
      </div>
      <div {...uiHover}>
        <Row gutter={16}>
          <Col span={5}>
            <Icon type="rest" theme="outlined" />
          </Col>
          <Col span={19} onClick={baseLineInit}>
            清除基准线
          </Col>
        </Row>
      </div>
    </div>
  );
  return (
    <React.Fragment>
      <Popover placement="left" content={content} trigger="click">
        <Tooltip placement="right" title="基准线">
          <Icon
            type="appstore"
            theme="outlined"
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "auto",
              padding: "10px 0"
            }}
          />
        </Tooltip>
      </Popover>
    </React.Fragment>
  );
});

export default ToolBarGrid;
