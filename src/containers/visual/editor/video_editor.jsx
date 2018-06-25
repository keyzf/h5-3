import React, { PureComponent } from "react";
import { Tabs, Card, Radio, Input } from "antd";
import { connect } from "react-redux";
import { choose_action, select_action } from "../../../redux/action";
import { Map } from "immutable";
import VideoForm from "../../../common/up_video_common/video_form";

const { TextArea } = Input;

class EditorVideo extends PureComponent {
  ImgPartChange = changedFields => {
    if (
      changedFields.upload &&
      changedFields.upload.value.file.response !== undefined
    ) {
      const $$new_data = this.props.data.getIn([
        "data",
        "customize",
        "history"
      ]);
      const cs = $$new_data.push({
        name: changedFields.upload.value.file.name,
        url: `http://p8afqcqwq.bkt.clouddn.com/${
          changedFields.upload.value.file.response.key
          }`
      });
      this.sendAction(
        this.props.data.get("data").setIn(["customize", "history"], cs)
      );
    }
  };
  onChange = e => {
    this.sendAction(
      this.props.data.get("data").setIn(["customize", "video"], e.target.value)
    );
  };
  shareChange = e => {
    this.sendAction(
      this.props.data.get("data").setIn(["customize", "share"], e.target.value)
    );
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

  render() {
    const $$customize = this.props.data.getIn(["data", "customize"]);
    const radioStyle = {
      display: "block",
      height: "30px",
      lineHeight: "30px"
    };
    return (
      <Tabs defaultActiveKey="1" style={{ height: "100%" }}>
        <Tabs.TabPane tab="内容设置" key="1">
          <Card title="自定义素材" style={{ marginTop: "-18px" }}>
            <span>
              <VideoForm
                upload={{ value: "" }}
                onChange={this.ImgPartChange}
                child={
                  <div
                    style={{
                      color: "#19a0fa",
                      cursor: "pointer",
                      marginTop: "-20px"
                    }}
                  >
                    &nbsp;上传素材
                  </div>
                }
              />
            </span>
            <div
              style={{
                color: "#19a0fa",
                cursor: "pointer",
                marginTop: "-20px",
                fontSize: "13.5px"
              }}
            >
              &nbsp;第三方分享&nbsp;&nbsp;<span
              style={{ fontSize: "13.5px", color: "grey" }}
            >
                请将分享代码复制至下方
              </span>
            </div>
            <TextArea rows={4} onChange={this.shareChange}/>
          </Card>
          <Card title="上传记录">
            <Radio.Group
              onChange={this.onChange}
              value={$$customize.get("video")}
            >
              <Radio
                style={radioStyle}
                value={
                  "https://e7wei-img.oss-cn-beijing.aliyuncs.com/movie.mp4"
                }
              >
                默认
              </Radio>
              {$$customize.get("history").map((data, index) => {
                return (
                  <Radio key={index} style={radioStyle} value={data.url}>
                    {data.name}
                  </Radio>
                );
              })}
            </Radio.Group>
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