import styled from "react-emotion";

export const ButtonAtom = styled("div")<{
  bg_color: string;
  font_color: string;
  radius: number;
  img: string;
  width: number;
  height: number;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  outline: none;
  border: none;
  background: ${props => props.bg_color};
  color: ${props => props.font_color};
  border-radius: ${props => (props.radius ? props.radius + "px" : "null")};
  background-repeat:no-repeat;
  background-image: ${props => (props.img ? "url(" + props.img + ")  " : null)};
  background-size: 100%;
  overflow: hidden;

`;
