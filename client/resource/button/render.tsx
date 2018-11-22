import * as React from "react";
import Button0 from "./components/button-0";

interface Props {
    data: {
        base: {
            font_color: string;
            bg_color: string;
            bg_img: { url: string; crop: string };
            radius: number;
            desc: string;
            link: { type: ""; url: "" };
        };
    };
}

class RenderButton extends React.PureComponent<Props, ""> {
    render() {
        const {data} = this.props;
        return <Button0 data={data}/>;
    }
}

export default RenderButton;
