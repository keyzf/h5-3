import { css } from "emotion";

export const mediaPC = css`
  @media (min-width: 0) and (max-width: 575px) {
    display: none;
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    display: none;
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    display: none;
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
  }

  @media (min-width: 1200px) {
  }
`;

export const mediaMobile = css`
 @media (min-width: 0) and (max-width: 575px) {
  }

  @media (min-width: 576px) and (max-width: 767.98px) {
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    display: none;
  }

  @media (min-width: 1200px) {
    display: none;
  }
`;
