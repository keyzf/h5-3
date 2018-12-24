import * as React from "react";
import {Icon} from "antd";
import {css} from "glamor";

const MyIcon = Icon.createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_629831_oa9qcw8na2.js" // 在 iconfont.cn 上生成
});

const FontIcon = React.memo((props: any) => {
    const media = css({
        "@media (min-width: 10px) and (max-width: 575px)": {
            fontSize: `${(props.data.position.width / 320) * 100}vw !important`
        },
        "@media (min-width: 576px) and (max-width: 767.98px)": {
            fontSize: `${(props.data.position.width / 320) * 100}vw !important`
        },
        "@media  (min-width: 768px) and (max-width: 991.98px)": {
            fontSize: `${(props.data.position.width / 320) * 100}vw !important`
        },
        "@media (min-width: 992px) and (max-width: 1199.98px)": {
            fontSize: `${props.data.position.width}px !important`
        },
        "@media (min-width: 1200px)": {
            fontSize: `${props.data.position.width}px !important`
        }
    });
    return (
        <MyIcon
            type={`${props.data.base.img}`}
            {...media}
            style={{
                color: `${props.data.base.color}`,
                transform: "scale(1) rotate(0deg)"
            }}
        />
    );
});

export default FontIcon;
