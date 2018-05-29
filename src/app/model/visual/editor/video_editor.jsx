import React from "react";
import { Tabs, Button, Card, Radio } from "antd";
import { connect } from "react-redux";
import { choose_action, select_action } from "../../../../redux/action";
import { fromJS, Map } from "immutable";
import PaddingForm from "../../../../components/visual/form/padding_form";
import PositionForm from "../../../../components/visual/form/position_form";
import ImgForm from "../../../../components/visual/form/img_form";

class EditorVideo extends React.Component {
  ImgPartChange = changedFields => {
    if (
      changedFields.upload &&
      changedFields.upload.value.file.response !== undefined
    ) {
      const $$new_data = this.props.data.get("data").get("customize").get("history");
      const cs = $$new_data.push({
        name: changedFields.upload.value.file.name,
        url: `http://p8afqcqwq.bkt.clouddn.com/${changedFields.upload.value.file.response.key}`
      });
      this.sendAction(this.props.data.get("data").setIn(["customize", "history"], cs));
    }
  };
  editorFeatures = (opt_name, data) => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // Current component name
    const name = $$select_data
      .get($$choose_data.get("number"))
      .get("customize")
      .get("name");
    // features
    if (opt_name === "position") {
      // update position
      const $$position = {
        ...$$select_data
          .get($$choose_data.get("number"))
          .get("advance")
          .get("position").toJS(),
        ...data
      };
      // new data
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["advance", "position"], fromJS($$position))
      );
    }
    if (opt_name === "padding") {
      // update position
      const $$padding = {
        ...$$select_data
          .get($$choose_data.get("number"))
          .get("advance")
          .get("padding").toJS(),
        ...data
      };
      // new data
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["advance", "padding"], fromJS(($$padding))));
    }
  };

  sendAction = up_data => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get("number"),
      up_data
    );
    const $$new_choose_data = $$choose_data.set("data", up_data);
    // send action
    this.props.select_upData($$new_select_data, "", false);
    this.props.choose_upData(
      $$new_choose_data,
      Map({ content: true, choose: true }),
      false
    );
  };
  onChange = (e) => {
    this.sendAction(this.props.data.get("data").setIn(["customize", "video"], e.target.value));
  };
  render() {
    const $$customize = this.props.data.get("data").get("customize");
    const $$advance = this.props.data.get("data").get("advance");
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };
    return (
      <Tabs
        defaultActiveKey="1"
        style={{ height: "100%" }}
      >
        <Tabs.TabPane tab="内容设置" key="1">
          <Card title="当前使用" style={{ marginTop: "-18px" }}>
            <video width="100%" height="100%" controls>
              <source src={$$customize.get("video")} type="video/mp4"/>
            </video>
            <span>
            <ImgForm upload={{ value: "" }} onChange={this.ImgPartChange}
                     child={<div style={{ color: "#19a0fa", cursor: "pointer", marginTop: "-20px" }}>
                       &nbsp;添加素材
                     </div>}/>
            </span>
          </Card>
          <Card title="上传记录">
            <Radio.Group onChange={this.onChange} value={$$customize.get("video")}>
              <Radio style={radioStyle} value={"https://e7wei-img.oss-cn-beijing.aliyuncs.com/movie.mp4"}>默认</Radio>
              {$$customize.get("history").map((data, index) => {
                return (
                  <Radio key={index} style={radioStyle} value={data.url}>{data.name}</Radio>
                );
              })}
            </Radio.Group>
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="高级设置" key="2">

          <Card title="内边距" style={{ marginTop: "-18px" }}>
            <PaddingForm {...$$advance.get("padding").toJS()} onChange={this.editorFeatures.bind(this, "padding")}/>
          </Card>
          <Card title="定位">
            <PositionForm {...$$advance.get("position").toJS()} onChange={this.editorFeatures.bind(this, "position")}/>
          </Card>
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
    choose_value: state.choose_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditorVideo);
