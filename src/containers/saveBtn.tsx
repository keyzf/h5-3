import * as React from "react";
import { Consumer } from "../context/context";

interface Props {
  children?: object,
  name?: string,
}

class SaveBtn extends React.Component<Props, any> {

  render() {
    return (
      <Consumer>
        {
          () =>
            <div style={{ color: "white" }}>
              {this.props.children}
            </div>
        }
      </Consumer>
    );
  }
}

export default SaveBtn;