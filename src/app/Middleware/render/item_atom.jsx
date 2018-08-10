import styled from 'styled-components';

export const ItemAtom = styled.div`
  position: absolute;
  transform: rotate(${props => props.rotate + 'deg'});
  left: ${props => props.left + 'px'};
  top: ${props => props.top + 'px'};
  // 长宽
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  // 动画移动
  touch-action: none;
  // 单背景色
  background: ${props => props.bgColor};
  background-repeat: ${props => (props.stretching ? 'repeat' : 'no-repeat')};
  background-image: ${props => (props.img ? 'url(' + props.img + ')' : null)};
  background-size: ${props => (props.tiling ? '100%' : 'contain')};
  overflow: hidden;
`;
