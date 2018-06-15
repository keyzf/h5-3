import React from 'react';
import axios from 'axios';
import range from 'lodash.range';
import { connect } from 'react-redux';
import LazyLoad from 'react-lazyload';
import {
  Button,
  Tabs,
  Modal,
  Icon,
  Divider,
  Progress,
  message,
  Row,
  Col,
} from 'antd';
import ImgForm from '../../ui/img/img_form';
import { up_img_action } from '../../redux/action';

/**
 * 功能：
 *  1. 通过 ajax 获取图片
 *  2. 上传图片
 *  3. 选择图片
 *  4. 显示用户当前使用的图片
 *  bug TODO 内存泄漏
 */
class UpImgPart extends React.Component {
  state = {
    //模拟数据：总页数,第一轮数据,用户上传图片数据
    number: 3,
    ajax_url: [],
    library_list: [],
    user_library: [],
    // 用来比对的补充字段
    length: 0,
    //获取传递过来的图片
    img_url: this.props.img,
    // 进度条
    progress: false,
  };

  // 在渲染之前,通过ajax 获取数据
  componentDidMount() {
    // 用来搜寻公共库 //总页数，第一轮数据，图片项目表
    axios({
      method: 'get',
      url: `https://e7wei-img.oss-cn-beijing.aliyuncs.com/test_json/img_2.json`,
    })
      .then(response => {
        this.setState({
          ajax_url: response.data,
        });
      })
      .catch(function(error) {
        // 暑促错误信息，生产环境中需要剔除
        console.log(error);
      });
    // 用来搜寻用户库
    axios({
      method: 'get',
      url: `https://e7wei-img.oss-cn-beijing.aliyuncs.com/test_json/img_2.json`,
    })
      .then(response => {
        this.setState({
          ajax_url: response.data,
        });
      })
      .catch(function(error) {
        // 暑促错误信息，生产环境中需要剔除
        console.log(error);
      });
  }

  // 用户点击不同的图片给与不同的样式
  choose = (img_url, name) => {
    if ('public_library' === name) {
      this.setState({
        img_url: img_url.url, //技术图片信息
      });
    } else {
      this.setState({
        img_url: img_url, //技术图片信息
      });
    }
  };

  // 图片上传
  ImgPartChange = changedFields => {
    const file = changedFields.upload.value.file;
    if (file.status === 'uploading') {
      this.setState({
        progress: true,
      });
    }
    if (file.status === 'done') {
      console.log(changedFields);
      message.success('上传成功');
      const new_user_library = this.state.user_library;
      new_user_library.push(
        `http://src.e7wei.com/${file.response.key}`
      );
      this.setState({
        progress: false,
        user_library: new_user_library,
      });
    }
  };

