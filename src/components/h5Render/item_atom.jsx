import styled from 'styled-components';

export const ItemAtom = styled.div`
  position: absolute;
  z-index: ${props => props.zIndex};
  transform: rotate(${props => props.rotate + 'deg'});
  overflow: hidden;
  box-sizing: border-box;

  @media (min-width: 0) and (max-width: 575.98px) {
    left: ${props => (props.left / 320) * 100 + 'vw'};
    top: ${props => (props.top / 320) * 100 + 'vw'};
    width: ${props => (props.width / 320) * 100 + 'vw'};
    height: ${props => (props.height / 320) * 100 + 'vw'};
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    left: ${props => (props.left / 320) * 100 + 'vw'};
    top: ${props => (props.top / 320) * 100 + 'vw'};
    width: ${props => (props.width / 320) * 100 + 'vw'};
    height: ${props => (props.height / 320) * 100 + 'vw'};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    left: ${props => (props.left / 320) * 100 + 'vw'};
    top: ${props => (props.top / 320) * 100 + 'vw'};
    width: ${props => (props.width / 320) * 100 + 'vw'};
    height: ${props => (props.height / 320) * 100 + 'vw'};
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    left: ${props => props.left + 'px'};
    top: ${props => props.top + 'px'};
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
  }

  @media (min-width: 1200px) {
    left: ${props => props.left + 'px'};
    top: ${props => props.top + 'px'};
    width: ${props => props.width + 'px'};
    height: ${props => props.height + 'px'};
  }
`;
