import * as React from "react";
import { Carousel } from "antd";
import styled from "react-emotion";
import LinkMapOphoneOweb from "../../../../components/common/link";

type style = {
  width: number;
  height: number;

};

const Picture1 = React.memo((props: { data: { base: any; position: any } }) => {
  const RenderStyle = styled("div")<style>`
    position: relative;
    overflow: hidden;

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

  return (
    <RenderStyle

      height={props.data.position.height}
      width={props.data.position.width}
    >
      <Carousel autoplay>
        {props.data.base.map((data: any, index: any) => {
          return (
            <LinkMapOphoneOweb type={data.link.type} link={data.link.url}>
              <img
                style={{ borderRadius: `${data.radius}px` }}
                src={data.crop}
                key={index}
                width={"100%"}
                height={"100%"}
              />
            </LinkMapOphoneOweb>
          );
        })}
      </Carousel>
    </RenderStyle>
  );
});

export default Picture1;
