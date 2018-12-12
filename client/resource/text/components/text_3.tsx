import * as React from "react";

interface Props {
    base: {
        html: string;
        index: string;
        color: string;
        wordArt: string;
        link: string,
    };
}

class Text3 extends React.PureComponent<Props, ""> {
    render() {
        const {base} = this.props;
        return (
            <img src={base.wordArt} alt={'wordArt'} style={{width: '100%', height: '100%'}}/>
        );
    }
}

export default Text3;
