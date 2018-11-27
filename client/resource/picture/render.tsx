import * as React from "react";
import Picture0 from "./components/base/picture_0";
import Picture1 from "./components/base/picture_1";
import Picture36 from "./components/icon/picture_36";


const RenderPicture = React.memo((props:any) => {
  const showPictureUi:any = (name:any) => {
    switch (name) {
      // 基础
      case 0:
        return <Picture0 data={props.data}/>;

      case 1:
        return <Picture1 data={props.data}/>;

      // 图标
      case  2:
        return <Picture36 data={props.data}/>;

      case 3:
        return <Picture36 data={props.data}/>;

      case  4:
        return <Picture36 data={props.data}/>;

      case  5:
        return <Picture36 data={props.data}/>;

      case  6:
        return <Picture36 data={props.data}/>;

      case  7:
        return <Picture36 data={props.data}/>;

      case 8:
        return <Picture36 data={props.data}/>;

      case  9:
        return <Picture36 data={props.data}/>;

      case  10:
        return <Picture36 data={props.data}/>;

      case  11:
        return <Picture36 data={props.data}/>;

      case  12:
        return <Picture36 data={props.data}/>;

      case  13:
        return <Picture36 data={props.data}/>;

      case  14:
        return <Picture36 data={props.data}/>;

      case  15:
        return <Picture36 data={props.data}/>;

      case  16:
        return <Picture36 data={props.data}/>;

      case  17:
        return <Picture36 data={props.data}/>;

      case 18:
        return <Picture36 data={props.data}/>;

      case 19:
        return <Picture36 data={props.data}/>;

      case 20:
        return <Picture36 data={props.data}/>;

      case 21:
        return <Picture36 data={props.data}/>;

      case 22:
        return <Picture36 data={props.data}/>;

      case 23:
        return <Picture36 data={props.data}/>;

      case 24:
        return <Picture36 data={props.data}/>;

      case 25:
        return <Picture36 data={props.data}/>;

      case 26:
        return <Picture36 data={props.data}/>;

      case 27:
        return <Picture36 data={props.data}/>;

      case 28:
        return <Picture36 data={props.data}/>;

      case 29:
        return <Picture36 data={props.data}/>;

      case 30:
        return <Picture36 data={props.data}/>;

      case  31:
        return <Picture36 data={props.data}/>;

    }
  };
  return showPictureUi(props.data.common.id);
});


export default RenderPicture;
