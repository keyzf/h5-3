import * as React from "react";
import { Icon } from "antd";

const MyIcon = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_629831_zihaaebjxu.js" // 在 iconfont.cn 上生成
});

const FontIcon = React.memo((props: any) => {
  return (
    <MyIcon
      type={`${props.data.base.img}`}
      style={{
        color: `${props.data.base.color}`,
        fontSize: `${props.data.position.width}px`,
        transform: "scale(1) rotate(0deg)"
      }}
    />
  );
});

export default FontIcon;
