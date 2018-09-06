import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { GetUrlPara } from './utils/parse_url';
import { VisualRouter, PreviewRouter, ReleaseRouter } from './routes/web';
import './core.css';

/**
 * 控制页面跳转
 */
class App extends PureComponent {
  render() {
    /**
     * 辨识 props 中的 state
     * 通过 props 中的 state 判断需要跳转的页面
     * @param props
     *  sid: 用户 id
     *  state: 需要跳转的页面
     * @returns {*}
     *  state 存在 跳转指定页面
     *  state 不存在 跳转至404页面
     * @constructor
     */
    const Router = props => {
      switch (props.state) {
        // 创建/修改
        case 'visual':
          return <VisualRouter sid={props.sid} state={props.state} />;
        //  预览/设置分享信息
        case 'preview':
          return <PreviewRouter sid={props.sid} state={props.state} />;
        //  发布
        case 'release':
          return <ReleaseRouter sid={props.sid} state={props.state} />;
        //  默认返回
        default:
          return (window.location.href = 'http://my.e7wei.com/404.html');
      }
    };

    return (
      <Provider store={store}>
        <Router sid={GetUrlPara('sid')} state={GetUrlPara('state')} />
      </Provider>
    );
  }
}

export default App;
