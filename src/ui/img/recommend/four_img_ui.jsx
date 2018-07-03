import React, { PureComponent } from "react";
import { Row, Col } from "antd";

class FourImgUi extends PureComponent {
  render() {
    const customize = this.props.data.get("customize");
    return (
      <Row gutter={16}>
        <Col span={8}>
          {customize.get("item").map((data, index) => {
            return (
              <React.Fragment key={index}>
                {index === 0 ? (
                  <Col key={index} span={24}>
                    <Col span={24}>
                      {data.getIn(["link", "value"]) === "" ? (
                        <img
                          width={
                            data.get("width").get("value")
                              ? data.get("width").get("value")
                              : "100%"
                          }
                          height={
                            data.get("height").get("value")
                              ? data.get("height").get("value")
                              : "auto"
                          }
                          src={
                            data.get("img")
                              ? data.get("img")
                              : "http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg"
                          }
                          alt={"img"}
                        />
                      ) : (
                        <a href={data.getIn(["link", "value"])}>
                          <img
                            width={
                              data.get("width").get("value")
                                ? data.get("width").get("value")
                                : "100%"
                            }
                            height={
                              data.get("height").get("value")
                                ? data.get("height").get("value")
                                : "auto"
                            }
                            src={
                              data.get("img")
                                ? data.get("img")
                                : "http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg"
                            }
                            alt={"img"}
                          />
                        </a>
                      )}
                    </Col>
                  </Col>
                ) : (
                  ""
                )}
                {index === 1 ? (
                  <Col key={index} span={24}>
                    <Col span={24}>
                      {data.getIn(["link", "value"]) === "" ? (
                        <img
                          width={
                            data.get("width").get("value")
                              ? data.get("width").get("value")
                              : "100%"
                          }
                          height={
                            data.get("height").get("value")
                              ? data.get("height").get("value")
                              : "auto"
                          }
                          src={
                            data.get("img")
                              ? data.get("img")
                              : "http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg"
                          }
                          alt={"img"}
                        />
                      ) : (
                        <a href={data.getIn(["link", "value"])}>
                          <img
                            width={
                              data.get("width").get("value")
                                ? data.get("width").get("value")
                                : "100%"
                            }
                            height={
                              data.get("height").get("value")
                                ? data.get("height").get("value")
                                : "auto"
                            }
                            src={
                              data.get("img")
                                ? data.get("img")
                                : "http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg"
                            }
                            alt={"img"}
                          />
                        </a>
                      )}
                    </Col>
                  </Col>
                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })}
        </Col>
        <Col span={8}>
          {customize.get("item").map((data, index) => {
            return (
              <React.Fragment key={index}>
                {index === 2 ? (

                  <Col span={24}>
                    {data.getIn(["link", "value"]) === "" ? (
                      <img
                        width={
                          data.get("width").get("value")
                            ? data.get("width").get("value")
                            : "100%"
                        }
                        height={
                          data.get("height").get("value")
                            ? data.get("height").get("value")
                            : "auto"
                        }
                        src={
                          data.get("img")
                            ? data.get("img")
                            : "http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg"
                        }
                        alt={"img"}
                      />
                    ) : (
                      <a href={data.getIn(["link", "value"])}>
                        <img
                          width={
                            data.get("width").get("value")
                              ? data.get("width").get("value")
                              : "100%"
                          }
                          height={
                            data.get("height").get("value")
                              ? data.get("height").get("value")
                              : "auto"
                          }
                          src={
                            data.get("img")
                              ? data.get("img")
                              : "http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg"
                          }
                          alt={"img"}
                        />
                      </a>
                    )}
                  </Col>

                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })}
        </Col>
        <Col span={8}>
          {customize.get("item").map((data, index) => {
            return (
              <React.Fragment key={index}>
                {index === 3 ? (

                  <Col span={24}>
                    {data.getIn(["link", "value"]) === "" ? (
                      <img
                        width={
                          data.get("width").get("value")
                            ? data.get("width").get("value")
                            : "100%"
                        }
                        height={
                          data.get("height").get("value")
                            ? data.get("height").get("value")
                            : "auto"
                        }
                        src={
                          data.get("img")
                            ? data.get("img")
                            : "http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg"
                        }
                        alt={"img"}
                      />
                    ) : (
                      <a href={data.getIn(["link", "value"])}>
                        <img
                          width={
                            data.get("width").get("value")
                              ? data.get("width").get("value")
                              : "100%"
                          }
                          height={
                            data.get("height").get("value")
                              ? data.get("height").get("value")
                              : "auto"
                          }
                          src={
                            data.get("img")
                              ? data.get("img")
                              : "http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg"
                          }
                          alt={"img"}
                        />
                      </a>
                    )}
                  </Col>
                ) : (
                  ""
                )}
              </React.Fragment>
            );
          })}
        </Col>
      </Row>
    );
  }
}

export { FourImgUi };
