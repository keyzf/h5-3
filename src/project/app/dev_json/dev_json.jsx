/**
 * 显示当前制作的h5 页面 json
 */
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Col, Row } from 'antd';

/**
 * 展示json 文件
 * 附带回退路由
 */
class DevJsonView extends PureComponent {
  render() {
    const $$data = this.props.select_value.data;
    const $$bg_data = this.props.bg_value.data;
    return (
      <Layout style={{ height: '100vh' }}>
        <Layout.Header>
          <Link to={'/develop'}>回到 development 页面</Link>
        </Layout.Header>
        <Layout.Content>
          <Row gutter={16}>
            <Col
              span={12}
              style={{ overflow: 'auto', height: 'calc(100vh - 56px)' }}
            >
              <div className="language-bash">
                数据<br />
                {JSON.stringify($$data.toJS(), null, 2)}
              </div>
            </Col>
            <Col
              span={12}
              style={{ overflow: 'auto', height: 'calc(100vh - 56px)' }}
            >
              <div className="language-bash">
                背景<br />
                {JSON.stringify($$bg_data.toJS(), null, 2)}
              </div>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.h5_data_reducer,
    bg_value: state.bg_ui_reducer,
  };
};

export default connect(mapStateToProps, '')(DevJsonView);
