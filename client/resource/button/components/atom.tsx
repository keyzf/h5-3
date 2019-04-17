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

  @media (min-width: 0) and (max-width: 575px) {
    width: calc(${props => props.width} / 320 * 100vw);
    height: calc(${props => props.height} / 320 * 100vw);
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    width: calc(${props => props.width} / 320 * 100vw);
    height: calc(${props => props.height} / 320 * 100vw);
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    width: calc(${props => props.width} / 320 * 100vw);
    height: calc(${props => props.height} / 320 * 100vw);
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    width: ${props => props.width}px;
    height: ${props => props.height}px;
  }

  @media (min-width: 1200px) {
    width: ${props => props.width}px;
    height: ${props => props.height}px;
  }

  outline: none;
  border: none;
  background: ${props => props.bg_color};
  color: ${props => props.font_color};
  border-radius: ${props => (props.radius ? props.radius + "px" : "null")};
  background-repeat: no-repeat;
  background-image: ${props => (props.img ? "url(" + props.img + ")  " : null)};
  background-size: 100%;
  overflow: hidden;
`;
