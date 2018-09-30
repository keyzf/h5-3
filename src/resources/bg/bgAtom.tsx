import styled from "../../../styled_c";

const BgAtom = styled<{ img: string, color: string, height: number },"div">("div")`
  position: relative;
  box-sizing: border-box;
  background-color: ${props => props.color};
  background-image: ${props => (props.img ? "url(" + props.img + ")" : null)};
  @media (min-width: 10px) and (max-width: 575px) {
    height: ${props => props.height / 320 * 100 + "vw"};
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    height: ${props => props.height / 320 * 100 + "vw"};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    height: ${props => props.height / 320 * 100 + "vw"};
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    height: ${props => props.height + "px"};
  }

  @media (min-width: 1200px) {
    height: ${props => props.height + "px"};
  }
`;

export default BgAtom;
