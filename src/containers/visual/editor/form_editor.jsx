import React from "react";
import { connect } from "react-redux";
import { Map, fromJS } from "immutable";
import { SketchPicker } from "react-color";
import {
  Tabs,
  Button,
  Checkbox,
  Popover,
  Icon,
  Card,
  Row,
  Col,
  Collapse,
  Tooltip,
  Form,
  Input
} from "antd";
import { choose_action, select_action } from "../../../redux/action";
import PaddingForm from "../../../ui/visual/form/padding_form";
import PositionForm from "../../../ui/visual/form/position_form";
import UpImgPart from "../../../common/part/up_img";
import {
  $$form_database,
  $$form_item_database, $$from_opt_checkbox, $$from_opt_datepicker, $$from_opt_input, $$from_opt_rate
} from "../../../database/components/form_database";

class EditorForm extends React.Component {
  /**
   * control mode
   * @type {{visible: boolean}}
   */
  state = {
    visible: false,
    item: false,
    number: ""
  };

  // 修改单个选项值
  changeItem = number => {
    this.setState({
      item: true,
      number: number
    });
  };
  // 回到原页面
  backItem = () => {
    this.setState({
      item: false
    });
  };
  /**
   * model show
   */
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  // close Model
  closeModal = (state, data) => {
    this.setState({
      visible: false
    });
    if (state && data !== undefined) {
      const $$select_data = this.props.select_value.data;
      const $$choose_data = this.props.choose_value.data;
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["advance", "img"], data)
      );
    }
  };

  add_opt = (opt_name) => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;

    // features
    if (opt_name === "input") {
      const $$item = $$select_data
        .get($$choose_data.get("number"))
        .get("customize")
        .get("item");
      const $$new_item = $$item.push($$from_opt_input);
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["customize", "item"], $$new_item)
      );
    }
    if (opt_name === "rate") {
      const $$item = $$select_data
        .get($$choose_data.get("number"))
        .get("customize")
        .get("item");
      const $$new_item = $$item.push($$from_opt_rate);
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["customize", "item"], $$new_item)
      );
    }
    if (opt_name === "checkbox") {
      const $$item = $$select_data
        .get($$choose_data.get("number"))
        .get("customize")
        .get("item");
      const $$new_item = $$item.push($$from_opt_checkbox);
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["customize", "item"], $$new_item)
      );
    }
    if (opt_name === "datePicker") {
      const $$item = $$select_data
        .get($$choose_data.get("number"))
        .get("customize")
        .get("item");
      const $$new_item = $$item.push($$from_opt_datepicker);
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["customize", "item"], $$new_item)
      );
    }
  };
  /**
   * editor Functional implementation
   * opt_name : operating name
   * data : change data
   * 1. reset data
   * 2. color data
   */
  editorFeatures = (opt_name, data) => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;


    if (opt_name === "item_deletes") {
      const $$item = $$select_data
        .get($$choose_data.get("number"))
        .get("customize")
        .get("item");
      const $$new_item = $$item.delete(data);
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["customize", "item"], $$new_item)
      );
    }
    if (opt_name === "color") {
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["advance", "color"], data.hex)
      );
    }
    if (opt_name === "delete") {
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["advance", "img"], "")
      );
    }
    if (opt_name === "tiling") {
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(
            ["advance", "img_config", "tiling", "value"],
            data.target.checked
          )
      );
    }
    if (opt_name === "stretching") {
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(
            ["advance", "img_config", "stretching", "value"],
            data.target.checked
          )
      );
    }
    if (opt_name === "position") {
      // update position
      const $$position = {
        ...$$select_data
          .get($$choose_data.get("number"))
          .get("advance")
          .get("position")
          .toJS(),
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
          .get("padding")
          .toJS(),
        ...data
      };
      // new data
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .setIn(["advance", "padding"], fromJS($$padding))
      );
    }
    if (opt_name === "reset") {
      const form_data = {
        name: "form",
        decorator: ["item_one", "item_two", "item_three", "item_four"],
        title: [
          { value: "题目一" },
          { value: "题目二" },
          { value: "题目三" },
          { value: "题目四" }
        ]
      };
      let img_data = $$form_database(form_data.name);
      // 给数据修改值
      img_data.customize.item = form_data.title.map((datas, index) =>
        $$form_item_database('radio',form_data.decorator[index], datas, [
          "非常满意",
          "满意",
          "一般满意",
          "不满意"
        ])
      );

      this.sendAction(fromJS(img_data));
    }
  };

  /**
   * send action
   * Receive: Single component style
   * @param up_data
   */
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

  handleChange = (inside_index, event) => {
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    this.sendAction(
      $$select_data
        .get($$choose_data.get("number"))
        .setIn(
          ["customize", "item", this.state.number, "option", inside_index],
          event.target.value
        )
    );
  };
  CustomizeFormChange = event => {
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    console.log(
      $$select_data
        .get($$choose_data.get("number"))
        .get("customize")
        .get("item")
        .get(this.state.number)
        .get("title")
        .get("value")
    );
    this.sendAction(
      $$select_data
        .get($$choose_data.get("number"))
        .setIn(
          ["customize", "item", this.state.number, "title", "value"],
          event.target.value
        )
    );
  };

  render() {
    // resolve props data
    const $$ui_text_data = this.props.data.get("data");
    const $$customize = $$ui_text_data.get("customize");
    const $$advance = $$ui_text_data.get("advance");
    /**
     * reset data
     */
    const operations = (
      <Button onClick={this.editorFeatures.bind(this, "reset")}>
        恢复默认
      </Button>
    );
    const item = (title, number) => (
      <Row gutter={16}>
        <Col span={16} style={{ padding: "8px" }}>
          {title}
        </Col>
        <Col span={8} style={{ padding: "8px" }}>
          <Tooltip title="修改">
            <Icon
              type="edit"
              style={{ marginRight: "15px" }}
              onClick={this.changeItem.bind(this, number)}
            />
          </Tooltip>
          <Tooltip title="删除">
            <Icon
              type="delete"
              onClick={this.editorFeatures.bind(this, "item_deletes", number)}
            />
          </Tooltip>
        </Col>
      </Row>
    );
    const form_item_style = label_name => {
      return {
        label: label_name,
        labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
        wrapperCol: {
          xl: { span: 17, offset: 1 },
          lg: { span: 18, offset: 1 }
        }
      };
    };
    const content = (
      <Row gutter={16} >
        <Col span={12} onClick={this.add_opt.bind(this,'input')}>输入框</Col>
        <Col span={12} onClick={this.add_opt.bind(this,'rate')}>评分</Col>
        <Col span={12} onClick={this.add_opt.bind(this,'checkbox')}>多选框</Col>
        <Col span={12} onClick={this.add_opt.bind(this,'datePicker')}>日期</Col>
      </Row>
    );
    return (
      <div>
        {this.state.item ? (
          <Card
            title="编辑图集数据"
            extra={<div onClick={this.backItem}>返回</div>}
          >
            <Form>
              <Form.Item {...form_item_style("标题")}>
                <Input
                  value={$$customize
                    .get("item")
                    .get(this.state.number)
                    .get("title")
                    .get("value")}
                  onChange={this.CustomizeFormChange.bind(this)}
                />
              </Form.Item>
            </Form>
            {$$customize
              .get("item")
              .get(this.state.number)
              .get("option")
              .map((data, inside_index) => {
                return (
                  <Form>
                    <Form.Item {...form_item_style("可选项")}>
                      <Input
                        value={data}
                        onChange={this.handleChange.bind(this, inside_index)}
                      />
                    </Form.Item>
                  </Form>
                );
              })}
          </Card>
        ) : (
          <Tabs defaultActiveKey={"1"} tabBarExtraContent={operations}>
            <Tabs.TabPane tab="内容设置" key="1">
              <Card
                style={{ marginTop: "-18px" }}
                title="项目列表"
                extra={
                  <Popover content={content} title="类型选择" trigger="click">
                    <Icon type="plus"/>添加
                  </Popover>
                }
              >
                {$$customize.get("item").map((data, index) => {
                  return (
                    <Collapse.Panel
                      style={{ marginBottom: "10px" }}
                      disabled
                      header={item(data.get("title").get("value"), index)}
                      key={index}
                    />
                  );
                })}
              </Card>
            </Tabs.TabPane>
            <Tabs.TabPane tab="高级设置" key="2">
              <Card title="背景色" style={{ marginTop: "-18px" }}>
                <Popover
                  content={
                    <SketchPicker
                      color={$$advance.get("color")}
                      onChangeComplete={this.editorFeatures.bind(this, "color")}
                    />
                  }
                  trigger="click"
                >
                  <Card.Grid
                    style={{
                      textAlign: "center",
                      width: "45%",
                      background: $$advance.get("color")
                    }}
                  >
                    <Icon type="plus"/>&nbsp;&nbsp;自定义
                  </Card.Grid>
                </Popover>
              </Card>
              <Card title="背景图">
                <Row gutter={16}>
                  <Col
                    span={7}
                    style={{
                      margin: "auto",
                      height: "100px",
                      border: "1px solid #e7e7e7",
                      textAlign: "center",
                      color: "#e7e7e7",
                      display: "flex",
                      alignItems: "center"
                    }}
                    onClick={this.showModal}
                  >
                    <img
                      style={{
                        verticalAlign: "middle",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        margin: "auto"
                      }}
                      src={
                        $$advance.get("img")
                          ? $$advance.get("img")
                          : "http://h5.xiuzan.com/p/Tplglobal/images/plant-2x.png"
                      }
                      alt={"img"}
                    />
                  </Col>
                  <Col span={12}>
                    <Button.Group>
                      <Button onClick={this.showModal}>更换</Button>
                      <Button
                        onClick={this.editorFeatures.bind(this, "delete")}
                      >
                        删除
                      </Button>
                    </Button.Group>
                    <br/>
                    <br/>
                    <Row gutter={16}>
                      <Col span={12}>
                        <Checkbox
                          onChange={this.editorFeatures.bind(this, "tiling")}
                          defaultValue={$$advance
                            .get("img_config")
                            .get("tiling")
                            .get("value")}
                        >
                          平铺
                        </Checkbox>
                      </Col>
                      <Col span={12}>
                        <Checkbox
                          onChange={this.editorFeatures.bind(
                            this,
                            "stretching"
                          )}
                          defaultValue={$$advance
                            .get("img_config")
                            .get("stretching")
                            .get("value")}
                        >
                          拉伸
                        </Checkbox>
                      </Col>
                    </Row>
                    <UpImgPart
                      visible={this.state.visible}
                      unvisible={this.closeModal.bind(this)}
                      img={$$advance.get("img")}
                    />
                  </Col>
                </Row>
              </Card>
              <Card title="内边距" style={{ width: "100%" }}>
                <PaddingForm
                  {...$$advance.get("padding").toJS()}
                  onChange={this.editorFeatures.bind(this, "padding")}
                />
              </Card>
              <Card title="定位" style={{ width: "100%" }}>
                <PositionForm
                  {...$$advance.get("position").toJS()}
                  onChange={this.editorFeatures.bind(this, "position")}
                />
              </Card>
            </Tabs.TabPane>
          </Tabs>
        )}
      </div>
    );
  }
}

/**
 * 读取数据
 * @param state
 * @returns {{select_value: *, choose_value: *}}
 */
const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
    choose_value: state.choose_reducer
  };
};

/**
 * 发送数据
 * @param dispatch
 * @returns {{select_upData: (function(*=, *=, *=): *)}}
 */
const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorForm);
