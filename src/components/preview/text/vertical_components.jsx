import React from 'react';
import { TextLayoutAtom } from './layout_atom';

class VTextPreview extends React.Component {
  render() {
    const advance = this.props.data.get('advance');
    const customize = this.props.data.get('customize');
    // 可编辑属性 data:为文本
    const advanced_settings = {
      top: advance.get('position').get('top').get('value'),
      left: advance.get('position').get('left').get('value'),
      right: advance.get('position').get('right').get('value'),
      bottom: advance.get('position').get('bottom').get('value'),
      depth: advance.get('position').get('depth').get('value'),
      // 内边距
      pb: advance.get('padding').get('bottom').get('value'),
      pl: advance.get('padding').get('left').get('value'),
      pr: advance.get('padding').get('right').get('value'),
      pt: advance.get('padding').get('top').get('value'),
      // 颜色
      bgColor: advance.get('color'),
      //背景
      img: advance.get('img'),
    };
    return (
      <TextLayoutAtom {...advanced_settings}>
        <div
          style={{
            writingMode: 'vertical-rl',
            textAlign: 'center',
            margin: '0 auto',
          }}
          dangerouslySetInnerHTML={{
            __html: customize.get('html_content'),
          }}
        />
      </TextLayoutAtom>
    );
  }
}

// hoc 包装组件
export default VTextPreview;
