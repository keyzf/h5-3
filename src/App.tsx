import * as React from 'react';
import VisualWeb from './routes/web/visual';
import PreviewWeb from './routes/web/preview';
import ReleaseWeb from './routes/web/release';

interface Props {
  /**
   * 用户id
   */
  vid: string;
  /**
   * 即将跳转的页面
   */
  state: string;
}

class App extends React.Component<Props, null> {
  render() {
    const { vid, state } = this.props;

    /**
     * 判断需要跳转的页面
     */
    let Redirect: object;
    switch (state) {
      case 'v':
        return (Redirect = <VisualWeb vid={vid} state={state}/>);
      case 'p':
        return (Redirect = <PreviewWeb vid={vid} state={state}/>);
      case 'r':
        return (Redirect = <ReleaseWeb vid={vid} state={state}/>);
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
    return <React.Fragment>{Redirect}</React.Fragment>;
  }
}

export default App;
