import styled from "styled-components";

export const VideotAtom = styled.div`
  @media (min-width: 10px) and (max-width: 575px) {
    height: ${props => (props.height / 320) * 100 + "vw"};
    width: ${props => (props.width / 320) * 100 + "vw"};
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    height: ${props => (props.height / 320) * 100 + "vw"};
    width: ${props => (props.width / 320) * 100 + "vw"};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    height: ${props => (props.height / 320) * 100 + "vw"};
    width: ${props => (props.width / 320) * 100 + "vw"};
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    height: ${props => props.height + "px"};
    width: ${props => props.width + "px"};
  }

  @media (min-width: 1200px) {
    height: ${props => props.height + "px"};
    width: ${props => props.width + "px"};
  }
`;
