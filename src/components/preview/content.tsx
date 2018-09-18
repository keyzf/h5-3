import * as React from "react";


class PreviewContent extends React.PureComponent {
  render() {
    return (
      <div style={{ margin: " 40px auto", width: "320px", height: "600px" }}>
        <div className={"p_phone"}>
          <div className={"p_phone_header"}/>
          <div className={"p_phone_content"}>

          </div>
          <div className={"p_phone_footer"}/>
        </div>
      </div>
    );
  }
}

export default PreviewContent;