/**
 * @author 陈迎
 * @date 2018年11月27日12:04:41
 * @desc 长单页制作页面
 * 实现功能：
 * 1. 制作业布局
 * 2. 创建历史记录
 */
import * as React from "react";
import { useState } from "react";
import { useDispatch } from "redux-react-hook";

import { Layout } from "antd";
import MakeSider from "./MakeSider";
import MakeEdit from "./MakeEdit";
import MakeContent from "./MakeContent";
import MakeToolBar from "./MakeToolBar";
import MakeNav from "./MakeNav";
import { css, cx } from "emotion";

/**
 * @desc 组件函数
 */
interface Props {
  id: number
}

export default React.memo((props: Props) => {
  // 控制定时器更新
  const [countLog, setCountLog] = useState(0);
  // 发送log初始化及定时更新请求
  const dispatch = useDispatch();
  dispatch({ type: "LOG_INIT", payload: props.id });
  setTimeout(() => {
    setCountLog(countLog + 1);
    dispatch({ type: "LOG_CREAT", payload: props.id });
  }, 5 * 60 * 1000);

  return (
    <Layout className={style.layout}>
      <Header className={cx(style.header)}>
        <MakeNav/>
      </Header>
      <Layout className={cx(style.content)}>
        <Sider {...siderConfig(334)}>
          <MakeSider/>
        </Sider>
        <Content>
          <MakeContent/>
        </Content>
        <Sider {...siderConfig(45)}>
          <MakeToolBar/>
        </Sider>
        <Sider className={style.edit} {...siderConfig(285)}>
          <MakeEdit/>
        </Sider>
      </Layout>
    </Layout>
  );
});

/**
 * 样式
 */
interface Style {
  layout: string;
  header: string;
  content: string;
  edit: string;
}

const style: Style = {
  layout: css`
    height: 100vh;
  `,
  header: css`
     {
      height: 48px;;
      background: rgb(0, 167, 255);
      padding: 0 14px;
      line-height: 48px;
      overflow: hidden;
    }
  `,
  content: css`
     {
      height: calc(100vh - 48px);
    }
  `,
  edit: css`
     {
      background: #fafafa;
    }
  `
};

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
