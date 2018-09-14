import styled from 'styled-components';

export const ButtonAtom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 575px) {
    // 宽度
    width: ${props => (props.width / 320) * 100 + 'vw'};
    height: ${props => (props.height / 320) * 100 + 'vw'};
  }
  @media (min-width: 576px) {
    // 宽度
    width: ${props => (props.width / 320) * 100 + 'vw'};
    height: ${props => (props.height / 320) * 100 + 'vw'};
  }

  @media (min-width: 768px) {
    // 宽度
    width: ${props => (props.width / 320) * 100 + 'vw'};
    height: ${props => (props.height / 320) * 100 + 'vw'};
  }

  @media (min-width: 992px) {
    // 宽度
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
  }

  @media (min-width: 1200px) {
    // 宽度
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
  }

  outline: none;
  border: none;

  background: ${props => props.bg_color};
  color: ${props => props.font_color};
  // 圆角
  border-radius: ${props => (props.radius ? props.radius + 'px' : 'null')};

  // 单背景色
  background-repeat: ${props => (props.stretching ? 'repeat' : 'no-repeat')};
  background-image: ${props => (props.img ? 'url(' + props.img + ')' : null)};
  background-size: ${props => (props.tiling ? '100%' : 'contain')};
  overflow: hidden;
  margin: auto;
`;