  render() {
    // 公共图片库
    const ShowImg = props => {
      if (this.state.length === props.index) {
        axios({
          method: 'get',
          url: `https://e7wei-img.oss-cn-beijing.aliyuncs.com/test_json/img_${
            props.index
          }.json`,
        })
          .then(response => {
            let ajax_url = this.state.ajax_url;
            let length = this.state.length;
            response.data.map(data => {
              return ajax_url.push(data);
            });
            this.setState({
              ajax_url: ajax_url,
              length: length + 1,
            });
          })
          .catch(function(error) {
            console.log(error);
          });
      }
      return (
        <React.Fragment>
          {this.state.length - 1 === props.index ? (
            <Row gutter={16}>
              {this.state.ajax_url.map((data, index) => {
                return (
                  <Col span={4} style={{ margin: '0 0 5px 0' }} key={index}>
                    {data.type === 1 ? (
                      <LazyLoad
                        height={50}
                        offset={100}
                        once
                        overflow
                        key={index}
                      >
                        <div
                          style={{
                            width: '100%',
                            height: '100%',
                            display: 'inline-block',
                            verticalAlign: 'top',
                            marginBottom: '10px',
                            marginRight: '13px',
                            boxSizing: 'border-box',
                          }}
                          onClick={this.choose.bind(
                            this,
                            data,
                            'public_library'
                          )}
                          className={
                            data.url === this.state.img_url
                              ? 'part_active'
                              : 'part_choose'
                          }
                        >
                          <img
                            style={{
                              verticalAlign: 'middle',
                              maxWidth: '100%',
                              maxHeight: '100%',
                              margin: 'auto',
                            }}
                            src={data.url}
                            alt={'img'}
                          />
                        </div>
                      </LazyLoad>
                    ) : (
                      ''
                    )}
                  </Col>
                );
              })}
            </Row>
          ) : (
            <div style={{ display: 'none' }}>代价在</div>
          )}
        </React.Fragment>
      );
    };

    const TabPane = Tabs.TabPane;
    const { visible, unvisible } = this.props;
    return (
      <Modal
        width={800}
        title="素材库"
        visible={visible}
        onCancel={unvisible}
        footer={null}
      >
        {this.state.progress ? <Progress percent={50} status="active" /> : ''}
        <Tabs
          tabBarExtraContent={
            <ImgForm
              upload={{ value: '' }}
              onChange={this.ImgPartChange}
              child={
                <div style={{ color: '#19a0fa', cursor: 'pointer' }}>
                  <Icon type="plus" />
                  &nbsp;添加素材
                </div>
              }
            />
          }
        >
          <TabPane tab="我的素材" key="1">
            {this.state.user_library.length ? (
              <div style={{ width: '100%', minHeight: '400px' }}>
                <div style={{ minHeight: '300px' }}>
                  {// 循环显示出用户的自上传图片
                  this.state.user_library.map((data, index) => {
                    return (
                      <div
                        key={index}
                        style={{
                          width: '90px',
                          height: '90px',
                          display: 'inline-block',
                          verticalAlign: 'top',
                          marginBottom: '10px',
                          marginRight: '13px',
                          boxSizing: 'border-box',
                        }}
                      >
                        <div
                          className={
                            data === this.state.img_url
                              ? 'part_active'
                              : 'part_choose'
                          }
                          onClick={this.choose.bind(this, data)}
                        >
                          <img
                            style={{
                              verticalAlign: 'middle',
                              maxWidth: '100%',
                              maxHeight: '100%',
                              margin: 'auto',
                            }}
                            src={data}
                            alt={'img'}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <Divider />
                <div style={{ padding: '0 35%', width: '100%' }}>
                  <Button
                    onClick={this.props.unvisible.bind(
                      this,
                      true,
                      this.state.img_url
                    )}
                    style={{ width: '100px', marginRight: '10px' }}
                  >
                    取消
                  </Button>
                  <Button
                    onClick={this.props.unvisible.bind(
                      this,
                      true,
                      this.state.img_url
                    )}
                    style={{ width: '100px', marginRight: '10px' }}
                  >
                    确定
                  </Button>
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '0 80px' }}>
                <img
                  src={
                    'https://e7wei-img.oss-cn-beijing.aliyuncs.com/img/%E7%BC%BA%E7%9C%81.png'
                  }
                  alt={'img'}
                />
                <br />
                <ImgForm
                  upload={{ value: '' }}
                  onChange={this.ImgPartChange.bind(this)}
                  child={
                    <Button type="dashed" style={{ width: '150px' }}>
                      种植素材
                    </Button>
                  }
                />
              </div>
            )}
          </TabPane>
          <TabPane tab="共享素材" key="2">
            <Tabs tabPosition={'left'}>
              <TabPane
                tab="背景"
                key="1"
                style={{ maxHeight: '400px', overflow: 'auto' }}
              >
                {/**
                 *总页数,以及第一页数据
                 **/}
                {range(this.state.number).map((data, index) => {
                  return (
                    //对要显示的界面进行懒加载处理
                    <React.Fragment key={index}>
                      <LazyLoad
                        once={true}
                        throttle={100}
                        height={600}
                        overflow
                        key={index}
                      >
                        <ShowImg index={index} />
                      </LazyLoad>
                    </React.Fragment>
                  );
                })}
              </TabPane>
            </Tabs>
            <Divider />
            <div style={{ padding: '0 35%', width: '100%' }}>
              <Button
                onClick={this.props.unvisible.bind(this, true, this.props.img)}
                style={{ width: '100px', marginRight: '10px' }}
              >
                取消
              </Button>
              <Button
                onClick={this.props.unvisible.bind(
                  this,
                  true,
                  this.state.img_url
                )}
                style={{ width: '100px', marginRight: '10px' }}
              >
                确定
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    up_img_value: state.up_img_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    up_img_upData: (data, meta, error) =>
      dispatch(up_img_action(data, meta, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpImgPart);
