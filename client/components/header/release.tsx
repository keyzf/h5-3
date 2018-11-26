import * as React from "react";

class NavRelease extends React.PureComponent {
    render() {
        return (
            <div style={{color: "white"}}>
                <i
                    className={"iconfont icon-fabu"}
                    style={{marginRight: "10px"}}
                />
                发布
            </div>
        );
    }
}

export default NavRelease;
