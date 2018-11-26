import * as React from "react";
import {Icon} from "antd";

class NavHelp extends React.PureComponent {
    toUrl = () => {
        window.open(`http://www.e7wei.com/help/article/id/463.html`)
    };

    render() {
        return (
            <div onClick={this.toUrl} style={{color: "white"}}>
                <Icon type="question-circle"/>
                帮助中心
            </div>
        );
    }
}

export default NavHelp;
