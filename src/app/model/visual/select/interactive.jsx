import React from 'react';
import { Row, Col, Divider, Icon } from 'antd';
import QueueAnim from 'rc-queue-anim';
import ButtonSelect from './button';
import FormSelect from './form';
const default_text = {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  flexFlow: 'column nowrap',
  margin: 'auto',
};

class InterActiveSelect extends React.Component {
  state = {
    choose: '',
  };
  onChoose = name => {
    this.setState({
      choose: name,
    });
  };
  back = () => {
    this.setState({
      choose: '',
    });
  };
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
          <ButtonSelect />
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
          <FormSelect />
        </div>
      );
    }
  };

  render() {
    return (
      <QueueAnim delay={200} type={'left'}>
        {this.state.choose ? (
          this.select(this.state.choose)
        ) : (
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
        )}
      </QueueAnim>
    );
  }
}

export default InterActiveSelect;
