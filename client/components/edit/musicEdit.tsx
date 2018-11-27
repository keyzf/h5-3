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
  const [list, setList] = useState({ list: [], count: 0 });
  const [play, setPlay] = useState(false);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    /**
     * 音乐分类
     */
    userAsset_list_api()
      .then((resp: any) => {
        setState({ tip: JSON.parse(resp).list, nowTip: state.nowTip });
        setSum(JSON.parse(resp).sum);
      })
      .catch(() => {
      });

    /**
     * 用户上传音乐
     */
    userAssets_api(4, 0)
      .then((resp: any) => {
        setList({ list: JSON.parse(resp).list, count: 0 });
      })
      .catch();
  }, []);

  const del = (mid) => {
    delete_api(mid)
      .then(() => {
        userAssets_api(4, list.count)
          .then((resp: any) => {
            setList({ list: JSON.parse(resp).list, count: 0 });
            setSum(JSON.parse(resp).sum);
            message.success("删除成功");
          })
          .catch(() => {
            message.success("删除失败");
          });
      })
      .catch(() => {
        message.error("删除失败");
      });
  };

  const delUse = () => {
    dispatch({ type: "MUSIC_VALUE", payload: { url: "", desc: "" } });
    // @ts-ignore
    document.getElementById("audio").pause();
  };

  const onChoose = (url, desc) => {
    dispatch({ type: "MUSIC_VALUE", payload: { url: url, desc: desc } });
  };

  const audio = (name, url, desc) => {
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

  const chooseTip = tip => {
    if (tip === "user") {
      userAssets_api(4, 0)
        .then((resp: any) => {
          setList({ list: JSON.parse(resp).list, count: 0 });
          setSum(JSON.parse(resp).sum);
        })
        .catch();
    } else {
      system_api(0, tip, `10`).then((resp: any) => {
        setList({ list: JSON.parse(resp).list, count: 0 });
        setSum(JSON.parse(resp).sum);
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
        setList({ list: JSON.parse(resp).list, count: 0 });
        setSum(JSON.parse(resp).sum);
        message.success("删除成功");
      })
      .catch(() => {
        message.success("删除失败");
      });
  };

  const onChangePage = (page) => {
    if (state.nowTip === "user") {
      userAssets_api(4, page)
        .then((resp: any) => {
          setList({ list: JSON.parse(resp).list, count: page });
          setSum(JSON.parse(resp).sum);
        })
        .catch();
    } else {
      system_api(page, state.nowTip, `10`).then((resp: any) => {
        setList({ list: JSON.parse(resp).list, count: page });
        setSum(JSON.parse(resp).sum);
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
          <Icon type="upload" theme="outlined"/>
          上传音乐
        </span>
      </UpLoadMusic>
    </Button>
  );

  return (
    <React.Fragment>
      <audio id={"audio"} autoPlay={true} src={music.url}/>
      <Tabs tabBarExtraContent={operations}>
        <TabPane tab="音乐设置" key="1" style={{ padding: "0 5px" }}>
          <CheckableTag
            checked={"user" === state.nowTip}
            onChange={() => chooseTip("user")}
          >
            我的
          </CheckableTag>
          {state.tip.map((data, index) => {
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
                renderItem={item => (
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
                    {item.desc}
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
                    onChange: (e) => onChangePage(e)
                  }}
                  renderItem={item => (
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
                      {item.desc}
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
                      <Icon type="upload" theme="outlined"/>
                      上传音乐
                    </Button>
                  </UpLoadMusic>
                </div>
                <br/>
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
                    <a
                      href="https://fs.kf5.com/upload/6310/201702/a4f32d41ab531a691429bdcde5cc3444.rar?ufileattname=%E9%9F%B3%E4%B9%90%E5%89%AA%E8%BE%91%E5%B7%A5%E5%85%B7.rar">
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
          {state.nowTip !== "user" ?
            <React.Fragment>
              <Divider/>
              <div style={{ marginBottom: "10px" }}>
                <List
                  itemLayout="horizontal"
                  dataSource={list.list}
                  pagination={{
                    simple: true,
                    total: sum,
                    pageSize: 10,
                    current: list.count,
                    onChange: (e) => onChangePage(e)
                  }}
                  renderItem={item => (
                    <List.Item
                      actions={[
                        <a>
                          {music.url === item.url ? (
                            <Icon
                              type="check"
                              onClick={delUse}
                            />
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
            </React.Fragment> : ""}

        </TabPane>
      </Tabs>
    </React.Fragment>
  );
});

const TabPane = Tabs.TabPane;
const { CheckableTag } = Tag;

export default MusicEdit;
