import * as React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "redux-react-hook";
import { css } from "react-emotion";
import { Layout } from "antd";
import MakeSider from "./MakeSider";
import MakeEdit from "./MakeEdit";
import MakeContent from "./MakeContent";
import MakeToolBar from "./MakeToolBar";
import MakeNav from "./MakeNav";


/**
 * @desc Template
 */
export default React.memo((props: { id: number }) => {
  const [state, setState] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "LOG_INIT", payload: props.id });

    setTimeout(() => {
      setState(state + 1);
      dispatch({ type: "LOG_CREAT", payload: props.id });
    }, 5 * 60 * 1000);
  });


  return (
    <Layout className={style.layout}>
      <Header className={style.header}>
        < MakeNav/>
      </Header>
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


