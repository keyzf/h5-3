import * as React from "react";

interface Props {
  vid: string;
  state: string;
}

class Release extends React.PureComponent<Props, any> {
  render() {
    return (
      <div>release</div>
    );
  }
}

export default Release;