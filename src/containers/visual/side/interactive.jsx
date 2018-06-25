/**
 * 侧边栏交互收缩栏列表
 */
import React, { PureComponent } from 'react';
import { Row, Col, Divider, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import SelectCommon from './select_common';
import { template_button_data, template_form_data } from './select_database';

/**
 * 显示相应的组件列表
 */
class InterActiveSelect extends PureComponent {
  // 设置当前选中的父级组件
  state = {
    choose: '',
  };
  // 更新state状态
  onChoose = name => {
    this.setState({
      choose: name,
    });
  };
  // 回退
  back = () => {
    this.setState({
      choose: '',
    });
  };
  // 选择组件
  select = name => {
    if (name === 'button') {
      return (
        <div>
          <div
            onClick={this.back}
            style={{ marginTop: '25px', paddingLeft: '15px' }}
          >
            <Icon type="left" />返回
          </div>
          <Divider />
          <SelectCommon data={template_button_data} />
        </div>
      );
    }
    if (name === 'form') {
      return (
        <div>
          <div
            onClick={this.back}
            style={{ marginTop: '25px', paddingLeft: '15px' }}
          >
            <Icon type="left" />返回
          </div>
          <Divider />
          <SelectCommon data={template_form_data} />
        </div>
      );
    }
  };

  render() {
    const default_text = {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'column nowrap',
      margin: 'auto',
    };
    return (
      <React.Fragment>
        {this.state.choose ? (
          this.select(this.state.choose)
        ) : (
          <QueueAnim delay={200} type={'left'}>
            <Row type={'flex'} gutter={16} key={1}>
              <Col
                span={6}
                style={default_text}
                className={'components_hover'}
                onClick={this.onChoose.bind(this, 'button')}
              >
                <i
                  className="icon iconfont icon-anniu"
                  style={{ fontSize: '26px', flex: '1' }}
                />
                <div style={{ flex: '1' }}>按钮</div>
              </Col>
              <Col
                span={6}
                style={default_text}
                className={'components_hover'}
                onClick={this.onChoose.bind(this, 'form')}
              >
                <i
                  className="icon iconfont icon-biaodan"
                  style={{ fontSize: '26px', flex: '1' }}
                />
                <div style={{ flex: '1' }}>表单</div>
              </Col>
              <Col span={6} style={default_text} />
              <Col span={6} style={default_text} />
            </Row>
          </QueueAnim>
        )}
      </React.Fragment>
    );
  }
}

export default InterActiveSelect;
