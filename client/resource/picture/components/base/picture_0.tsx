import * as React from "react";

interface Props {
  data: {
    base: any;
  };
}

class Picture0 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props.data;
    return (
      <a href={''}>
        <img src={base.crop} alt={"wordArt"} width={"100%"} height={"100%"}/>
      </a>
    );
  }
}

export default Picture0;
