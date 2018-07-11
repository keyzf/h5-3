import React, { PureComponent } from "react";
import connect from "../../redux/decorator";
import range from "lodash.range";
import LazyLoad from "react-lazyload";
import { Row, Col, Divider, Button, Tooltip } from "antd";
import style from "./img_lazy_choose.module.scss";
import { user_img } from "../../ajax/user_img";
import UploadImgFactory from "../factory/upload_img_form.factory";
import { delect_ajax } from "../../ajax/delect";

@connect
export default class UserImgLazyFactory extends PureComponent {
  state = {
    number: "",
    length: 1,
    img_library: [],
    // 上传图片
    upload: {
      upload: {
        value: ""
      }
    }
  };

  componentWillMount() {
    user_img(0).then(
      data => {
        let sum = "";
        if (data.sum % 40 !== 0) {
          sum = data.sum / 40 + 1;
        } else {
          sum = data.sum / 40;
        }
        this.setState({
          number: sum,
          img_library: data.list
        });
      },
      function(error) {
      }
    );
  }

  choose_img = img_url => {
    const $$up_recode = this.props.upload_recode_value.data;
    this.props.upData("UPLOAD_RECODE", {
      user_upload_img: $$up_recode.get("user_upload_img"),
      choose_img_url: img_url
    });
  };

  del = (mid, number) => {
    const $$up_recode = this.props.upload_recode_value.data;
    delect_ajax(mid)
      .then((data) => {
        this.props.upData("UPLOAD_RECODE", {
          user_upload_img: $$up_recode.get("user_upload_img").delete(number),
          choose_img_url: $$up_recode.get("choose_img_url")
        });
      });
  };

  render() {
    const $$up_recode = this.props.upload_recode_value.data;
    const ShowUserImg = props => {
      if (this.state.length === props.index) {
        user_img(0).then(
          data => {
            this.setState({
              length: this.state.length + 1,
              img_library: data.list
            });
          },
          function(error) {
          }
        );
      }
      return (
        <Row gutter={16}>
          {this.state.img_library.map((data, index) => {
            return (
              <Col
                span={4}
                style={{ margin: "0 0 5px 0" }}
                onClick={this.choose_img.bind(this, data.url)}
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
                    data.url === $$up_recode.get("choose_img_url")
                      ? `${style.part_active}`
                      : `${style.part_choose}`
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
                <Button onClick={this.del.bind(this, data.mid, index)} style={{ width: "100%" }}>
                  删除
                </Button>
              </Col>
            );
          })}
        </Row>
      );
    };


    return (
      <React.Fragment>
        {this.state.img_library.length ? (
          <React.Fragment>
            <div
              style={{ width: "100%", maxHeight: "400px", overflow: "auto" }}
            >
              <Row gutter={16}>
                {$$up_recode.get("user_upload_img").size
                  ? $$up_recode.get("user_upload_img").map((data, index) => {
                    return (
                      <Col
                        span={4}
                        style={{ margin: "0 0 5px 0", height: "60px" }}
                        key={index}
                        onClick={this.choose_img.bind(this, data.get("url"))}
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
                            data.get("url") ===
                            $$up_recode.get("choose_img_url")
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
                          <Button onClick={this.del.bind(this, data.mid, index)} style={{ width: "100%" }}>
                            删除
                          </Button>
                        </div>
                      </Col>
                    );
                  })
                  : ""}
              </Row>
              {range(this.state.number).map((data, index) => {
                return (
                  <LazyLoad height={450} key={index} overflow once>
                    <ShowUserImg index={index}/>
                  </LazyLoad>
                );
              })}
            </div>
            <Divider/>
            <div style={{ padding: "0 35%", width: "100%" }}>
              <Button
                onClick={this.props.closeModal}
                style={{ width: "100px", marginRight: "10px" }}
              >
                取消
              </Button>
              <Button
                onClick={this.props.closeModal}
                style={{ width: "100px", marginRight: "10px" }}
              >
                确定
              </Button>
            </div>
          </React.Fragment>
        ) : (
          <div style={{ textAlign: "center", padding: "0 80px" }}>
            <img
              src={"http://src.e7wei.com/0.2823198691104869.png"}
              alt={"img"}
            />
            <br/>
            <UploadImgFactory
              onChange={this.uploadChange}
              child={
                <Button type="dashed" style={{ width: "150px" }}>
                  种植素材
                </Button>
              }
              {...this.state.upload}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}
