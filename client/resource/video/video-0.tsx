import * as React from "react";

interface Props {
  data: {
    base: {
      url: string;
    };
  };
}

class Video0 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props.data;
    return (
      <div>
        {
          base.url ? <div
            style={{ width: "100%", height: "100%" }}
            dangerouslySetInnerHTML={{
              __html: base.url
            }}
          /> : <video width={"100%"} height={"100%"} controls src={base.url}/>
        }

      </div>
    );
  }
}

export default Video0;
