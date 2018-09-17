import React, { PureComponent } from "react";
import { connect } from "react-redux";
import NProgress from "nprogress";
import {
  Modal,
  Tabs,
  Icon,
  message,
  Divider,
  Tooltip,
  Button,
  Pagination,
  Row,
  Col
} from "antd";
import style from "./imgModel.module.scss";
import { UploadImgForm } from "../../routes/components";
import "nprogress/nprogress.css";
import { redux_action } from "../../redux/action";
import { user_api } from "../../api/user.api";
import { delete_api } from "../../api/delete.api";

/**
 * 逻辑
 *  1. 通过ajax 请求，获取用户是否存数据
 *  2. 如果存在数据则展示xxx, 如果不存在则展示默认
 *  3. 添加删除功能
 *  4. 添加选择功能，设置选择样式
 */
class ImgModel extends PureComponent {
  state = {
    visible: false // 控制柜Model 展示
  };
  /**
   * 展示Model
   */
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  /**
   * 关闭Model
   * 查询props,调用父级函数修改数据
   */
  closeModal = () => {
    this.setState({
      visible: false
    });
    // eslint-disable-next-line
    this.props.model ? this.props.closeModel() : "";
  };

  /**
   *  获取用户存储在数据库中的图片信息
   */
  componentWillMount() {
    const { data } = this.props.imgModel_value;
    user_api(this.props.type, 1).then(response => {
      this.props.upData("IMGMODEL", {
        number: response.sum,
        img_library: response.list,
        current: data.get("current"),
        img_url: data.get("img_url")
      });
    });
  }

  /**
   * 数据上传
   * @param field
   */
  uploadChange = field => {
    NProgress.start();
    // 如果数据上传成功
    if (field.error) {
      message.error("网络异常，上传失败");
    } else {
      NProgress.done();
      user_api(this.props.type, 0)
        .then(response => {
          message.success("图片添加成功");
          this.props.upData("IMGMODEL", {
            img_library: response.list,
            current: 1,
            number: response.sum,
            img_url: response.list[0].url
          });
        })
        .catch(response => {
          message.error(response);
        });
    }
  };

  /**
   * 翻页
   * @param page
   */
  onChange = page => {
    const data = this.props.imgModel_value.data;
    user_api(this.props.type, page)
      .then(response => {
        this.props.upData("IMGMODEL", {
          img_library: response.list,
          current: page,
          number: response.sum,
          img_url: data.get("img_url")
        });
      })
      .catch(response => {
        message.error(response);
      });
  };

  /**
   * 删除用户图片
   * @param mid
   */
  delete = mid => {
    NProgress.start();
    delete_api(mid)
      .then((response) => {
        if (response) {
          NProgress.done();
          message.success("项目已清空");
          this.props.upData("IMGMODEL", {
            current: 1,
            number: 0,
            img_library: [],
            img_url: ""
          });
        } else {
          NProgress.done();
          const { data } = this.props.imgModel_value;
          user_api(this.props.type, data.get("current")).then(response => {
            this.props.upData("IMGMODEL", {
              current: data.get("current"),
              number: response.sum,
              img_library: response.list,
              img_url: data.get("img_url")
            });
            message.success("删除成功");
          });
        }
      });
  };

  choose_img = url => {
    NProgress.done();
    // 图片
    if (this.props.type === 1) {
      this.props.func(url);
    }
    if (this.props.type === 3) {
      this.props.func(url);
    }
    if (this.props.type === 2) {
      this.props.func(url);
    }
  };

