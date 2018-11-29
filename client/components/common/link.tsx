import * as React from "react";
import copy from 'copy-to-clipboard';
import {message} from "antd";

const LinkMapOphoneOweb = React.memo((props: any) => {
    const copys = () => {
        copy(props.link);
        message.success("淘口令复制成功，请打开淘宝APP/淘宝网使用");
    };


    return (
        <React.Fragment>
            {props.type === "phone" ? (
                <a href={`tel:${props.link}`}>
                    <div style={{pointerEvents: "none", userSelect: "none"}}>
                        {props.children}
                    </div>
                </a>
            ) : (
                ""
            )}
            {props.type === "web" ? (
                <a href={`${props.link}`}>
                    <div style={{pointerEvents: "none", userSelect: "none"}}>
                        {props.children}
                    </div>
                </a>
            ) : (
                ""
            )}
            {props.type === "order" ? (
                <div onClick={copys}>
                    <div style={{pointerEvents: "none", userSelect: "none"}}>
                        {props.children}
                    </div>
                </div>
            ) : (
                ""
            )}
            {props.type === "map" ? (
                <a href={`geopoint:${props.link}`}>
                    <div style={{pointerEvents: "none", userSelect: "none"}}>
                        {props.children}
                    </div>
                </a>
            ) : (
                ""
            )}
            {props.type === "choose" ? (

                props.children

            ) : (
                ""
            )}
        </React.Fragment>
    );
});


export default LinkMapOphoneOweb;