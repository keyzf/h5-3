import * as React from "react";
import { Icon } from "antd";
import { css } from "glamor";

const Picture36 = React.memo((props: { data: any }) => {
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
    <span>
      <Icon
        {...media}
        type={props.data.base.img}
        style={{
          color: `${props.data.base.color}`,
          transform: "scale(1) rotate(0deg)"
        }}
      />
    </span>
  );
});

export default Picture36;
