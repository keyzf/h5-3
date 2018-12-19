import styled from "react-emotion";

type style = {
  width: number;
  height: number;
  rotate: number;
  left: number;
  top: number;
  zIndex: number;
};

const RenderStyle = styled("span")<style>`
  position: absolute;

  // 动画移动
  transform: rotate(${props => props.rotate + "deg"});
  // 定位
  outline: none;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  border-radius: 0;
  overflow: hidden;
  margin: auto;
  z-index: ${props => props.zIndex};

  @media (min-width: 10px) and (max-width: 575px) {
    height: ${props => (props.height / 320) * 100 + "vw"};
    width: ${props => (props.width / 320) * 100 + "vw"};
    left: ${props => (props.left / 320) * 100 + "vw"};
    top: ${props => (props.top / 320) * 100 + "vw"};
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    height: ${props => (props.height / 320) * 100 + "vw"};
    width: ${props => (props.width / 320) * 100 + "vw"};
    left: ${props => (props.left / 320) * 100 + "vw"};
    top: ${props => (props.top / 320) * 100 + "vw"};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    height: ${props => (props.height / 320) * 100 + "vw"};
    width: ${props => (props.width / 320) * 100 + "vw"};
    left: ${props => (props.left / 320) * 100 + "vw"};
    top: ${props => (props.top / 320) * 100 + "vw"};
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    height: ${props => props.height + "px"};
    width: ${props => props.width + "px"};
    left: ${props => props.left + "px"};
    top: ${props => props.top + "px"};
  }

  @media (min-width: 1200px) {
    height: ${props => props.height + "px"};
    width: ${props => props.width + "px"};
    left: ${props => props.left + "px"};
    top: ${props => props.top + "px"};
  }
`;

export default RenderStyle;
