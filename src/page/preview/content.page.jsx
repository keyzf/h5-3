import React from "react";
import ContentPreviewModel from "../../containers/preview/preview_content";
import style from "./content.module.scss";

class ContentPreviewView extends React.Component {
  render() {
    return (
      <div style={{ padding: "5% 32%", height: "100%" }}>
        <div className={style.phone}>
          <div className={style.phone_header}/>
          <div className={style.phone_content}>
            <ContentPreviewModel/>
          </div>
          <div className={style.phone_footer}/>
        </div>
      </div>
    );
  }
}

export default ContentPreviewView;
