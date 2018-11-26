import * as React from "react";

class NavPreview extends React.PureComponent {
    render() {
        return (
            <div style={{color: "white"}}>
                <i
                    className={"iconfont icon-yulan"}
                    style={{marginRight: "10px"}}
                />
                预览/设置
            </div>
        );
    }
}

export default NavPreview;
