import * as React from "react";
import { css } from "react-emotion";
import { Layout } from "antd";
import MakeSider from "./MakeSider";
import MakeEdit from "./MakeEdit";
import MakeContent from "./MakeContent";
import MakeToolBar from "./MakeToolBar";


/**
 * @desc Template
 */
export default React.memo((props: { id: number }) => {
  return (
    <Layout className={style.layout}>
      <Header className={style.header}/>
      <Layout className={style.content}>
        <Sider {...siderConfig(334)} >
          <MakeSider/>
        </Sider>
        <Content>
          <MakeContent/>
        </Content>
        <Sider {...siderConfig(45)} >
          <MakeToolBar/>
        </Sider>
        <Sider className={style.edit} {...siderConfig(285)} >
          <MakeEdit/>
        </Sider>
      </Layout>
    </Layout>
  );
});


/**
 * @desc antd 样式拆分
 */
const { Header, Sider, Content } = Layout;

/**
 * @desc antd  sider 配置
 * @param width - 宽
 */
const siderConfig = (width: number): { trigger; width; theme } => {
  return {
    trigger: null,
    width: width,
    theme: "light"
  };
};

/**
 * @desc 样式
 */
const style = {
  layout: css`
    height: 100vh;
  `,
  header: css`
     {
      height: 48px;
      background: rgb(0, 167, 255);
      padding: 0 14px;
      line-height: 48px;
      overflow: hidden;
    }
  `,
  content: css`{
    height: calc(100vh - 48px)
  }`,
  edit: css`{
    background: #fafafa
  }`
};


