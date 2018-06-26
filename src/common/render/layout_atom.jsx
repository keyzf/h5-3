import styled from "styled-components";

export const RenderBgAtom = styled.div`
  position: relative;
  // 宽度
  width: 320px;
  height: ${props => (props.fixed ? "100vh" : "auto")};
   ${props => (props.fixed ? "overflow: hidden" : "")};
  // 背景图片 如果不附加判断，则无法显示渐变
  background-color: ${props => (props.color ? props.color : null)};
  background-image: ${props => (props.img ? "url(" + props.img + ")" : null)};
  background-repeat: ${props => (props.repeat ? "repeat-y" : "no-repeat")};
  background-attachment: local;
  background-size: 100%;
  margin: auto;

`;
