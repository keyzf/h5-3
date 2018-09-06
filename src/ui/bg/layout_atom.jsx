import styled from 'styled-components';

export const BgLayoutAtom = styled.div`
  position: relative;
  box-sizing: border-box;
  margin: auto;
  min-width: 320px;
  overflow: hidden;
  min-height: 100vh;
  background-color: ${props => (props.color ? props.color : null)};
  background-image: ${props => (props.img ? 'url(' + props.img + ')' : null)};
  @media (min-width: 10px) and (max-width: 575px) {
    height: ${props =>
      props.height ? (props.height / 320) * 100 + 'vw' : ' 100%'};
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    height: ${props =>
      props.height ? (props.height / 320) * 100 + 'vw' : ' 100%'};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    height: ${props =>
      props.height ? (props.height / 320) * 100 + 'vw' : ' 100%'};
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    height: ${props => (props.height ? props.height + 'px' : '100%')};
  }

  @media (min-width: 1200px) {
    height: ${props => (props.height ? props.height + 'px' : '100%')};
  }
`;
