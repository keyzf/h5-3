import * as React from "react";
import { Icon } from "antd";


const Picture36 = React.memo((props: { data: any }) => {
  return (
    <span>
      <Icon
        type={props.data.base.img}
        style={{
          color: `${props.data.base.color}`,
          fontSize: `${props.data.position.width}px`,
          transform: "scale(1) rotate(0deg)"
        }}
      />
</span>
  );
});

export default Picture36;
