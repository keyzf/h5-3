import * as React from "react";

class NavBack extends React.PureComponent {
  back = (): void => {
    window.location.href = `${window.location.origin}/long/index.html`;
  };

  render() {
    return (
      <i
        className="iconfont icon-zuojiantou"
        style={{ fontWeight: "bold", fontSize: "20px", color: "white" }}
        onClick={this.back}
      />
    );
  }
}

export default NavBack;
