import styled from 'styled-components';

// 组件处于选择状态时
export const UIChoose = styled.div`
  // 长宽
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  // 单背景色
  background: ${props => props.bgColor};
  background-repeat: ${props => (props.stretching ? 'repeat' : 'no-repeat')};
  background-image: ${props => (props.img ? 'url(' + props.img + ')' : null)};
  background-size: ${props => (props.tiling ? '100%' : 'contain')};
  overflow: hidden;
`;

// 组件处于未选择状态时
export const NoChoose = styled.div`
  // 定位
  transform: rotate(${props => props.rotate + 'deg'});
  left: ${props => props.left + 'px'};
  top: ${props => props.top + 'px'};
  z-index: ${props => props.zIndex}
  // 长宽
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  // 动画移动
  position: absolute;
  // 单背景色
  background: ${props => props.bgColor};
  background-repeat: ${props => (props.stretching ? 'repeat' : 'no-repeat')};
  background-image: ${props => (props.img ? 'url(' + props.img + ')' : null)};
  background-size: ${props => (props.tiling ? '100%' : 'contain')};
  overflow: hidden;
`;
