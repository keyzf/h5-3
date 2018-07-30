import styled from 'styled-components';

export const ButtonAtom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  // 宽度
  width: 100%;
  height: 100%;
  outline: none;
  border: none;

  background: transparent;
  color: ${props => props.font_color};
  // 圆角
  border-radius: ${props => (props.radius ? props.radius + 'px' : 'null')};
  // 阴影
  box-shadow: ${props => (props.shadow ? props.shadow : '')};
`;
