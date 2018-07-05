/**
 * 这是一个 model 包含上传图片及显示图片功能
 */
import React, { PureComponent } from 'react';
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
import ImgForm from './img_form';
import { up_img_action } from '../../redux/action';
import style from './upload_common.module.scss';
import { $$api } from '../../api/api.database';

/**
 * 功能：
 *  1. 通过 ajax 获取图片
 *  2. 上传图片
 *  3. 选择图片
 *  4. 显示用户当前使用的图片
 *  bug TODO 内存泄漏
 */
class UpImgPart extends PureComponent {
  state = {
    tab_change: '',
    //模拟数据：总页数,第一轮数据,用户上传图片数据
    number: '', //总页数
    ajax_url: [], // 公共图片库
    library_list: [], // 侧边列表
    user_library: [], // 用户图库
    user_number: '', // 用户上传图片总页数
    user_length: 0,
    // 用来比对的补充字段
    length: 0,
    //获取传递过来的图片
    img_url: this.props.img,
    // 进度条
    progress: false,
  };

  // 在渲染之前,通过ajax 获取数据
  componentDidMount() {
    if ($$api.get('surroundings') === 'development') {
      // 用来搜寻公共库 //总页数，第一轮数据，图片项目表
      axios({
        method: 'get',
        url: `${$$api.getIn(['development', 'public_img_start'])}`,
      }).then(response => {
        this.setState({
          ajax_url: response.data.data,
          library_list: response.data.img_list,
        });
      });
      // 用来用户图片数据
      axios({
        method: 'get',
        url: `${$$api.getIn(['development', 'user_img_start'])}`,
      }).then(response => {
        if (response.data.data !== '') {
          this.setState({
            user_library: response.data.data,
            user_number: response.data.number,
          });
        }
      });
    }
    if ($$api.get('surroundings') === 'produce') {
      // 用来搜寻公共库 //总页数，第一轮数据，图片项目表
      axios({
        method: 'get',
        url: `${$$api.getIn(['produce', 'public_img_start'])}`,
      })
        .then(response => {
          this.setState({
            ajax_url: response.data.data,
          });
        })
        .catch(function(error) {
          console.log('访问服务器错误', error);
        });
      // 用来用户图片数据
      let params = new URLSearchParams();
      params.append('id', this.props.id_value.data.get('id'));
      axios
        .post(`${$$api.getIn(['produce', 'user_img_start'])}`, params)
        .then(response => {
          this.setState({
            user_library: response.data.data,
            user_number: response.data.number,
          });
        })
        .catch(function(error) {
          console.log('访问服务器错误', error);
        });
    }
  }

  // 用户点击不同的图片给与不同的样式
  choose = (img_url, name) => {
    if ('public_library' === name) {
      this.setState({
        img_url: img_url.url, //技术图片信息
      });
    } else {
      this.setState({
        img_url: img_url.url, //技术图片信息
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
      message.success('上传成功');
      const new_user_library = this.state.user_library;
      new_user_library.unshift({
        type: 1,
        url: `http://src.e7wei.com/${file.response.key}`,
      });
      this.setState({
        progress: false,
        user_library: new_user_library,
      });
    }
  };
  tabChange = name => {
    this.setState({
      tab_change: name,
    });
  };

  render() {
    // 公共图片库
    const ShowPublicImg = props => {
      if ($$api.get('surroundings') === 'development') {
        if (this.state.length === props.index) {
          axios({
            method: 'get',
            url: `${$$api.getIn(['development', 'public_img_other'])}${
              props.index
            }`,
          }).then(response => {
            let ajax_url = this.state.ajax_url;
            let length = this.state.length;
            response.data.map(data => {
              return ajax_url.push(data);
            });
            this.setState({
              ajax_url: ajax_url,
              length: length + 1,
            });
          });
        }
      }
      if ($$api.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        params.append('id', this.props.id_value.data.get('id'));
        params.append('number', props.index);
        params.append('name', props.name);
        axios
          .post(`${$$api.getIn(['development', 'public_img_other'])}`, params)
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
                              ? style.part_active
                              : style.part_choose
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

    // 公共图片库
    const ShowUserImg = props => {
      if ($$api.get('surroundings') === 'development') {
        if (this.state.user_length === props.index) {
          axios({
            method: 'get',
            url: `${$$api.getIn(['development', 'user_img_other'])}${
              props.index
            }`,
          }).then(response => {
            let user_library = this.state.user_library;
            let user_length = this.state.user_length;
            response.data.map(data => {
              return user_library.push(data);
            });
            this.setState({
              user_library: user_library,
              user_length: user_length + 1,
            });
          });
        }
      }
      if ($$api.get('surroundings') === 'produce') {
        let params = new URLSearchParams();
        params.append('id', this.props.id_value.data.get('id'));
        params.append('number', props.index);
        axios
          .post(`${$$api.getIn(['produce', 'user_img_other'])}`, params)
          .then(response => {
            let user_library = this.user_library;
            let user_length = this.state.user_length;
            response.data.map(data => {
              return user_library.push(data);
            });
            this.setState({
              user_library: user_library,
              user_length: user_length + 1,
            });
          });
      }
      return (
        <React.Fragment>
          {this.state.user_length - 1 === props.index ? (
            <Row gutter={16}>
              {this.state.user_library.map((data, index) => {
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
                          onClick={this.choose.bind(this, data, 'user_library')}
                          className={
                            data.url === this.state.img_url
                              ? style.part_active
                              : style.part_choose
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
            <div style={{ display: 'none' }}>加载中-------</div>
          )}
        </React.Fragment>
      );
    };

    const TabPane = Tabs.TabPane;
    const { visible, unvisible } = this.props;
    return <div />;
  }
}

/**
 * 从数据源获取数据
 * @param state
 * @returns {{up_img_value: *}}
 */
const mapStateToProps = state => {
  return {
    up_img_value: state.up_img_reducer,
    id_value: state.id_reducer,
  };
};

/**
 * 需要修改的数据源
 * @param dispatch
 * @returns {{up_img_upData: (function(*=, *=, *=): *)}}
 */
const mapDispatchToProps = dispatch => {
  return {
    up_img_upData: (data, meta, error) =>
      dispatch(up_img_action(data, meta, error)),
  };
};

/**
 * 高阶组件 hoc
 */
export default connect(mapStateToProps, mapDispatchToProps)(UpImgPart);
