import React, { PureComponent } from "react";
import connect from "../../../redux/decorator";
import { Layout } from "antd";
import {
  template_img_data,
  template_mall_data,
  template_music_data,
  template_text_data,
  template_video_data
} from "./select_database";
import SelectCommon from "./select_common";
import InterActiveSelect from "./interactive";

@connect
export default class VisualUiShowView extends PureComponent {
  render() {
    const $$name = this.props.choose_ui_value.data.get("name");
    const { Sider } = Layout;
    /**
     * 根据获取不同的名称，展示出不同的组件
     * @param $$name
     * @returns {*}
     */
    const show = $$name => {
      if ($$name === "text") {
        return <SelectCommon data={template_text_data}/>;
      }
      if ($$name === "img") {
        return <SelectCommon data={template_img_data}/>;
      }
      if ($$name === "music") {
        return <SelectCommon data={template_music_data}/>;
      }
      if ($$name === "video") {
        return <SelectCommon data={template_video_data}/>;
      }
      if ($$name === "mall") {
        return <SelectCommon data={template_mall_data}/>;
      }
      if ($$name === "lnteractive") {
        return <InterActiveSelect/>;
      }
    };
    return (
      <React.Fragment>
        {$$name ? (
          <Sider
            width={330}
            style={{ height: "100%", background: "transparent" }}
          >
            {show($$name)}
          </Sider>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}
