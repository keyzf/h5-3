import React from "react";
import { connect } from "react-redux";
import { Tabs, Button, Card,Form,Popover} from "antd";
import { choose_action, select_action } from "../../../redux/action";
import { fromJS, Map } from "immutable";
import AdvanceEditor from "./advance.editor";
import { SketchPicker } from "react-color";
import { $$button_database } from "../../../ui/button/button_database";
import ButtonForm from "../../../ui/button/button_form";

class EditorButton extends React.Component {
  state = {
    visible: false
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

  editorFeatures = (opt_name, data) => {
    // data source
    const $$select_data = this.props.select_value.data;
    const $$choose_data = this.props.choose_value.data;
    const $$props_data = this.props.data.get("data");
    // Current component name
    const name = $$select_data
      .getIn([$$choose_data.get("number"),"customize","name"]);
    // features
    if (opt_name === "customize") {
      // update position
      const $$customize = {
        ...$$select_data
          .get($$choose_data.get("number"))
          .get("customize")
          .toJS(),
        ...data
      };
      // new data
      this.sendAction(
        $$select_data
          .get($$choose_data.get("number"))
          .set("customize", fromJS($$customize))
      );
    }
    if (opt_name === "reset") {
      if (name === "button") {
        this.sendAction(fromJS($$button_database(name)));
      }
    }
    if (opt_name === "color") {
      this.sendAction(
        $$props_data.setIn(["customize",  "font_color"], data.hex)
      );
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

  render() {
    const $$ui_text_data = this.props.data.get("data");
    const $$customize = $$ui_text_data.get("customize");
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
    const operations = (
      <Button onClick={this.editorFeatures.bind(this, "reset")}>
        恢复默认
      </Button>
    );
    return (
      <Tabs defaultActiveKey={"1"} tabBarExtraContent={operations}>
        <Tabs.TabPane tab="内容设置" key="1">
          <Card title="基础属性" style={{ marginTop: "-18px" }}>
            <Form hideRequiredMark>
              <Form.Item {...form_item_style("字体颜色")}>
                <Popover
                  content={
                    <SketchPicker
                      color={$$customize.getIn(["base", "font_color"])}
                      onChangeComplete={this.editorFeatures.bind(
                        this,
                        "color"
                      )}
                    />
                  }
                  trigger="click"
                >
                  <div
                    style={{
                      marginTop: "6px",
                      height: "25px",
                      width: "100%",
                      backgroundColor: $$customize.get("font_color")
                    }}
                  />
                </Popover>
              </Form.Item>
            </Form>
            <ButtonForm
              {...$$customize.toJS()}
              onChange={this.editorFeatures.bind(this, "customize")}
            />
          </Card>
        </Tabs.TabPane>
        <Tabs.TabPane tab="高级设置" key="2">
          <AdvanceEditor data={$$ui_text_data}/>
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

// Hoc
export default connect(mapStateToProps, mapDispatchToProps)(EditorButton);
