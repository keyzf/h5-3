import * as React from 'react';
import Canvas from './canvas';


class VisualContent extends React.Component {
  render() {
    return (
      <div style={{ height: '5000px' }}>
        <div className={'v_content'}>
          <Canvas/>
        </div>
        <div className={'center'}>
          提示：添加组件后，可在画布中进行拖拽，缩放
        </div>
        <div className={'center'}>
          <a
            href={'http://www.e7wei.com/help/article/id/436.html'}
            target={'view_window'}
          >
            使用帮助
          </a>
        </div>
      </div>
    );
  }
}

export default VisualContent;