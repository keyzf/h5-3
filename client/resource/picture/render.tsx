import * as React from "react";
import Picture0 from "./components/base/picture_0";
import Picture1 from "./components/base/picture_1";
import Picture36 from "./components/antd-icon";
import FontIcon from "./components/font-icon";
import BannerImg from "./components/banner-img";

const RenderPicture = React.memo((props: any) => {
  const showPictureUi: any = (name: any) => {
    switch (name) {
      // 基础
      case 0:
        return <Picture0 data={props.data} />;

      case 1:
        return <Picture1 data={props.data} />;

      // 图标
      case 2:
        return <Picture36 data={props.data} />;

      case 3:
        return <Picture36 data={props.data} />;

      case 4:
        return <Picture36 data={props.data} />;

      case 5:
        return <Picture36 data={props.data} />;

      case 6:
        return <Picture36 data={props.data} />;

      case 7:
        return <Picture36 data={props.data} />;

      case 8:
        return <Picture36 data={props.data} />;

      case 9:
        return <Picture36 data={props.data} />;

      case 10:
        return <Picture36 data={props.data} />;

      case 11:
        return <Picture36 data={props.data} />;

      case 12:
        return <Picture36 data={props.data} />;

      case 13:
        return <Picture36 data={props.data} />;

      case 14:
        return <Picture36 data={props.data} />;

      case 15:
        return <Picture36 data={props.data} />;

      case 16:
        return <Picture36 data={props.data} />;

      case 17:
        return <Picture36 data={props.data} />;

      case 18:
        return <Picture36 data={props.data} />;

      case 19:
        return <Picture36 data={props.data} />;

      case 20:
        return <Picture36 data={props.data} />;

      case 21:
        return <Picture36 data={props.data} />;

      case 22:
        return <Picture36 data={props.data} />;

      case 23:
        return <Picture36 data={props.data} />;

      case 24:
        return <Picture36 data={props.data} />;

      case 25:
        return <Picture36 data={props.data} />;

      case 26:
        return <Picture36 data={props.data} />;

      case 27:
        return <Picture36 data={props.data} />;

      case 28:
        return <Picture36 data={props.data} />;

      case 29:
        return <Picture36 data={props.data} />;

      case 30:
        return <Picture36 data={props.data} />;
      case 500:
      case 501:
      case 502:
      case 503:
      case 504:
      case 505:
      case 506:
      case 507:
      case 508:
      case 509:
      case 510:
      case 511:
      case 512:
      case 513:
      case 514:
      case 515:
      case 516:
      case 517:
      case 518:
      case 519:
      case 520:
      case 521:
      case 522:
      case 523:
      case 524:
      case 525:
      case 526:
      case 527:
      case 528:
      case 529:
      case 530:
      case 531:
      case 532:
      case 533:
      case 534:
      case 31:
        return <Picture36 data={props.data} />;
      case 1001:
      case 1002:
      case 1003:
      case 1004:
      case 1005:
      case 1006:
      case 1007:
      case 1008:
      case 1009:
      case 1010:
      case 1011:
      case 1012:
      case 1013:
      case 1014:
      case 1015:
      case 1016:
      case 1017:
      case 1018:
      case 1019:
      case 1020:
      case 1021:
      case 1022:
      case 1023:
      case 1024:
      case 1025:
      case 1026:
      case 1027:
      case 1028:
      case 1029:
      case 1030:
      case 1031:
      case 1032:
        return <BannerImg data={props.data} />;
      default:
        return <FontIcon data={props.data} />;
    }
  };
  return showPictureUi(props.data.common.id);
});

export default RenderPicture;
