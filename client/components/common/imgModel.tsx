import * as React from "react";
import { useEffect, useState } from "react";
import {
  Modal,
  Tabs,
  Button,
  Row,
  Col,
  Pagination,
  Icon,
  Tooltip,
  message
} from "antd";
import userAssets_api from "../../api/userasset_api";
import delete_api from "../../api/delete_api";

const ImgModel = React.memo(
  (props: { children: any; choose: string; imgChange: any }) => {
    const [state, setState] = useState(false);
    const [imgApi, setImgApi] = useState({ error: "", list: [], sum: 0 });
    const [page, setPage] = useState(1);
    const [choose, setChoose] = useState(props.choose);

    useEffect(() => {
      userAssets_api(24, 0)
        .then((resp: any) => {
          setImgApi(JSON.parse(resp));
        })
        .catch(() => {});
    });

    const del = mid => {
      delete_api(mid).then(resp => {
        resp ? message.error("删除失败") : message.success("删除成功");
      });
      userAssets_api(24, choose)
        .then((resp: any) => {
          setImgApi(JSON.parse(resp));
        })
        .catch(() => {});
    };

    const delAll = () => {
      imgApi.list.map(data => {
        delete_api(data.mid).then(resp => {});
      });

      message.success("清空成功");

      userAssets_api(24, choose)
        .then((resp: any) => {
          setImgApi(JSON.parse(resp));
        })
        .catch(() => {});
    };

    const pageChange = current => {
      userAssets_api(24, current - 1)
        .then((resp: any) => {
          setImgApi(JSON.parse(resp));
          setPage(current);
        })
        .catch(error => {});
    };

    const onChoose = src => {
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

    const TabPane = Tabs.TabPane;
    const operations = (
      <Button.Group>
        <Button>上传</Button>
        <Button onClick={() => delAll()}>清空</Button>
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
                    {imgApi.list.map((data, index) => {
                      return (
                        <React.Fragment key={index}>
                          {index < page * 24 && index >= page * 24 - 24 ? (
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
                          ) : (
                            ""
                          )}
                        </React.Fragment>
                      );
                    })}
                  </React.Fragment>
                ) : (
                  <div
                    style={{
                      height: "420px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <img
                      alt={"img"}
                      src={"http://src.e7wei.com/0.2823198691104869.png"}
                    />
                  </div>
                )}
              </Row>
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