  render() {
    const imgMode_data = this.props.imgModel_value.data;
    // eslint-disable-next-line
    this.props.model ? this.showModal() : "";
    // model 默认内容
    const default_model = (
      <div style={{ textAlign: "center", padding: "0 80px" }}>
        <img src={"http://src.e7wei.com/0.2823198691104869.png"} alt={"img"}/>
        <br/>
        <UploadImgForm
          type={2}
          onChange={this.uploadChange}
          child={
            <Button type="dashed" style={{ width: "150px" }}>
              添加图片
            </Button>
          }
          upload={{
            value: ""
          }}
        />
      </div>
    );
    // 当用户拥有上传数据时
    const show_data = (
      <React.Fragment>
        <div
          className={"response_flex"}
          style={{
            width: "100%",
            minHeight: "300px",
            maxHeight: "300px",
            overflow: "hidden"
          }}
        >
          {imgMode_data.get("img_library").map((data, index) => {
            return (
              <div
                className={"flex_model_1"}
                key={index}
                onClick={this.choose_img.bind(this, data.get("url"))}
              >
                <Tooltip
                  title={
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={this.delete.bind(this, data.get("mid"), index)}
                    >
                      删除
                    </div>
                  }
                >
                  <div
                    className={
                      data.get("url") === this.props.img_url
                        ? `${style.part_active}`
                        : `${style.part_choose}`
                    }
                  >
                    <div className={style.img_show}>
                      <img
                        className={style.img}
                        src={data.get("url")}
                        alt={"img"}
                      />
                    </div>
                  </div>
                </Tooltip>
              </div>
            );
          })}
        </div>
        <Divider/>
        <div style={{ padding: "0 35%", width: "100%" }}>
          <Button
            onClick={this.closeModal}
            style={{ width: "100px", marginRight: "10px" }}
          >
            取消
          </Button>
          <Button
            type="primary"
            onClick={this.closeModal}
            style={{ width: "100px", marginRight: "10px" }}
          >
            确定
          </Button>
        </div>
      </React.Fragment>
    );
    return (
      <div>
        <span onClick={this.showModal}>{this.props.children}</span>
        <Row>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 0 }}
            xl={{ span: 0 }}
          >
            <Modal
              title="我的素材"
              visible={this.state.visible}
              onCancel={this.closeModal}
              footer={null}
            >
              <div style={{ height: "300px" }}>
                <Tabs
                  tabBarExtraContent={
                    <span>
                      <Row gutter={16} style={{ width: "350px" }}>
                        <Col span={7} style={{ transform: "translate(0,4px)" }}>
                          <UploadImgForm
                            upload={{
                              value: ""
                            }}
                            onChange={this.uploadChange}
                            child={
                              <div
                                style={{
                                  color: "#19a0fa",
                                  cursor: "pointer",
                                  marginRight: "10px"
                                }}
                              >
                                <Icon type="plus"/>
                                &nbsp;添加素材
                              </div>
                            }
                          />
                        </Col>
                        <Col
                          span={17}
                          style={{ transform: "translate(0,11px)" }}
                        >
                          <Pagination
                            simple
                            pageSize={24}
                            total={imgMode_data.get("number")}
                            current={imgMode_data.get("current")}
                            onChange={this.onChange}
                          />
                        </Col>
                      </Row>
                    </span>
                  }
                >
                  <Tabs.TabPane tab="我的素材" key="1">
                    {imgMode_data.get("img_library").size === 0
                      ? default_model
                      : show_data}
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </Modal>
          </Col>
          <Col
            xs={{ span: 0 }}
            sm={{ span: 0 }}
            md={{ span: 0 }}
            lg={{ span: 24 }}
            xl={{ span: 24 }}
          >
            <Modal
              width={800}
              title="我的素材"
              visible={this.state.visible}
              onCancel={this.closeModal}
              footer={null}
            >
              <Tabs
                tabBarExtraContent={
                  <span>
                    <Row gutter={16} style={{ width: "350px" }}>
                      <Col span={7} style={{ transform: "translate(0,4px)" }}>
                        <UploadImgForm
                          upload={{
                            value: ""
                          }}
                          onChange={this.uploadChange}
                          child={
                            <div
                              style={{
                                color: "#19a0fa",
                                cursor: "pointer",
                                marginRight: "10px"
                              }}
                            >
                              <Icon type="plus"/>
                              &nbsp;添加图片
                            </div>
                          }
                        />
                      </Col>
                      <Col span={17} style={{ transform: "translate(0,11px)" }}>
                        <Pagination
                          simple
                          pageSize={24}
                          total={imgMode_data.get("number")}
                          current={imgMode_data.get("current")}
                          onChange={this.onChange}
                        />
                      </Col>
                    </Row>
                  </span>
                }
              >
                <Tabs.TabPane tab="我的素材" key="1">
                  {imgMode_data.get("img_library").size === 0
                    ? default_model
                    : show_data}
                </Tabs.TabPane>
              </Tabs>
            </Modal>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 背景组件样式
    bg_ui_value: state.bgUi_rdc,
    // 图片模块数据
    imgModel_value: state.imgModel_rdc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImgModel);
