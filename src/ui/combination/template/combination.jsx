import React from 'react';
import { Row, Col, Icon } from 'antd';

// 样式
const default_text = {
  alignItems: 'center',
  border: '1px solid #ddd',
  display: 'flex',
  height: '50px',
  justifyContent: 'center',
  margin: 'auto',
  width: '50px',
};
const icon_center = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
};

// 默认模板
export const CombinationTemplate = () => {
  return (
    <Row type={'flex'} gutter={16}>
      <Col span={6} style={default_text}>
        <img
          src={'http://src.e7wei.com/0.8830355195841435.png'}
          alt={'horizontal_text_img'}
        />
      </Col>
      <Col span={16}>
        自由组合<br />
        可添加文本、图片和按钮、自由排版
      </Col>
      <Col span={2} style={icon_center}>
        <Icon type="plus-circle-o" style={{ fontSize: '18px' }} />
      </Col>
    </Row>
  );
};
