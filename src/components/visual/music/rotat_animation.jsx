import styled, { keyframes } from 'styled-components';

// 设置动画
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

// 设置组件
export const RotateAtom = styled.div`
  position: absolute;
  z-index: 1000;
  padding: 2rem 1rem;
  font-size: 1.2rem;
  top: 5px;
  animation: ${rotate360} 2s linear infinite;
`;
