import * as React from "react";
import { Tabs, Button, Icon, Tag, Divider, List, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useMappedState } from "redux-react-hook";
import UpLoadMusic from "../common/musicUpload";
import userAsset_list_api from "../../api/userasset_list.api";
import userAssets_api from "../../api/userasset_api";
import Store from "../../typing/store";
import { useDispatch } from "redux-react-hook";
import delete_api from "../../api/delete_api";
import system_api from "../../api/system_api";
import { css } from "glamor";

const TabPane = Tabs.TabPane;
const { CheckableTag } = Tag;

const MusicEdit = React.memo(() => {
  const dispatch = useDispatch();
  const { music } = useMappedState(
    useCallback(
      (state: Store) => ({
        music: state.music
      }),
      []
    )
  );

  const [state, setState] = useState({ tip: [], nowTip: "user" });
  const [list, setList] = useState({ list: [], count: 1 });
  const [play, setPlay] = useState(false);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    /**
     * 音乐分类
     */
    userAsset_list_api()
      .then((resp: any) => {
        setState({ tip: resp.list, nowTip: state.nowTip });
        setSum(resp.sum);
      })
      .catch(() => {});

    /**
     * 用户上传音乐
     */
    userAssets_api(4, 1)
      .then((resp: any) => {
        setList({ list: resp.list, count: 1 });
        setSum(resp.sum);
      })
      .catch();
  }, []);

  const del = (mid: any) => {
    delete_api(mid).then(resp => {
      if (resp) {
        message.error("删除失败");
      } else {
        const lists = [];
        const sums = sum - 1;
        list.list.map(data => {
          if (data.mid === mid) {
          } else {
            lists.push(data);
          }
        });
        setList({ list: lists, count: list.count });
        setSum(sums);
        message.success("删除成功");
      }
    });
  };

  const delUse = () => {
    dispatch({ type: "MUSIC_VALUE", payload: { url: "", desc: "" } });
    // @ts-ignore
    document.getElementById("audio").pause();
  };

  const onChoose = (url: any, desc: any) => {
    dispatch({ type: "MUSIC_VALUE", payload: { url: url, desc: desc } });
  };

  const audio = (name: any, url: any, desc: any) => {
    if (name === "pause") {
      // @ts-ignore
      document.getElementById("audio").pause();
      setPlay(false);
    }
    if (name === "play") {
      dispatch({ type: "MUSIC_VALUE", payload: { url: url, desc: desc } });
      // @ts-ignore
      document.getElementById("audio").play();
      setPlay(true);
    }
  };

  const chooseTip = (tip: any) => {
    if (tip === "user") {
      setList({ list: [], count: 1 });
      /**
       * 用户上传音乐
       */
      userAssets_api(4, 1)
        .then((resp: any) => {
          setList({ list: resp.list, count: 1 });
          setSum(resp.sum);
        })
        .catch();
    } else {
      system_api(1, tip, `10`).then((resp: any) => {
        setList({ list: resp.list, count: 1 });
        setSum(resp.sum);
      });
    }

    setState({
      tip: state.tip,
      nowTip: tip
    });
  };

  const upMusic = () => {
    userAssets_api(4, list.count)
      .then((resp: any) => {
        setList({ list: resp.list, count: 0 });
        setSum(resp.sum);
      })
      .catch(() => {
        message.success("上传失败");
      });
    message.success("上传成功");
  };

  const onChangePage = (page: any) => {
    if (state.nowTip === "user") {
      userAssets_api(4, page)
        .then((resp: any) => {
          setList({ list: resp.list, count: page });
          setSum(resp.sum);
        })
        .catch();
    } else {
      system_api(page, state.nowTip, `10`).then((resp: any) => {
        setList({ list: resp.list, count: page });
        setSum(resp.sum);
      });
    }
  };

  const operations = (
    <Button
      htmlType={"button"}
      style={{ marginRight: "5px", top: "-16px" }}
      type="dashed"
    >
      <UpLoadMusic upload={{ value: "" }} onChange={upMusic}>
        <span style={{ position: "relative", top: "-3px" }}>
          <Icon type="upload" theme="outlined" />
          上传音乐
        </span>
      </UpLoadMusic>
    </Button>
  );
  const scrollbar = css({
    width: "100%",
    height: "calc(100vh - 190px)",
    overflowX: "auto",
    overflowY: "auto",
    scrollbarArrowColor: "transparent",
    scrollbarFaceColor: "transparent",
    scrollbarHighlightColor: "transparent",
    scrollbarShadowColor: "transparent",
    scrollbarDarkshadowColor: "transparent",
    scrollbarTrackColor: "transparent",
    scrollbarBaseColor: "transparent",

    "&::-webkit-scrollbar": {
      border: "none",
      width: 0,
      height: 0,
      backgroundColor: "transparent"
    },
    "&::-webkit-scrollbar-button": {
      display: "none"
    },
    "&::-webkit-scrollbar-track": {
      display: "none"
    },
    "&::-webkit-scrollbar-track-piece": {
      display: "none"
    },

    "&::-webkit-scrollbar-thumb": {
      display: "none"
    },
    "&::-webkit-scrollbar-corner": {
      display: "none"
    },
    "&::-webkit-resizer": {
      display: "none"
    }
  });

  return (
    <React.Fragment>
      <audio id={"audio"} src={music.url} />
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="音乐设置" key="1" style={{ padding: "0 5px" }}>
          <div {...scrollbar}>
            <CheckableTag
              checked={"user" === state.nowTip}
              onChange={() => chooseTip("user")}
            >
              我的
            </CheckableTag>
            {state.tip.map((data: any, index: any) => {
              return (
                <CheckableTag
                  onChange={() => chooseTip(data.tid)}
                  checked={data.tid === state.nowTip}
                  key={index}
                >
                  {data.typename}
                </CheckableTag>
              );
            })}

            {music.url ? (
              <React.Fragment>
                <Divider>当前使用</Divider>
                <List
                  itemLayout="horizontal"
                  dataSource={[{ url: music.url, desc: music.desc }]}
                  renderItem={(item: any) => (
                    <List.Item
                      actions={[
                        <a>
                          {play ? (
                            <Icon
                              type="pause-circle-o"
                              onClick={() =>
                                audio("pause", item.url, item.desc)
                              }
                            />
                          ) : (
                            <Icon
                              type="play-circle-o"
                              onClick={() => audio("play", item.url, item.desc)}
                            />
                          )}
                        </a>,
                        <a>
                          <Icon
                            onClick={delUse}
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                          />
                        </a>
                      ]}
                    >
                      <i
                        className="iconfont icon-yinle"
                        style={{
                          marginRight: "5px",
                          transform: "translate(3px,-3px)"
                        }}
                      />
                      <div
                        style={{
                          width: "120px",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap"
                        }}
                      >
                        {item.desc}
                      </div>
                    </List.Item>
                  )}
                />
              </React.Fragment>
            ) : (
              ""
            )}

            {/*用户数据界面*/}
            {state.nowTip === "user" ? (
              list.list.length ? (
                <React.Fragment>
                  <Divider>历史上传</Divider>
                  <List
                    itemLayout="horizontal"
                    dataSource={list.list}
                    pagination={{
                      simple: true,
                      total: sum,
                      pageSize: 10,
                      current: list.count,

                      onChange: e => onChangePage(e)
                    }}
                    renderItem={(item: any) => (
                      <List.Item
                        actions={[
                          <a>
                            {play ? (
                              <Icon
                                type="pause-circle-o"
                                onClick={() =>
                                  audio("pause", item.url, item.desc)
                                }
                              />
                            ) : (
                              <Icon
                                type="play-circle-o"
                                onClick={() =>
                                  audio("play", item.url, item.desc)
                                }
                              />
                            )}
                          </a>,
                          <a>
                            <Icon
                              onClick={() => del(item.mid)}
                              className="dynamic-delete-button"
                              type="minus-circle-o"
                            />
                          </a>
                        ]}
                      >
                        <i
                          className="iconfont icon-yinle"
                          style={{
                            marginRight: "5px",
                            transform: "translate(3px,-3px)"
                          }}
                        />
                        <div
                          style={{
                            width: "120px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap"
                          }}
                        >
                          {item.desc}
                        </div>
                      </List.Item>
                    )}
                  />
                </React.Fragment>
              ) : (
                <React.Fragment>
                  <Divider>暂无音乐</Divider>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <UpLoadMusic upload={{ value: "" }} onChange={upMusic}>
                      <Button type="dashed" htmlType={"button"}>
                        <Icon type="upload" theme="outlined" />
                        上传音乐
                      </Button>
                    </UpLoadMusic>
                  </div>
                  <br />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <p>MP3音乐2M以内</p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <p>
                      <a href="https://fs.kf5.com/upload/6310/201702/a4f32d41ab531a691429bdcde5cc3444.rar?ufileattname=%E9%9F%B3%E4%B9%90%E5%89%AA%E8%BE%91%E5%B7%A5%E5%85%B7.rar">
                        下载音乐压缩工具
                      </a>
                    </p>
                  </div>
                </React.Fragment>
              )
            ) : (
              ""
            )}

            {/*分类*/}
            {state.nowTip !== "user" ? (
              <React.Fragment>
                <Divider />
                <div style={{ marginBottom: "10px" }}>
                  <List
                    itemLayout="horizontal"
                    dataSource={list.list}
                    pagination={{
                      simple: true,
                      total: sum,
                      pageSize: 10,
                      current: list.count,
                      onChange: e => onChangePage(e)
                    }}
                    renderItem={(item: any) => (
                      <List.Item
                        actions={[
                          <a>
                            {music.url === item.url ? (
                              <Icon type="check" onClick={delUse} />
                            ) : (
                              <i
                                className=" iconfont icon-xuanxiangkuang"
                                onClick={() => onChoose(item.url, item.name)}
                              />
                            )}
                          </a>
                        ]}
                      >
                        <i
                          className="iconfont icon-yinle"
                          style={{
                            marginRight: "5px",
                            transform: "translate(3px,-3px)"
                          }}
                        />
                        {item.name}
                      </List.Item>
                    )}
                  />
                </div>
              </React.Fragment>
            ) : (
              ""
            )}
          </div>
        </TabPane>
      </Tabs>
    </React.Fragment>
  );
});

export default MusicEdit;
