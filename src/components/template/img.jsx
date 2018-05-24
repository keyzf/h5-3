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
export const CarouselImgTemplate = () => {
  return (
    <Row type={'flex'} gutter={16}>
      <Col span={6} style={default_text}>
        <img
          src={'http://marketing.xiuzan.com/src/images/form/huandeng.png'}
          alt={'horizontal_text_img'}
        />
      </Col>
      <Col span={16}>
        多图幻灯<br />
        可手动切换或自动切换当前图片的图集组件
      </Col>
      <Col span={2} style={icon_center}>
        <Icon type="plus-circle-o" style={{ fontSize: '18px' }} />
      </Col>
    </Row>
  );
};

// 默认模板
export const SliderImgTemplate = () => {
  return (
    <Row type={'flex'} gutter={16}>
      <Col span={6} style={default_text}>
        <img
          src={'http://marketing.xiuzan.com/src/images/form/henghua.png'}
          alt={'horizontal_text_img'}
        />
      </Col>
      <Col span={16}>
        多图滑动<br />
        可手动滑动显示内容的图集组件
      </Col>
      <Col span={2} style={icon_center}>
        <Icon type="plus-circle-o" style={{ fontSize: '18px' }} />
      </Col>
    </Row>
  );
};

// 默认模板
export const ListImgTemplate = () => {
  return (
    <Row type={'flex'} gutter={16}>
      <Col span={6} style={default_text}>
        <img
          src={'http://marketing.xiuzan.com/src/images/form/list.png'}
          alt={'horizontal_text_img'}
        />
      </Col>
      <Col span={16}>
        多图列表<br />
        以常规列表样式排列图片
      </Col>
      <Col span={2} style={icon_center}>
        <Icon type="plus-circle-o" style={{ fontSize: '18px' }} />
      </Col>
    </Row>
  );
};

// 默认模板
export const GridImgTemplate = () => {
  return (
    <Row type={'flex'} gutter={16}>
      <Col span={6} style={default_text}>
        <img
          src={'http://marketing.xiuzan.com/src/images/form/gezi.png'}
          alt={'horizontal_text_img'}
        />
      </Col>
      <Col span={16}>
        多图格子<br />
        以格子样式排列图片的图集组件
      </Col>
      <Col span={2} style={icon_center}>
        <Icon type="plus-circle-o" style={{ fontSize: '18px' }} />
      </Col>
    </Row>
  );
};

// 默认模板
export const UpImgTemplate = () => {
  return (
    <Row type={'flex'} gutter={16}>
      <Col span={6} style={default_text}>
        <img
          src={'http://marketing.xiuzan.com/src/images/form/general-img.png'}
          alt={'horizontal_text_img'}
        />
      </Col>
      <Col span={16}>
        单图<br />
        展示图片的真实比例
      </Col>
      <Col span={2} style={icon_center}>
        <Icon type="plus-circle-o" style={{ fontSize: '18px' }} />
      </Col>
    </Row>
  );
};
