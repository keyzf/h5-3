import styled from 'styled-components';

export const ImgAtom = styled.div`
  outline: none;
  border: none;
  border-radius: ${props => props.radius + 'px'};
  overflow: hidden;
  margin: auto;
`;

export const CarouselAtom = styled.div`

  
  @media (min-width: 0) and (max-width: 575px) {
     width: ${props => (props.width / 320) * 100 + 'vw'};
  height:${props => (props.height / 320) * 100 + 'vw'};
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
     width: ${props => (props.width / 320) * 100 + 'vw'};
  height:${props => (props.height / 320) * 100 + 'vw'};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
     width: ${props => (props.width / 320) * 100 + 'vw'};
  height:${props => (props.height / 320) * 100 + 'vw'};
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
  width: ${props => props.width + 'px'};
  height:${props => props.height + 'px'};

  }

  @media (min-width: 1200px) {
  width: ${props => props.width + 'px'};
  height:${props => props.height + 'px'};
  }
  background: url("${props => props.img}") no-repeat;
  outline: none;
  border: none;
  border-radius: ${props => props.radius + 'px'};
  background-size:cover;
  margin: auto;
`;
