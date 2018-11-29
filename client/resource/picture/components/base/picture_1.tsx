import * as React from "react";
import {Carousel} from "antd";
import LinkMapOphoneOweb from "../../../../components/common/link";

const Picture1 = React.memo((props: { data: { base: any, position: any } }) => {
    return (
        <div style={{
            position: "relative",
            overflow: "hidden",
            width: `${props.data.position.width}px`,
            height: `${props.data.position.height}px`
        }}>
            <Carousel autoplay>
                {props.data.base.map((data: any, index: any) => {
                    return (
                        <LinkMapOphoneOweb
                            type={data.link.type}
                            link={data.link.url}
                        >
                            <img
                                style={{borderRadius: `${data.radius}px`}}
                                src={data.crop}
                                key={index}
                                width={"100%"}
                                height={"100%"}
                            />
                        </LinkMapOphoneOweb>
                    );
                })}
            </Carousel>
        </div>
    );
});

export default Picture1;
