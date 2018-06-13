import styled from 'styled-components';

export const ButtonAtom = styled.button`
  // 宽度
  width: 100%;
  //高度
  height: 100%;
  border: none;
  margin: 5px 0;
  // 圆角
  border-radius: ${props => (props.radius ? props.radius + 'px' : 'null')};
  // 阴影
  box-shadow: ${props =>
    props.shadow ? props.shadow : '0 0 15px rgba(0, 0, 0, 0.15)'};
`;
