import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Tabs, Icon, Button, List, message, Tag, Divider } from 'antd';
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
    // music_library: [
    //   {
    //     url: 'http://s.e7wei.com/811285359523452.mp3',
    //     desc: '3214132',
    //   },
    //   {
    //     url: 'http://s.e7wei.com/81128EUR25E6588.mp3',
    //     desc: '3214132',
    //   },
    //   {
    //     url: 'http://s.e7wei.com/81128NCH79363V5.mp3',
    //     desc: '3214132',
    //   },
    // ],
    // number: 1,
    current: 1,
    public_list: [],
    music_tab: 'me',
    music_tid: '',
    audio: 'play',
  };

  oncliMusic_table = (name, tid) => {
    if (name === 'me') {
      this.setState({
        music_tab: name,
        music_tid: tid,
      });
    } else {
      system_api(1, tid, 10)
        .then(response => {
          this.setState({
            public_music: response.list,
            public_current: 1,
            public_number: response.sum,
            music_tab: name,
            music_tid: tid,
          });
        })
        .catch(response => {
          message.error(response);
        });
    }
  };

  audio = name => {
    if (name === 'pause') {
      document.getElementById('audio').play();
      this.setState({
        audio: 'play',
      });
    }
    if (name === 'play') {
      document.getElementById('audio').pause();

      this.setState({
        audio: 'pause',
      });
    }
  };

  componentWillMount() {
    user_api(4, 0).then(data => {
      this.setState({
        number: data.sum,
        music_library: data.list,
      });
    });
    //  公共音乐库
    system_api(1, 1, 10).then(data => {
      this.setState({
        public_number: data.sum,
        public_music: data.list,
      });
    });
    //  获取音频的分类
    system_list_api().then(data => {
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
    this.props.h5_data_value.data.map((map_data, index) => {
      if (map_data.getIn(['customize', 'type']) === 'music') {
        this.sendAction(
          this.props.h5_data_value.data
            .get(index)
            .setIn(['customize', 'music'], e),
          index
        );
      }
    });
    this.setState({
      audio: 'play',
    });
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

  public_onChangePage = (tid, page = 1) => {
    system_api(page, tid, 10)
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
                music_tab: 'me',
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

  sendAction = (up_data, index) => {
    // data source
    const $$select_data = this.props.h5_data_value.data;
    // create new data
    const $$new_select_data = $$select_data.set(index, up_data);

    // send action
    this.props.upData('H5_DATA', $$new_select_data);
  };

  render() {
    const $$customize = this.props.data.get('customize');
    const $$url = this.props.data.getIn(['customize', 'music']);
    const TabPane = Tabs.TabPane;
    const { CheckableTag } = Tag;
    return (
      <Tabs
        tabBarExtraContent={
          <div className={'flex_center'}>
            <MusicForm
              upload={{ value: '' }}
              onChange={this.ImgPartChange}
              child={
                <Button
                  style={{ width: '100%', marginLeft: '-5px' }}
                  type={'dashed'}
                >
                  <Icon type="plus" />添加音乐
                </Button>
              }
            />
          </div>
        }
      >
        <TabPane tab="音乐素材" key="3242">
          <audio id={'audio'} autoPlay={true} src={$$customize.get('music')} />
          <div>
            <CheckableTag
              checked={this.state.music_tab === 'me'}
              color="magenta"
              onChange={this.oncliMusic_table.bind(this, 'me')}
            >
              我的
            </CheckableTag>
            {this.state.public_list.map((data, index) => {
              return (
                <CheckableTag
                  key={index}
                  checked={this.state.music_tab === data.typename}
                  onChange={this.oncliMusic_table.bind(
                    this,
                    data.typename,
                    data.tid
                  )}
                >
                  {data.typename}
                </CheckableTag>
              );
            })}
          </div>
          <br />
          <Divider>
            {this.state.music_tab === 'me'
              ? this.state.music_library.length
                ? '我的'
                : '暂无音乐'
              : this.state.music_tab}
          </Divider>
          {this.state.music_tab === 'me' ? (
            <div>
              {this.state.music_library.length ? (
                <List
                  itemLayout="horizontal"
                  dataSource={this.state.music_library}
                  pagination={{
                    simple: 'true',
                    total: this.state.number,
                    pageSize: 30,
                    current: this.state.current,
                    onChange: this.onChangePage,
                  }}
                  renderItem={item => (
                    <List.Item
                      actions={[
                        <a>
                          {$$url === item.url ? (
                            <Icon
                              type="check"
                              onClick={this.onChange.bind(this, '')}
                            />
                          ) : (
                            <i
                              className=" iconfont icon-xuanxiangkuang"
                              onClick={this.onChange.bind(this, item.url)}
                            />
                          )}
                        </a>,
                        <a>
                          {$$url === item.url ? (
                            this.state.audio === 'play' ? (
                              <Icon
                                type="pause-circle-o"
                                onClick={this.audio.bind(this, 'play')}
                              />
                            ) : (
                              <Icon
                                type="play-circle-o"
                                onClick={this.audio.bind(this, 'pause')}
                              />
                            )
                          ) : (
                            <Icon type="play-circle-o" />
                          )}
                        </a>,
                        <a>
                          {' '}
                          <Icon
                            onClick={this.del.bind(this, item.index, item.mid)}
                            className="dynamic-delete-button"
                            type="minus-circle-o"
                          />
                        </a>,
                      ]}
                    >
                      <i
                        className="iconfont icon-yinle"
                        style={{
                          marginRight: '5px',
                          transform: 'translate(3px,-3px)',
                        }}
                      />
                      {item.desc}
                    </List.Item>
                  )}
                />
              ) : (
                <div style={{ width: '100%', height: '100%' }}>
                  <div className={'flex_center'}>
                    <MusicForm
                      upload={{ value: '' }}
                      onChange={this.ImgPartChange}
                      child={
                        <Button style={{ width: '100%' }} type={'dashed'}>
                          <Icon type="plus" />添加音乐
                        </Button>
                      }
                    />
                  </div>
                  <div
                    className={'flex_center'}
                    style={{ marginBottom: '3px' }}
                  >
                    MP3音乐2M以内
                  </div>
                  <div className={'flex_center'}>
                    <a href="https://fs.kf5.com/upload/6310/201702/a4f32d41ab531a691429bdcde5cc3444.rar?ufileattname=%E9%9F%B3%E4%B9%90%E5%89%AA%E8%BE%91%E5%B7%A5%E5%85%B7.rar">
                      下载音乐压缩工具
                    </a>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div style={{ marginBottom: '10px' }}>
              <List
                itemLayout="horizontal"
                dataSource={this.state.public_music}
                pagination={{
                  simple: 'true',
                  total: this.state.public_number,
                  pageSize: 10,
                  current: this.state.public_current,
                  onChange: this.public_onChangePage.bind(
                    this,
                    this.state.music_tid
                  ),
                }}
                renderItem={item => (
                  <List.Item
                    actions={[
                      <a>
                        {$$url === item.url ? (
                          <Icon
                            type="check"
                            onClick={this.onChange.bind(this, '')}
                          />
                        ) : (
                          <i
                            className=" iconfont icon-xuanxiangkuang"
                            onClick={this.onChange.bind(this, item.url)}
                          />
                        )}
                      </a>,
                      <a>
                        {$$url === item.url ? (
                          this.state.audio === 'play' ? (
                            <Icon
                              type="play-circle-o"
                              onClick={this.audio.bind(this, 'play')}
                            />
                          ) : (
                            <Icon
                              type="pause-circle-o"
                              onClick={this.audio.bind(this, 'pause')}
                            />
                          )
                        ) : (
                          <Icon type="pause-circle-o" />
                        )}
                      </a>,
                    ]}
                  >
                    <i
                      className="iconfont icon-yinle"
                      style={{
                        marginRight: '5px',
                        transform: 'translate(3px,-3px)',
                      }}
                    />
                    {item.name}
                  </List.Item>
                )}
              />
            </div>
          )}
        </TabPane>
      </Tabs>
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
