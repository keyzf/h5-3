import React, { PureComponent } from 'react';
import { fromJS } from 'immutable';
import { connect } from 'react-redux';
import {
  Tabs,
  Radio,
  Icon,
  Collapse,
  Button,
  Row,
  Col,
  Pagination,
  message,
} from 'antd';
import { redux_action } from '../../redux/action';
import { user_api } from '../../../api_server/pro/user.api';
import { delete_api } from '../../../api_server/pro/delete.api';
import MusicForm from '../../upload/_music_form';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { upload_api } from '../../../api_server/pro/upload.api';

class EditorMusic extends PureComponent {
  state = {
    music_library: [],
    number: 0,
    current: 1,
  };

  componentWillMount() {
    user_api(4, 0).then(data => {
      this.setState({
        number: data.sum,
        music_library: data.list,
      });
    });
  }

  del = (number, mid) => {
    NProgress.start();
    delete_api(mid)
      .then(() => {
        NProgress.done();
        user_api(4, this.state.current)
          .then(data => {
            this.setState({
              number: JSON.parse(data.sum),
              music_library: data.list,
            });
            message.success('删除成功');
          })
          .catch(() => {
            this.setState({
              number: 0,
              music_library: [],
            });
            message.success('删除成功');
          });
      })
      .catch(() => {
        NProgress.done();
        message.error('删除失败');
      });
  };

  onChange = e => {
    this.sendAction(
      this.props.data.get('data').setIn(['customize', 'music'], e.target.value)
    );
  };

  onChangePage = page => {
    user_api(4, page - 1)
      .then(response => {
        this.setState({
          music_library: response.list,
          current: page,
          number: response.sum,
        });
      })
      .catch(response => {
        message.error(response);
      });
  };

  ImgPartChange = field => {
    NProgress.start();
    if (field.upload.value.file.status === 'done') {
      upload_api(
        4,
        field.upload.value.file.name,
        `http://src.e7wei.com/${field.upload.value.file.response.key}`
      )
        .then(() => {
          NProgress.done();
          message.success('上传成功');
          user_api(4, 0)
            .then(response => {
              this.setState({
                music_library: response.list,
                current: 1,
                number: response.sum,
              });
            })
            .catch(response => {
              message.error(response);
            });
        })
        .catch(() => {
          NProgress.done();
          message.error('上传失败，请重新尝试');
        });
    }
  };

  sendAction = up_data => {
    // data source
    const $$select_data = this.props.h5_data_value.data;
    const $$choose_data = this.props.editor_ui_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(
      $$choose_data.get('number'),
      up_data
    );
    const $$new_choose_data = $$choose_data.set('data', up_data);
    // send action
    this.props.upData('H5_DATA', $$new_select_data);
    this.props.upData('EDITOR_UI', $$new_choose_data, {
      content: true,
      choose: true,
    });
  };

  render() {
    const $$customize = this.props.data.getIn(['data', 'customize']);
    const tab_config = {
      defaultActiveKey: '1',
      style: { height: '100%' },
    };
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <Tabs {...tab_config}>
        <Tabs.TabPane tab="内容设置" key="1">
          <div
            style={{
              height: 'calc(100vh -  55px)',
              overflow: 'hidden',
              marginTop: '-18px',
              backgroundImage:
                'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
            }}
          >
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              style={{ background: 'transparent' }}
            >
              <Collapse.Panel header="当前使用" key="1">
                <audio
                  src={$$customize.get('music')}
                  controls
                  style={{ width: '100%' }}
                />
                <div style={{ width: '100%' }}>
                  <MusicForm
                    upload={{ value: '' }}
                    onChange={this.ImgPartChange}
                    child={
                      <Button style={{ width: '100%' }} type={'dashed'}>
                        <Icon type="plus" />添加素材
                      </Button>
                    }
                  />
                </div>
              </Collapse.Panel>
              <Collapse.Panel header="历史上传" key="2">
                <Row gutter={16}>
                  <Col span={24}>
                    <div className={'flex_center'}>
                      {this.state.number ? (
                        <Pagination
                          total={this.state.number}
                          pageSize={30}
                          current={this.state.current}
                          onChange={this.onChangePage}
                        />
                      ) : (
                        '暂无上传'
                      )}
                    </div>
                  </Col>
                  <br />
                  <br />
                  <hr />
                  <br />
                  <Radio.Group
                    onChange={this.onChange}
                    value={$$customize.get('music')}
                  >
                    {this.state.music_library.map((data, index) => {
                      return (
                        <Row gutter={16}>
                          <Col span={16}>
                            <Radio
                              key={index}
                              style={radioStyle}
                              value={data.url}
                            >
                              {data.desc}
                            </Radio>
                          </Col>
                          <Col span={8}>
                            <span style={{ transform: 'translate(10px,3px)' }}>
                              <Icon
                                onClick={this.del.bind(this, index, data.mid)}
                                className="dynamic-delete-button"
                                type="minus-circle-o"
                              />
                            </span>
                          </Col>
                        </Row>
                      );
                    })}
                  </Radio.Group>
                </Row>
              </Collapse.Panel>
            </Collapse>
          </div>
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5_data_reducer,
    // 当前选择编辑的组件
    editor_ui_value: state.editor_ui_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorMusic);
