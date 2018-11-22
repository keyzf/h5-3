import * as React from "react";
import { Tabs, Button, Icon, Tag, Divider } from "antd";



const MusicEdit = React.memo(() => {
  const TabPane = Tabs.TabPane;
  const { CheckableTag } = Tag;
  const operations = <Button style={{ marginRight: "5px" }} type="dashed"> <Icon type="upload" theme="outlined"/>上传音乐</Button>;

  return (
    <Tabs tabBarExtraContent={operations}>
      <TabPane tab="音乐设置" key="1" style={{ padding: "0 5px" }}>
        <CheckableTag checked={true}>我的</CheckableTag>
        <Divider>暂无音乐</Divider>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Button type="dashed"> <Icon type="upload" theme="outlined"/>上传音乐</Button>
        </div>
        <br/>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p>MP3音乐2M以内</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <p>
            <a
              href='https://fs.kf5.com/upload/6310/201702/a4f32d41ab531a691429bdcde5cc3444.rar?ufileattname=%E9%9F%B3%E4%B9%90%E5%89%AA%E8%BE%91%E5%B7%A5%E5%85%B7.rar'>
              下载音乐压缩工具
            </a>
          </p>
        </div>
      </TabPane>
    </Tabs>
  );
});


export default MusicEdit;
