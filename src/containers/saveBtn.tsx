import * as React from "react";


class SaveBtn extends React.PureComponent<any, any> {
  render() {
    return (
      <div style={{color:"white"}}>
        {this.props.children}
      </div>
    );
  }
}

export default SaveBtn;