import * as React from "react";
import { Tabs, Input } from "antd";
import { useDispatch } from "redux-react-hook";


const VideoEditor = React.memo(() => {
  const dispatch = useDispatch();
  const shareChange = e => {
    dispatch({ type: "VIDEO_VALUE", payload: {
      url: e.target.value.replace("width=", ``)
        .replace("height=", ``)
        .replace(
          ">",
          ` width=100% height=100%>`
        )
    } });
  };
  const { TextArea } = Input;
  return (

      <Tabs defaultActiveKey="1" style={{ height: "100%" }}>
        <Tabs.TabPane tab="视频设置" key="1" style={{ padding: "0 6px" }}>
          <div>
            将视频通用代码粘贴至框内即可。<a
            href={"http://www.e7wei.com/help-article-id-442.html"}
            target="view_window"
          >
            查看帮助
          </a>
          </div>
          <br/>
          <TextArea rows={4} onChange={(e) => shareChange(e)}/>
          <div style={{ marginTop: "5px" }}>
            <div>
              支持的视频：<a
              href={"https://v.qq.com/"}
              target="view_window"
            >
              腾讯视频
            </a>、<a href={"https://www.youku.com/"} target="view_window">
              优酷
            </a>
            </div>
          </div>
        </Tabs.TabPane>
      </Tabs>
  );

});

export default VideoEditor;
