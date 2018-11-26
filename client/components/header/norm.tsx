import * as React from "react";
import { Icon } from "antd";

class NavNorm extends React.PureComponent {
  toUrl = () => {
    window.open(`http://www.e7wei.com/help/article/id/409.html`);
  };

  render() {
    return (
      <div onClick={this.toUrl} style={{ color: "white" }}>
        <Icon type="exclamation-circle" />
        内容规范
      </div>
    );
  }
}

export default NavNorm;
