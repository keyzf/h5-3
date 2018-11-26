import * as React from "react";

class NavSave extends React.PureComponent {
    render() {
        return (
            <div style={{color: "white"}}>
                <i
                    className={"iconfont icon-baocun"}
                    style={{marginRight: "10px"}}
                />
                保存
            </div>
        );
    }
}

export default NavSave;
