import * as React from "react";

interface Props {
    data: {
        base: any;
    };
}

class Picture0 extends React.PureComponent<Props, ""> {
    render() {
        const {base} = this.props.data;
        return (
            <img src={base.crop} alt={""} style={{width: "100%"}}/>
        );
    }
}

export default Picture0;
