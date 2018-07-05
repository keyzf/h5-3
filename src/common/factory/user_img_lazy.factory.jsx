import React, { PureComponent } from "react";
import { connect } from "react-redux";
import range from "lodash.range";
import LazyLoad from "react-lazyload";
import { redux_action } from "../../redux/action";
import { $$api } from "../../api/api.database";
import axios from "axios/index";
import { Row, Col } from "antd";
import style from "./img_lazy_choose.module.scss";

class UserImgLazyFactory extends PureComponent {
  choose_img = img_url => {
    const $$up_recode = this.props.upload_recode_value.data;
    this.props.upDate("UPLOAD_RECODE", {
      user_upload_img: $$up_recode.get("user_upload_img"),
      choose_img_url: img_url
    });
  };

  render() {
    const $$data = this.props.img_model_value.data;
    const $$up_recode = this.props.upload_recode_value.data;
    const ShowUserImg = props => {
      if ($$data.get("user_length") === props.index) {
        if ($$api.get("surroundings") === "development") {
          axios({
            method: "get",
            url: `${$$api.getIn(["development", "user_img_other"])}${
              props.index
              }`
          }).then(response => {
            this.props.upDate("IMG_MODEL", {
              user_img: response.data,
              user_length: $$data.get("user_length") + 1,
              user_page_number: $$data.get("user_page_number")
            });
          });
        }
      }
      if ($$api.get("surroundings") === "produce") {
        let params = new URLSearchParams();
        params.append("id", this.props.id_value.data.get("id"));
        params.append("page_number", props.index);
        axios
          .post(`${$$api.getIn(["produce", "user_img_other"])}`, params)
          .then(response => {
            this.props.upDate("IMG_MODEL", {
              user_img: response.data,
              user_length: $$data.get("user_length") + 1,
              user_page_number: $$data.get("user_page_number")
            });
          });
      }
      return (
        <Row gutter={16}>
          {$$data.get("user_img").map((data, index) => {
            return (
              <Col
                span={4}
                style={{ margin: "0 0 5px 0", height: "60px" }}
                onClick={this.choose_img.bind(this, data.get("url"))}
                key={index}
              >
                <div
                  key={index}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "inline-block",
                    verticalAlign: "top",
                    marginBottom: "10px",
                    marginRight: "13px",
                    boxSizing: "border-box"
                  }}
                  className={
                    data.get("url") === $$up_recode.get("choose_img_url")
                      ? style.part_active
                      : style.part_choose
                  }
                >
                  <img
                    style={{
                      verticalAlign: "middle",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      margin: "auto"
                    }}
                    src={data.get("url")}
                    alt={"img"}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      );
    };
    return (
      <div style={{ width: "100%", maxHeight: "400px", overflow: "auto" }}>
        <Row gutter={16}>
          {$$up_recode.get("user_upload_img").size
            ? $$up_recode.get("user_upload_img").map((data, index) => {
              return (
                <Col
                  span={4}
                  style={{ margin: "0 0 5px 0", height: "60px" }}
                  key={index}
                  onClick={this.choose_img.bind(this, data.url)}
                >
                  <div
                    key={index}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "inline-block",
                      verticalAlign: "top",
                      marginBottom: "10px",
                      marginRight: "13px",
                      boxSizing: "border-box"
                    }}
                    className={
                      data.url === $$up_recode.get("choose_img_url")
                        ? style.part_active
                        : style.part_choose
                    }
                  >
                    <img
                      style={{
                        verticalAlign: "middle",
                        maxWidth: "100%",
                        maxHeight: "100%",
                        margin: "auto"
                      }}
                      src={data.url}
                      alt={"img"}
                    />
                  </div>
                </Col>
              );
            })
            : ""}
        </Row>
        {range($$data.get("user_page_number")).map((data, index) => {
          return (
            <LazyLoad height={450} key={index} overflow once>
              <ShowUserImg index={index}/>
            </LazyLoad>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    img_model_value: state.img_model_reducer,
    upload_recode_value: state.upload_recode_reducer,
    id_value: state.user_id_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upDate: (name, data) => dispatch(redux_action(name, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserImgLazyFactory);
