import * as React from "react";
import Button0 from "./components/button-0";

interface Props {
    data: any;
}

class RenderButton extends React.PureComponent<Props, ""> {
    render() {
        const {data} = this.props;
        return <Button0 data={data}/>;
    }
}

export default RenderButton;
