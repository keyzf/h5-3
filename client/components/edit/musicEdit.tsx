import * as React from "react";
import { Tabs, Button, Icon, Tag, Divider } from "antd";
import UpLoadMusic from "../common/musicUpload";
import { useEffect, useState } from "react";
import userAsset_list_api from "../../api/userasset_list.api";

const MusicEdit = React.memo(() => {
  const [state, setState] = useState({ tip: [], nowTip: "user" });

  useEffect(() => {
    userAsset_list_api()
      .then((resp: any) => {
        setState({ tip: JSON.parse(resp).list, nowTip: state.nowTip });
      })
      .catch(() => {});
  }, []);

  const chooseTip = tip => {
    setState({
      tip: state.tip,
      nowTip: tip
    });
  };

  const upMusic = file => {};

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

  return (
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
      </TabPane>
    </Tabs>
  );
});

const TabPane = Tabs.TabPane;
const { CheckableTag } = Tag;

export default MusicEdit;
