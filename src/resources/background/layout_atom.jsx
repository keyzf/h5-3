import styled from 'styled-components';

export const BgLayoutAtom = styled.div`
  // 宽度
  width: 100%;
  height: ${props =>
    props.fixed ? '100%' : props.height ? props.height + 'px' : 'auto'};
  min-height: 600px;
  // 背景图片 如果不附加判断，则无法显示渐变
  background-color: ${props => (props.color ? props.color : null)};
  background-image: ${props => (props.img ? 'url(' + props.img + ')' : null)};
  background-repeat: repeat;

  margin: auto;
  overflow: hidden;
`;
