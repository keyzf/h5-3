import styled from 'styled-components';

export const ImgAtom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  // 宽度
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};
  outline: none;
  border: none;
  border-radius: ${props => props.radius + 'px'};
  // 单背景色
  background-repeat: ${props => (props.stretching ? 'repeat' : 'no-repeat')};
  background-image: ${props => (props.img ? 'url(' + props.img + ')' : null)};
  background-size: 100%;
  overflow: hidden;

  margin: auto;
`;
