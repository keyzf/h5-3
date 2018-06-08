import React from "react";
import style from "./content.module.scss";

class ContentReleaseView extends React.Component {
  render() {
    return (
      <div style={{ padding: "6% 29%", height: "100%" }}>
        <div className={style.phone}>
          <div className={style.phone_header}/>
          <div className={style.phone_content}/>
          <div className={style.phone_footer}/>
        </div>
      </div>
    );
  }
}

export default ContentReleaseView;
