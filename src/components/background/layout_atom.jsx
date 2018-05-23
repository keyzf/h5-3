import styled from "styled-components";

export const BgLayoutAtom = styled.div`
  // 宽度
  width: 100%;
  height: 100%;
  // 背景图片 如果不附加判断，则无法显示渐变
  background-color:  ${props => props.color ? props.color : null};
  background-image: ${props => props.img ? "url(" + props.img + ")" : null};
  background-repeat:${props => props.repeat ? "repeat-y" : "no-repeat"};
  ${props => props.attachment ? "background-position:top;" : "background-attachment:scroll"};
  background-size: 100%;
`;