import React from "react";
import { connect } from "react-redux";
import LazyLoad from "react-lazyload";
import { Button, Tabs, Modal, Icon, Divider, Progress, message, Row, Col } from "antd";
import ImgForm from "../../../components/visual/form/img_form";
import { up_img_action } from "../../../redux/action";
import axios from "axios";
import range from "lodash.range";

/**
 * 功能：
 * 1. 获取数据：
 * 一、图片（存在，或者不存在）
 * 二、关闭函数（将数据传递给父级组件）
 */

class UpImgPart extends React.Component {
  state = {
    page_data: { number: 3, data: "" },
    //获取传递过来的图片
    img_url: this.props.img,
    // 进度条
    progress: false,
    length: 0,
    test: [
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" },
      { type: 1, url: "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg" }

    ]
  };

  choose = img_url => {
    this.setState({
      img_url: img_url //技术图片信息
    });
  };

  ImgPartChange = changedFields => {
    const file = changedFields.upload.value.file;
    if (file.status === "uploading") {
      this.setState({
        progress: true
      });
    }
    if (file.status === "done") {
      const $$user_img_new = this.props.up_img_value.data
        .get("self")
        .push(`http://p8afqcqwq.bkt.clouddn.com/${file.response.key}`);
      this.props.up_img_upData(
        this.props.up_img_value.data.set("self", $$user_img_new)
      );
      message.success("上传成功");
      this.setState({
        progress: false
      });
    }

  };

  render() {
    const TabPane = Tabs.TabPane;
    /**
     * visible: 控制model是否显示
     * unvisible: 控制model关闭，并向上传递数据
     */
    const { visible, unvisible } = this.props;
    /**
     * 获取自己上传的图片库
     */
    const $$up_img = this.props.up_img_value.data.get("self");

    // 公共图片库
    const ShowImg = (props) => {
      if (this.state.length === props.index) {
        axios({
          method: "get",
          url: `https://e7wei-img.oss-cn-beijing.aliyuncs.com/test_json/img_${props.index}.json`
        })
          .then((response) => {
            let c = this.state.test;
            let length = this.state.length;
            response.data.map((data) => {
              c.push(data);
            });
            this.setState({
              test: c,
              length: length + 1
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      console.log(this.state.length,props.index)
      return (
        <React.Fragment>

          {this.state.length-1 === props.index?<Row gutter={16}>
          {
            this.state.test.map((data, index) => {
              return (
                <Col span={4} style={{ margin: "0 0 5px 0" }} key={index}>
                  {
                    data.type === 1 ?
                      <LazyLoad height={50} offset={100} once overflow key={index}>
                        <div style={{
                          width: "100%",
                          height: "100%",
                          display: "inline-block",
                          verticalAlign: "top",
                          marginBottom: "10px",
                          marginRight: "13px",
                          boxSizing: "border-box"
                        }}>
                          <img style={{
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            margin: "auto"
                          }} src={data.url} alt={"img"}/>
                        </div>
                      </LazyLoad> : ""
                  }
                </Col>
              );
            })
          }
          </Row>:<div style={{display:'none'}}>代价在</div>}
        </React.Fragment>
      );

    };
    return (
      <Modal
        width={800}
        title="素材库"
        visible={visible}
        onCancel={unvisible}
        footer={null}
      >
        {/*是否显示进度条*/}
        {this.state.progress ? <Progress percent={60} status="active"/> : ""}
        <Tabs
          tabBarExtraContent={
            <ImgForm
              upload={{ value: "" }}
              onChange={this.ImgPartChange}
              child={
                <div style={{ color: "#19a0fa", cursor: "pointer" }}>
                  <Icon type="plus"/>
                  &nbsp;添加素材
                </div>
              }
            />
          }
        >
          <TabPane tab="我的素材" key="1">
            {$$up_img.size ? (
              <div style={{ width: "100%", minHeight: "400px" }}>
                <div style={{ minHeight: "300px" }}>
                  {// 循环显示出用户的自上传图片
                    $$up_img.map((data, index) => {
                      return (
                        <div
                          key={index}
                          style={{
                            width: "90px",
                            height: "90px",
                            display: "inline-block",
                            verticalAlign: "top",
                            marginBottom: "10px",
                            marginRight: "13px",
                            boxSizing: "border-box"
                          }}
                        >
                          <div
                            className={
                              data === this.state.img_url
                                ? "part_active"
                                : "part_choose"
                            }
                            onClick={this.choose.bind(this, data)}
                          >
                            <img
                              style={{
                                verticalAlign: "middle",
                                maxWidth: "100%",
                                maxHeight: "100%",
                                margin: "auto"
                              }}
                              src={data}
                              alt={"img"}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
                <Divider/>
                <div style={{ padding: "0 35%", width: "100%" }}>
                  <Button
                    onClick={this.props.unvisible.bind(
                      this,
                      true,
                      this.state.img_url
                    )}
                    style={{ width: "100px", marginRight: "10px" }}
                  >
                    取消
                  </Button>
                  <Button
                    onClick={this.props.unvisible.bind(
                      this,
                      true,
                      this.state.img_url
                    )}
                    style={{ width: "100px", marginRight: "10px" }}
                  >
                    确定
                  </Button>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: "center", padding: "0 80px" }}>
                <img
                  src={"https://e7wei-img.oss-cn-beijing.aliyuncs.com/img/%E7%BC%BA%E7%9C%81.png"}
                  alt={"img"}
                />
                <br/>
                <ImgForm
                  upload={{ value: "" }}
                  onChange={this.ImgPartChange.bind(this)}
                  child={
                    <Button type="dashed" style={{ width: "150px" }}>
                      种植素材
                    </Button>
                  }
                />
              </div>
            )}
          </TabPane>
          <TabPane tab="共享素材" key="2">
            <Tabs tabPosition={"left"}>
              <TabPane tab="背景" key="1" style={{ maxHeight: "400px", overflow: "auto" }}>
                {/**
                 *总页数,以及第一页数据
                 **/}
                {
                  range(this.state.page_data.number).map((data, index) => {
                    console.log(range(this.state.page_data.number));
                    return (
                      //对要显示的界面进行懒加载处理
                      <React.Fragment key={index}>
                        <LazyLoad once={true} throttle={100} height={600} overflow key={index}>
                          <ShowImg index={index}/>
                        </LazyLoad>
                      </React.Fragment>
                    );
                  })
                }
              </TabPane>
            </Tabs>
            <Divider/>
            <div style={{ padding: "0 35%", width: "100%" }}>
              <Button
                onClick={this.props.unvisible.bind(this, true, this.props.img)}
                style={{ width: "100px", marginRight: "10px" }}
              >
                取消
              </Button>
              <Button
                onClick={this.props.unvisible.bind(
                  this,
                  true,
                  this.state.img_url
                )}
                style={{ width: "100px", marginRight: "10px" }}
              >
                确定
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    up_img_value: state.up_img_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    up_img_upData: (data, meta, error) =>
      dispatch(up_img_action(data, meta, error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpImgPart);