/**
 * ui 选择展示栏
 */
import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import {
  template_img_data,
  template_mall_data,
  template_music_data,
  template_text_data,
  template_video_data
} from "../../containers/visual/side/select_database";
import SelectCommon from "../../containers/visual/side/select_common";
import InterActiveSelect from "../../containers/visual/side/interactive";

/**
 * 接收数据源数据，判断显示那种ui
 */
class VisualUiShowView extends PureComponent {
  render() {
    const $$name = this.props.visual_ui_show_value.data.get("name");
    const { Sider } = Layout;
    /**
     * 根据获取不同的名称，展示出不同的组件
     * @param $$name
     * @returns {*}
     */
    const show = ($$name) => {
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
          <Sider width={330} style={{ height: "100%", background: "transparent" }}>
            {show($$name)}
          </Sider>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  }
}

/**
 * 读取数据源数据
 * @param state
 * @returns {{visual_ui_show_value: *}}
 */
const mapStateToProps = (state) => {
  return {
    visual_ui_show_value: state.visual_ui_show_reducer
  };
};

/**
 * 高阶组件 hoc
 */
export default connect(mapStateToProps, "")(VisualUiShowView);
