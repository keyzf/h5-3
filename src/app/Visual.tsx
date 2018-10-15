import * as React from 'react';
import { Layout } from 'antd';
import style from '../../public/assets/layout.scss';
import VisualNav from '../components/visual/nav';
import { inject, observer } from 'mobx-react';
import { IRootStore } from '../store/root-store';
import VisualSider from '../components/visual/sider';


interface IProps {
  store?: IRootStore
}

interface IState {
}

@inject('store')
@observer
class Visual extends React.Component<IProps, IState> {
  componentDidMount = () => {
    this.props.store.visualStore.createLog();
  };

  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <Layout className={style.layout}>
        <Header className={style.header}>
          <VisualNav/>
        </Header>
        <Layout>
          <Sider theme={'light'} width={332} trigger={null}>
            <VisualSider/>
          </Sider>

          <Content className={style.content} id={'content'}/>

          <Sider theme={'light'} width={332} trigger={null}/>
        </Layout>
      </Layout>
    );
  }
}

export default Visual;
