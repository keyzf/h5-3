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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  // 动画移动
  transform: rotate(${props => props.rotate + "deg"});
  // 定位
  left: ${props => props.left + "px"};
  top: ${props => props.top + "px"};
  z-index: ${props => props.zIndex};
  // 长宽
  width: ${props => props.width + "px"};
  height: ${props => props.height + "px"};

  overflow: hidden;
`;

export default RenderStyle;
