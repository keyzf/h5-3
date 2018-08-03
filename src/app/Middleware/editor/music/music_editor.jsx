import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  Tabs,
  Radio,
  Icon,
  Checkbox,
  Button,
  Row,
  Col,
  Pagination,
  message,
} from 'antd';
import { user_api } from '../../../../api/user.api';
import { delete_api } from '../../../../api/delete.api';
import MusicForm from '../../upload/_music_form';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { upload_api } from '../../../../api/upload.api';
import { redux_action } from '../../../../database/redux/action';
import { system_api } from '../../../../api/system.api';
import { system_list_api } from '../../../../api/system_list.api';

class EditorMusic extends PureComponent {
  state = {
    public_music: [],
    public_number: 0,
    public_current: 1,
    music_library: [],
    number: 0,
    current: 1,
    public_list: [],
  };

  componentWillMount() {
    user_api(4, 0).then(data => {
      this.setState({
        number: data.sum,
        music_library: data.list,
      });
    });
    //  公共音乐库
    system_api(4, 0).then(data => {
      this.setState({
        public_number: data.sum,
        public_music: data.list,
      });
    });
    //  获取音频的分类
    system_list_api(4, 0).then(data => {
      this.setState({
        public_list: data.list,
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
    user_api(4, page)
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
  public_onChangePage = page => {
    system_api(4, page)
      .then(response => {
        this.setState({
          public_music: response.list,
          public_current: page,
          public_number: response.sum,
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
    return (
      <div>
        <audio
          src={$$customize.get('music')}
          autoPlay={true}
          style={{ display: 'none' }}
        />
        <Tabs {...tab_config}>
          <Tabs.TabPane tab="我的音频" key="1">
            <div
              style={{
                height: 'calc(100vh -  55px)',
                overflow: 'auto',
                marginTop: '-18px',
                backgroundImage:
                  'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              }}
            >
              {this.state.number ? (
                <div className={'flex_center'}>
                  <Pagination
                    simple
                    total={this.state.number}
                    pageSize={30}
                    current={this.state.current}
                    onChange={this.onChangePage}
                  />

                  <span style={{ marginBottom: '-20px', marginLeft: '10px' }}>
                    <MusicForm
                      upload={{ value: '' }}
                      onChange={this.ImgPartChange}
                      child={
                        <Button style={{ width: '100%' }} type={'dashed'}>
                          <Icon type="plus" />添加素材
                        </Button>
                      }
                    />
                  </span>
                  <br />
                  <br />
                  <hr />
                </div>
              ) : (
                <div className={'flex_center'}>
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
              )}

              {this.state.music_library.map((data, index) => {
                return (
                  <div>
                    {' '}
                    <Checkbox
                      onChange={this.onChange}
                      key={index}
                      value={data.url}
                    >
                      {data.desc}
                    </Checkbox>
                    <br />
                  </div>
                );
              })}
            </div>
          </Tabs.TabPane>
          {this.state.public_list.map((data, index) => {
            return (
              <Tabs.TabPane tab={data.name} key={index}>
                {this.state.music_library.map((data, index) => {
                  return (
                    <div>
                      <div className={'flex_center'}>
                        <Pagination
                          simple
                          total={this.state.public_number}
                          pageSize={30}
                          current={this.state.public_current}
                          onChange={this.public_onChangePage}
                        />
                        <br />
                        <br />
                        <hr />
                      </div>
                      <Checkbox
                        onChange={this.onChange}
                        key={index}
                        value={data.url}
                      >
                        {data.desc}
                      </Checkbox>
                      <br />
                    </div>
                  );
                })}
              </Tabs.TabPane>
            );
          })}
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 当前选择编辑的组件
    editor_ui_value: state.editorUi_rdc,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upData: (name, data, meta) => dispatch(redux_action(name, data, meta)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditorMusic);
