import React from 'react';
import { TextLayoutAtom } from './layout_atom';

class VTextPreview extends React.Component {
  render() {
    const advance = this.props.data.get('advance');
    const customize = this.props.data.get('customize');
    // 可编辑属性 data:为文本
    const advanced_settings = {
      // 绝对定位
      top: advance.get('position').top.value,
      left: advance.get('position').left.value,
      right: advance.get('position').right.value,
      bottom: advance.get('position').bottom.value,
      depth: advance.get('position').depth.value,
      // 内边距
      pb: advance.get('padding').bottom.value,
      pl: advance.get('padding').left.value,
      pr: advance.get('padding').right.value,
      pt: advance.get('padding').top.value,
      // 颜色
      bgColor: advance.get('color'),
      //背景
      bgImg: advance.get('img'),
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
