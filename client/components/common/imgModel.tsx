import * as React from "react";
import { useEffect, useState } from "react";
import {
  Modal,
  Tabs,
  Button,
  Row,
  Col,
  Pagination,
  Tooltip,
  message,
  Popconfirm
} from "antd";
import UpLoadImg from "./imgUpload";
import userAssets_api from "../../api/userasset_api";
import delete_api from "../../api/delete_api";

const ImgModel = React.memo(
  (props: { children: any; choose: string; imgChange: any }) => {
    const [state, setState] = useState(false);
    const [imgApi, setImgApi] = useState({ error: "", list: [], sum: 0 });
    const [choose, setChoose] = useState(props.choose);

    useEffect(() => {
      userAssets_api(24, 1)
        .then((resp: any) => {
          setImgApi(resp);
        })
        .catch(() => {});
    }, []);

    const del = (mid: any) => {
      delete_api(mid).then(resp => {
        if (resp) {
          message.error("删除失败");
        } else {
          const list = [];
          imgApi.list.map((data, index) => {
            if (data.mid === mid) {
            } else {
              list[index] = data;
            }
          });
          setImgApi({ error: imgApi.error, list: list, sum: imgApi.sum - 1 });
          message.success("删除成功");
        }
      });
    };

    const delAll = () => {
      imgApi.list.map((data: any) => {
        delete_api(data.mid).then(resp => {});
      });
      message.success("清空成功");
      setImgApi({ error: "", list: [], sum: 0 });
    };

    const pageChange = (current: any) => {
      userAssets_api(24, current)
        .then((resp: any) => {
          setImgApi(resp);
        })
        .catch(error => {});
    };

    const onChoose = (src: any) => {
      setChoose(src);
    };

    const open = () => {
      setState(true);
    };

    const ok = () => {
      props.imgChange(choose);
      setState(false);
    };

    const close = () => {
      setState(false);
    };

    const uploadChange = (field: any) => {

      if (field.upload.value.file.status === "done") {
       if(Number(field.upload.value.file.response.error)===1){
           message.error(field.upload.value.file.response.msg);
       } else {
          message.success("图片添加成功");
          userAssets_api(24, 1)
            .then((resp: any) => {
              setImgApi(resp);
            })
            .catch(() => {});
        }
      }
    };

    const TabPane = Tabs.TabPane;
    const operations = (
      <Button.Group>
        <Button htmlType={"button"} style={{ top: "-20px" }} type="primary">
          <UpLoadImg upload={{ value: "" }} onChange={uploadChange}>
            <div style={{ position: "relative", top: "-5px", color: "white" }}>
              图片上传
            </div>
          </UpLoadImg>
        </Button>
        <Popconfirm
          title="确定清空所有素材?"
          onConfirm={() => delAll()}
          okText="确定"
          cancelText="取消"
        >
          <Button htmlType={"button"}>清空</Button>
        </Popconfirm>
      </Button.Group>
    );

    return (
      <div>
        <div onClick={open}>{props.children}</div>
        <Modal
          title="素材库"
          visible={state}
          width={800}
          onCancel={close}
          onOk={ok}
          okText={"确定"}
          cancelText={"取消"}
        >
          <Tabs tabBarExtraContent={operations}>
            <TabPane tab="我的素材" key="1">
              <Row gutter={8} style={{ height: "400px" }}>
                {imgApi.list.length ? (
                  <React.Fragment>
                    {imgApi.list.map((data: any, index: any) => {
                      return (
                        <React.Fragment key={index}>
                          <Col
                            span={4}
                            style={{ height: "90px", marginBottom: "10px" }}
                            key={index}
                          >
                            {choose === data.url ? (
                              <Tooltip
                                placement="topLeft"
                                trigger={"click"}
                                title={
                                  <div
                                    style={{ cursor: "pointer" }}
                                    onClick={() => del(data.mid)}
                                  >
                                    删除
                                  </div>
                                }
                              >
                                <span onClick={() => onChoose(data.url)}>
                                  <img
                                    style={{ border: "2px black solid" }}
                                    src={data.url}
                                    alt={data.desc}
                                    width={"110px"}
                                    height={"90px"}
                                  />
                                </span>
                              </Tooltip>
                            ) : (
                              <img
                                onClick={() => onChoose(data.url)}
                                src={data.url}
                                alt={data.desc}
                                width={"110px"}
                                height={"90px"}
                              />
                            )}
                          </Col>
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <img
                        alt={"img"}
                        src={"http://src.e7wei.com/0.2823198691104869.png"}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <UpLoadImg upload={{ value: "" }} onChange={uploadChange}>
                        <Button htmlType={"button"} type="primary">
                          图片上传
                        </Button>
                      </UpLoadImg>
                    </div>
                  </React.Fragment>
                )}
              </Row>

              {/*页码*/}
              {imgApi.list.length ? (
                <Pagination
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  onChange={pageChange}
                  defaultCurrent={1}
                  pageSize={24}
                  total={imgApi.sum}
                />
              ) : (
                ""
              )}
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
);

export default ImgModel;
