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
export const VideoTemplate = () => {
  return (
    <Row type={'flex'} gutter={16}>
      <Col span={6} style={default_text}>
        <img src={'https://e7wei-img.oss-cn-beijing.aliyuncs.com/img/%E8%A7%86%E9%A2%91%402x.png'} alt={'img'} />
      </Col>
      <Col span={16}>
        视频<br />
        可上传自己喜欢的视屏
      </Col>
      <Col span={2} style={icon_center}>
        <Icon type="plus-circle-o" style={{ fontSize: '18px' }} />
      </Col>
    </Row>
  );
};
