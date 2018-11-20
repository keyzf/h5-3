import * as React from "react";
import { Icon, Popover, Row, Col, Tooltip } from "antd";
import { CirclePicker } from "react-color";
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
    dispatch({ type: "BASELINE_VALUE", payload: { v: [], h: [], color: "#ff5722" } });
  };

  const baseLineAdd = (type: string) => {
    dispatch({ type: "BASELINE_ADD", payload: type });
  };

  const changeColor = (color: { hex: string }) => {
    dispatch({ type: "BASELINE_VALUE", payload: { color: color.hex } });
  };


  const colorCard = (
    <CirclePicker
      color={color}
      onChangeComplete={changeColor}
    />
  );
  /**
   * @desc 拓展内容
   */
  const content = (
    <div>
      <Popover placement="left" content={colorCard} trigger="click">
        <div className={style.uiHover}>
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
      <div className={style.uiHover}>
        <Row gutter={16}>
          <Col span={5}>
            <Icon type="border-horizontal" theme="outlined"/>
          </Col>
          <Col span={19} onClick={() => baseLineAdd("h")}>
            竖排基准线
          </Col>
        </Row>
      </div>
      <div className={style.uiHover}>
        <Row gutter={16}>
          <Col span={5}>
            <Icon type="border-verticle" theme="outlined"/>
          </Col>
          <Col span={19} onClick={() => baseLineAdd("v")}>
            横排基准线
          </Col>
        </Row>
      </div>
      <div className={style.uiHover}>
        <Row gutter={16}>
          <Col span={5}>
            <Icon type="rest" theme="outlined"/>
          </Col>
          <Col span={19} onClick={baseLineInit}>
            清除基准线
          </Col>
        </Row>
      </div>
    </div>
  );
  return (
    <Popover placement="left" content={content} trigger="click">
      <Tooltip placement="right" title="基准线">
        <div className={style.center}>
          <Icon type="appstore" theme="outlined" style={{ fontSize: "20px" }}/>
        </div>
      </Tooltip>
    </Popover>
  );
});

const style = {
  center: css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 10px 0;
  `,
  uiHover: css`
    padding: 5px 6px;
    transition: box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1),
      background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1),
      -webkit-box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1);
    will-change: box-shadow, transform;
    cursor: pointer;
    &:hover {
      padding: 5px 6px;
      background: rgba(221, 221, 221, 0.21);
      cursor: pointer;
    }
  `
};

export default ToolBarGrid;
