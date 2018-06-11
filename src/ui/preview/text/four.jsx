import React from 'react';
import { TextLayoutAtom } from './layout_atom';
import { Row, Col } from 'antd';

const LayoutRow = {
  gutter: 16,
  type: 'flex',
  justify: 'center',
  align: 'center',
  style: {
    alignItems: 'center',
    height: '100%',
    overflow: 'hidden',
  },
};

class FourTextPreview extends React.Component {
  render() {
    const advance = this.props.data.get('advance');
    const customize = this.props.data.get('customize');
    const advanced_settings = {
      // 绝对定位
      top: advance.getIn(['position', 'top', 'value']),
      left: advance.getIn(['position', 'left', 'value']),
      right: advance.getIn(['position', 'right', 'value']),
      bottom: advance.getIn(['position', 'bottom', 'value']),
      depth: advance.getIn(['position', 'depth', 'value']),
      // 内边距
      pb: advance.getIn(['padding', 'bottom', 'value']),
      pl: advance.getIn(['padding', 'left', 'value']),
      pr: advance.getIn(['padding', 'right', 'value']),
      pt: advance.getIn(['padding', 'top', 'value']),
      // 颜色
      bgColor: advance.get('color'),
      //背景
      img: advance.get('img'),
      stretching: advance.getIn(['img_config', 'stretching', 'value']),
      tiling: advance.getIn(['img_config', 'tiling', 'value']),
    };
    return (
      <TextLayoutAtom {...advanced_settings}>
        <Row {...LayoutRow}>
          <Col span={4}>
            <img
              src={
                'https://e7wei-img.oss-cn-beijing.aliyuncs.com/%E5%9C%86%E8%A7%92%E7%9F%A9%E5%BD%A22%402x.png'
              }
              alt={'img'}
            />
          </Col>
          <Col span={20}>
            <div
              style={{ display: ' inline' }}
              dangerouslySetInnerHTML={{
                __html: customize.get('html_content'),
              }}
            />
          </Col>
        </Row>
      </TextLayoutAtom>
    );
  }
}

// hoc 包装组件
export default FourTextPreview;
