import * as React from "react";
import { Motion, spring } from "react-motion";
import { Row, Col, Icon } from "antd";
import FormItemAdd from "./add";


interface State {
  topDeltaY: number,
  mouseY: number,
  isPressed: boolean,
  originalPosOfLastPressed: number,
}

function reinsert(arr:any, from:any, to:any) {
  const _arr = arr.slice(0);
  const val = _arr[from];
  _arr.splice(from, 1);
  _arr.splice(to, 0, val);
  return _arr;
}

function clamp(n:any, min:any, max:any) {
  return Math.max(Math.min(n, max), min);
}

class FormItemList extends React.PureComponent<any, State> {

  state = {
    topDeltaY: 0,
    mouseY: 0,
    isPressed: false,
    originalPosOfLastPressed: 0
  };

  componentDidMount() {
    window.addEventListener("touchmove", this.handleTouchMove);
    window.addEventListener("touchend", this.handleMouseUp);
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseup", this.handleMouseUp);
  };

  handleTouchStart = (key:any, pressLocation:any, e:any) => {
    this.handleMouseDown(key, pressLocation, e.touches[0]);
  };

  handleTouchMove = (e:any) => {
    e.preventDefault();
    this.handleMouseMove(e.touches[0]);
  };

  handleMouseDown = (pos:any, pressY:any, { pageY }:any) => {
    this.setState({
      topDeltaY: pageY - pressY,
      mouseY: pressY,
      isPressed: true,
      originalPosOfLastPressed: pos
    });
  };

  handleMouseMove = ({ pageY }:any) => {
    const { isPressed, topDeltaY, originalPosOfLastPressed } = this.state;
    const order = this.props.order;
    if (isPressed) {
      const mouseY = pageY - topDeltaY;
      const currentRow = clamp(Math.round(mouseY / 5), 0, 100 - 1);
      let newOrder = order;

      if (currentRow !== order.indexOf(originalPosOfLastPressed)) {
        newOrder = reinsert(order, order.indexOf(originalPosOfLastPressed), currentRow);
      }
      this.props.changeFun({ type: "FORM_BASE", payload: { item: newOrder } });
      this.setState({ mouseY: mouseY });
    }
  };

  handleMouseUp = () => {
    this.setState({ isPressed: false, topDeltaY: 0 });
  };

  del = (index:any) => {
    this.props.changeFun({ type: "FORM_DEL", payload: index });
  };


  render() {
    const order = this.props.order;
    const { mouseY, isPressed, originalPosOfLastPressed } = this.state;
    const springConfig = { stiffness: 300, damping: 50 };

    return (
      <React.Fragment>
        <Row gutter={16} style={{ padding: "10px" }}>
          {order.map((i:any, index:any) => {
            const style = originalPosOfLastPressed === i && isPressed
              ? {
                scale: spring(1.1, springConfig),
                shadow: spring(16, springConfig),
                y: mouseY
              }
              : {
                scale: spring(1, springConfig),
                shadow: spring(1, springConfig),
                y: spring(order.indexOf(i) * 3, springConfig)
              };
            return (
              <Motion style={style} key={index}>
                {({ scale, shadow, y }:any) =>
                  <div
                    onMouseDown={this.handleMouseDown.bind(null, i, y)}
                    onTouchStart={this.handleTouchStart.bind(null, i, y)}
                    style={{
                      boxShadow: `rgba(0, 0, 0, 0.2) 0px ${shadow}px ${2 * shadow}px 0px`,
                      transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                      WebkitTransform: `translate3d(0, ${y}px, 0) scale(${scale})`,
                      zIndex: i === originalPosOfLastPressed ? 99 : i
                    }}>
                    <Col span={8}>
                      <Icon type="bars"/>
                    </Col>
                    <Col span={10} style={{
                      pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}>
                      {i.title}
                    </Col>
                    <Col span={6}
                         style={{
                           display: "flex",
                           justifyContent: "center",
                           alignItems: "center"

                         }}>
                      <Icon type="edit" theme="outlined" style={{ marginRight: "10px" }}
                            onClick={() => this.props.choose(index)}/>
                      <Icon type="delete" theme="outlined" onClick={this.del.bind(this, index)}/>
                    </Col>
                  </div>
                }
              </Motion>
            );
          })}
        </Row>
        <FormItemAdd/>
      </React.Fragment>
    );
  }
}

export default FormItemList;


