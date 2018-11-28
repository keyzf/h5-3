import * as React from "react";
import Text0 from "./components/text_0";
import Text1 from "./components/text_1";
import Text3 from "./components/text_3";
import Text2 from "./components/base/text_2";
import Text4 from "./components/base/text_4";
import Text9 from "./components/base/text_9";
import Text8 from "./components/base/text_8";
import Text7 from "./components/base/text_7";
import Text6 from "./components/base/text_6";
import Text5 from "./components/base/text_5";
import Text29 from "./components/base/text_29";
import Text27 from "./components/base/text_27";
import Text28 from "./components/base/text_28";
import Text25 from "./components/base/text_25";
import Text26 from "./components/base/text_26";
import Text23 from "./components/base/text_23";
import Text24 from "./components/base/text_24";
import Text21 from "./components/base/text_21";
import Text22 from "./components/base/text_22";
import Text20 from "./components/base/text_20";
import Text18 from "./components/base/text_18";
import Text19 from "./components/base/text_19";
import Text16 from "./components/base/text_16";
import Text17 from "./components/base/text_17";
import Text14 from "./components/base/text_14";
import Text36 from "./components/base/text_36";
import Text15 from "./components/base/text_15";
import Text37 from "./components/base/text_37";
import Text12 from "./components/base/text_12";
import Text34 from "./components/base/text_34";
import Text13 from "./components/base/text_13";
import Text35 from "./components/base/text_35";
import Text10 from "./components/base/text_10";
import Text32 from "./components/base/text_32";
import Text11 from "./components/base/text_11";
import Text33 from "./components/base/text_33";
import Text30 from "./components/base/text_30";
import Text31 from "./components/base/text_31";
import Text3s from "./components/base/text_3";

interface Props {
    data: {
        common: {
            type: string;
            id: string | number;
        };
        base: {
            html: string;
            index: string;
            color: string;
            wordArt: string;
            link: string;
        };
    };
}

const RenderText = React.memo((props: Props) => {
    const showTextUi = (name: any) => {
        switch (name) {
            case 0:
                return <Text0 html={props.data.base.html}/>;
            case 1:
                return <Text1 html={props.data.base.html}/>;
            case 60:
                return <Text2 base={props.data.base}/>;
            case 61:
                return <Text3s base={props.data.base}/>;
            case 62:
                return <Text4 base={props.data.base}/>;
            case 63:
                return <Text5 base={props.data.base}/>;
            case 64:
                return <Text6 base={props.data.base}/>;
            case 65:
                return <Text7 base={props.data.base}/>;
            case 66:
                return <Text8 base={props.data.base}/>;
            case 67:
                return <Text9 base={props.data.base}/>;
            case 68:
                return <Text10 base={props.data.base}/>;
            case 69:
                return <Text11 base={props.data.base}/>;
            case 70:
                return <Text12 base={props.data.base}/>;
            case 71:
                return <Text13 base={props.data.base}/>;
            case 72:
                return <Text14 base={props.data.base}/>;
            case 73:
                return <Text15 base={props.data.base}/>;
            case 74:
                return <Text16 base={props.data.base}/>;
            case 75:
                return <Text17 base={props.data.base}/>;
            case 76:
                return <Text18 base={props.data.base}/>;
            case 77:
                return <Text19 base={props.data.base}/>;
            case 78:
                return <Text20 base={props.data.base}/>;
            case 79:
                return <Text21 base={props.data.base}/>;
            case 80:
                return <Text22 base={props.data.base}/>;
            case 81:
                return <Text23 base={props.data.base}/>;
            case 82:
                return <Text24 base={props.data.base}/>;
            case 83:
                return <Text25 base={props.data.base}/>;
            case 84:
                return <Text26 base={props.data.base}/>;
            case 85:
                return <Text27 base={props.data.base}/>;
            case 86:
                return <Text28 base={props.data.base}/>;
            case 87:
                return <Text29 base={props.data.base}/>;
            case 88:
                return <Text30 base={props.data.base}/>;
            case 89:
                return <Text31 base={props.data.base}/>;
            case 90:
                return <Text32 base={props.data.base}/>;
            case 91:
                return <Text33 base={props.data.base}/>;
            case 92:
                return <Text34 base={props.data.base}/>;
            case 93:
                return <Text35 base={props.data.base}/>;
            case 94:
                return <Text36 base={props.data.base}/>;
            case 95:
                return <Text37 base={props.data.base}/>;
            default:
                return <Text3 base={props.data.base}/>;
        }
    };
    return showTextUi(props.data.common.id);
});

export default RenderText;
