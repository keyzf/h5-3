import styled from "react-emotion";

type style = {
  width: number;
  height: number;
  rotate: number;
  left: number;
  top: number;
  zIndex: number;
  length: number;
};

const FormStyle = styled("span")<style>`
  @media (min-width: 10px) and (max-width: 575px) {
    margin-bottom: ${props =>
      ((props.height - props.length * 69) / props.length / 320) * 100 + "vw"};
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    margin-bottom: ${props =>
      ((props.height - props.length * 69) / props.length / 320) * 100 + "vw"};
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    margin-bottom: ${props =>
      ((props.height - props.length * 69) / props.length / 320) * 100 + "vw"};
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
  }

  @media (min-width: 1200px) {
  }
`;

export default FormStyle;
