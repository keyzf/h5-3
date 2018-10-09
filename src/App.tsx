import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import VisualWeb from './routes/web/visual';
import PreviewWeb from './routes/web/preview';
import ReleaseWeb from './routes/web/release';
import getDataApi from './service/getData';
import allData from './store/adapter/allData';

interface IProps {
  action?: {
    // 更新全局数据
    globalUpData;
  };
  id: number,
  state: string,
}

interface IState {
}

@inject('action')
@observer
export default class App extends Component<IProps, IState> {

  componentDidMount = () => {
    const { action,id, state } = this.props;
    getDataApi(id, state)
      .then(response => {
        // 更新数据源
        action.globalUpData(allData(response, id, state));
      })
      .catch(error => {
        // 跳转至错误页面
        window.location.href = error;
      });
  };

  render() {
    const {  state } = this.props;
    /**
     * 判断需要跳转的页面
     */
    let Redirect: object;
    switch (state) {
      case 'v':
        return (Redirect = <VisualWeb/>);
      case 'p':
        return (Redirect = <PreviewWeb/>);
      case 'r':
        return (Redirect = <ReleaseWeb/>);
      default:
        Redirect = (
          <div style={{ display: 'none' }}>
            {(window.location.href = 'http://my.e7wei.com/404.html')}
          </div>
        );
    }

    /**
     * 组件渲染
     */
    return (
      <Fragment>
        {Redirect}
        <DevTools/>
      </Fragment>
    );
  }
}
