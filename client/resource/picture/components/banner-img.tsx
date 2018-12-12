import * as React from "react";

const BannerImg = React.memo((props: any) => {
  return (
    <img
      src={`${props.data.base.img}`}
      alt={"img"}
      width={"100%"}
      height={"100%"}
    />
  );
});

export default BannerImg;
