import styled from 'styled-components';

export const RenderBgAtom = styled.div`
  position: relative;
  // 宽度
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  height: ${props =>
    props.fixed ? '100%' : props.height ? props.height + 'px' : 'auto'};
  ${props => (props.fixed ? 'overflow: auto' : '')};
  // 背景图片 如果不附加判断，则无法显示渐变
  background-color: ${props => (props.color ? props.color : null)};
  background-image: ${props => (props.img ? 'url(' + props.img + ')' : null)};
  background-repeat: repeat;
  background-attachment: local;
  overflow: auto;
`;
