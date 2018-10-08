import * as React from 'react';
import { observer, inject } from 'mobx-react';
import GetParaUrl from './utils/parseUrl';
import VisualWeb from './routes/web/visual';
import PreviewWeb from './routes/web/preview';
import ReleaseWeb from './routes/web/release';
import DevTools from 'mobx-react-devtools';
import getDataApi from './service/getData'; // 生产环境下删除（实际还是保留，便于debug）

interface IAppProps {
  action?: { globalUpData };
}

@inject('action')
@observer
export default class App extends React.Component<IAppProps, null> {
  /**
   * ajax请求
   * */
  static getDerivedStateFromProps = (props: any): any => {
    const { action } = props;
    const { id, state } = GetParaUrl(window.location.href);
    //发送请求，获取必要的信息,更新数据源
    getDataApi(id, state)
      .then((response: any) => {
        action.globalUpData(response);
      })
      .catch((error: string) => {
        window.location.href = error;
      });
  };

  render() {
    const { state } = GetParaUrl(window.location.href);
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
      <React.Fragment>
        {Redirect}
        <DevTools/>
      </React.Fragment>
    );
  }
}
