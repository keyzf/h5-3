import React, {useCallback} from "react";
import styled from "react-emotion";
import Store from "../../typing/store";
import {useMappedState} from "redux-react-hook";


const BackgroundUI = React.memo((props: { children: object }) => {
    const {base} = useMappedState(useCallback((state: Store) => ({
        base: state.bg.base
    }), []));

    return (
        <BgAtom {...base}>
            {props.children}
        </BgAtom>
    );
});


type ImageProps = {
    color: string,
    img: string,
    height: number;
}

const BgAtom = styled("div")<ImageProps>`
  position: relative;
  
  box-sizing: border-box;
  
  min-width: 320px;
  
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


export default BackgroundUI;
