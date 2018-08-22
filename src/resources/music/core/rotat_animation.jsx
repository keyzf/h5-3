import styled, { keyframes } from 'styled-components';

// 设置动画
const rotate360 = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
  
`;

// 设置组件
export const RotateAtom = styled.div`
  animation: ${rotate360} 2s linear infinite;
`;
