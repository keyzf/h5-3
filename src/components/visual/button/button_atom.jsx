import styled from 'styled-components';

export const ButtonAtom = styled.button`
  // 宽度
  width: ${props => (props.width ? props.width + 'px' : '100%')};
  //高度
  height: ${props => (props.height ? props.height + 'px' : '30px')};
  border: none;
  margin: 5px 0;
  // 圆角
  border-radius: ${props => (props.radius ? props.radius + 'px' : 'null')};
  // 阴影
  box-shadow: ${props =>
    props.shadow ? props.shadow : '0 0 15px rgba(0, 0, 0, 0.15)'};
  // 定位
  position: ${props =>
    props.top !== 0 ||
    props.left !== 0 ||
    props.right !== 0 ||
    props.bottom !== 0
      ? 'relative'
      : ''};
  // 层级
  z-index: ${props => props.depth};
  // 定位位置
  top: ${props => (props.top === 0 ? null : props.top + 'px')};
  left: ${props => (props.left === 0 ? null : props.left + 'px')};
  right: ${props => (props.right === 0 ? null : props.right + 'px')};
  bottom: ${props => (props.bottom === 0 ? null : props.bottom + 'px')};
  // 内边距
  padding-left: ${props => props.pl + 'px'};
  padding-right: ${props => props.pr + 'px'};
  padding-bottom: ${props => props.pb + 'px'};
  padding-top: ${props => props.pt + 'px'};
  // 单背景色
  background: ${props => props.bgColor};
  background-repeat: ${props => (props.repeat ? 'repeat' : 'no-repeat')};
  background-image: ${props => (props.img ? 'url(' + props.img + ')' : null)};
  background-size: 100%;
`;
