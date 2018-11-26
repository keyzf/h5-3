import * as React from "react";
import {Button} from "antd";

class NavVip extends React.PureComponent {
    toUrl = () => {
        window.open('http://my.e7wei.com/package/index.html')
    };

    render() {
        return (
            <Button
                onClick={this.toUrl}
                htmlType={"button"}
                style={{border: "none", color: "white"}}
            >
                <i
                    className="iconfont icon-huiyuan"
                    style={{color: "rgb(255,181,71)"}}
                />
                <span style={{marginLeft: "3px", color: "rgb(255,181,71)"}}>
                  升级续费
                </span>
            </Button>
        );
    }
}

export default NavVip;
