import React from "react";
import { Icon } from "antd";
import { redux_action } from "../../redux/action";
import { connect } from "react-redux";


class FormModel extends React.PureComponent {
  show = () => {
    this.props.upData("FORMMODEL", { show: false });
  };

  render() {
    return (
      <div className={`${this.props.formModel_value.data.get("show") ? "modal" : ""}`}
           style={{ display: `${this.props.formModel_value.data.get("show") ? "flex" : "none"}` }}>
        <div className="modal-content">
          <div style={{ padding: "10px" }}>
            <div className={"flex_center"} style={{ marginTop: "20px" }}>
              <Icon style={{ color: "#51d4b2", fontSize: "35px" }} type="check-circle"/>
            </div>
          </div>
          <div className={"flex_center"} style={{ marginBottom: "20px" }}>
            <div style={{ fontSize: "18px", color: "rgb(135,145,146)" }}>谢谢您的参与!</div>
          </div>
          <div style={{
            background: "rgb(35,199,255)",
            color: "white",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px"
          }}>
            <div onClick={this.show} className={"flex_center"} style={{ padding: "10px" }}>
              <div style={{ fontSize: "15px" }}>关闭</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 当前操作组件
    formModel_value: state.formModle_rdc
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormModel);

