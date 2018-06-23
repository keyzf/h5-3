import styled from 'styled-components';

/**
 * 组件选中时的状态
 * @type {StyledComponentClass<JSX.IntrinsicElements["div"], any, JSX.IntrinsicElements["div"]>}
 */
const UIChoose = styled.div`
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
/**
 * 组件未被选中时的状态
 * @type {StyledComponentClass<JSX.IntrinsicElements["div"], any, JSX.IntrinsicElements["div"]>}
 */
const NoChoose = styled.div`
  // 长宽
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  // 动画移动
  touch-action: none;
  transform: translate(
    ${props => props.transformX + 'px'},
    ${props => props.transformY + 'px'}
  );
  // 单背景色
  background: ${props => props.bgColor};
  background-repeat: ${props => (props.stretching ? 'repeat' : 'no-repeat')};
  background-image: ${props => (props.img ? 'url(' + props.img + ')' : null)};
  background-size: ${props => (props.tiling ? '100%' : 'contain')};
  overflow: hidden;
`;
export { UIChoose, NoChoose };
