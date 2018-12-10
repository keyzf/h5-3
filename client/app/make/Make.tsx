/**
 * @author 陈迎
 * @date 2018年11月27日12:04:41
 * @desc 长单页制作页面
 * 实现功能：
 * 1. 制作业布局
 * 2. 创建历史记录
 */
import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "redux-react-hook";
import { Col, Layout, Modal, Row } from "antd";
import MakeSider from "./MakeSider";
import MakeEdit from "./MakeEdit";
import MakeContent from "./MakeContent";
import MakeToolBar from "./MakeToolBar";
import MakeNav from "./MakeNav";
import { css } from "glamor";
import entrance_api from "../../api/entrance";

/**
 * @desc 组件函数
 */
interface Props {
  id: number;
  web: string;
}

export default React.memo((props: Props) => {
  // 控制定时器更新
  const [countLog, setCountLog] = useState(0);
  // 发送log初始化及定时更新请求
  const dispatch = useDispatch();
  dispatch({ type: "LOG_INIT", payload: props.id });
  dispatch({ type: "GLOBAL", payload: { sid: props.id } });
  setTimeout(() => {
    setCountLog(countLog + 1);
    dispatch({ type: "LOG_CREAT", payload: props.id });
  }, 5 * 60 * 1000);

  useEffect(() => {
    entrance_api(props.id, props.web).then(resp => {
      dispatch({ type: "INIT", payload: resp });
    });
  }, []);

  const layout = css({
    height: "100vh"
  });
  const header = css({
    height: "48px",
    background: "rgb(0, 167, 255)",
    padding: "0 14px",
    lineHeight: "48px",
    overflow: "hidden"
  });
  const content = css({
    height: "calc(100vh - 48px)"
  });
  const edit = css({
    background: " #fafafa"
  });

  /**
   *  antd 样式拆分
   */
  const { Header, Sider, Content } = Layout;

  /**
   * antd-sider 配置
   * @param width - 宽
   */
  interface SiderConfig {
    (width: number): { trigger: null; width: number; theme: any };
  }

  const siderConfig: SiderConfig = width => {
    return {
      trigger: null,
      width: width,
      theme: "light"
    };
  };

  return (
    <Row>
      <Col xxl={24} xl={24} lg={24} md={0} sm={0} xs={0}>
        <Layout {...layout}>
          <Header {...header}>
            <MakeNav />
          </Header>
          <Layout {...content}>
            <Sider {...siderConfig(334)}>
              <MakeSider />
            </Sider>
            <Content>
              <MakeContent />
            </Content>
            <Sider {...siderConfig(45)}>
              <MakeToolBar />
            </Sider>
            <Sider {...edit} {...siderConfig(285)}>
              <MakeEdit />
            </Sider>
          </Layout>
        </Layout>
      </Col>
      <Col xxl={0} xl={0} lg={0} md={24} sm={24} xs={24}>
        <div>
          为了获得更好的操作体验，请至电脑端进行制作，推荐浏览器为：谷歌浏览器（Chrome）
        </div>
      </Col>
    </Row>
  );
});
