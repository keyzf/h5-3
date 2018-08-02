import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import NProgress from 'nprogress';
import {
  Modal,
  Tabs,
  Icon,
  message,
  Divider,
  Tooltip,
  Button,
  Pagination,
  Row,
  Col,
} from 'antd';
import style from './img_lazy_choose.module.scss';
import UploadImgForm from './_img_form.upload';
import 'nprogress/nprogress.css';
import { redux_action } from '../../../database/redux/action';
import { upload_api } from '../../../api/upload.api';
import { user_api } from '../../../api/user.api';
import { delete_api } from '../../../api/delete.api';

/**
 * 逻辑
 *  1. 通过ajax 请求，获取用户是否存数据
 *  2. 如果存在数据则展示xxx, 如果不存在则展示默认
 *  3. 添加删除功能
 *  4. 添加选择功能，设置选择样式
 */
class UploadImg extends PureComponent {
  state = {
    visible: this.props.model ? this.props.model : false,
    current: 1,
    upload: {
      upload: {
        value: '',
      },
    },
    number: 0,
    img_library: [],
  };

  componentWillMount() {
    user_api(this.props.type, 1).then(response => {
      this.setState({
        number: JSON.parse(response.sum),
        img_library: response.list,
      });
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  closeModal = () => {
    this.setState({
      visible: false,
    });
  };
  uploadChange = field => {
    const file = field.upload.value.file;
    NProgress.start();
    if (file.status === 'done') {
      upload_api(
        this.props.type,
        file.response.key,
        `http://src.e7wei.com/${file.response.key}`
      )
        .then(() => {
          NProgress.done();
          message.success('上传成功');
          user_api(this.props.type, 0)
            .then(response => {
              this.setState({
                img_library: response.list,
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
  onChange = page => {
    user_api(this.props.type, page)
      .then(response => {
        this.setState({
          img_library: response.list,
          current: page,
          number: response.sum,
        });
      })
      .catch(response => {
        message.error(response);
      });
  };
  choose_img = url => {
    NProgress.done();
    // 图片
    if (this.props.type === 1) {
      this.props.func(url);
    }
    if (this.props.type === 3) {
      this.props.func(url);
    }
    if (this.props.type === 2) {
      this.props.func(url);
    }
  };
  delete = mid => {
    NProgress.start();
    delete_api(mid)
      .then(() => {
        NProgress.done();
        user_api(this.props.type, this.state.current)
          .then(response => {
            this.setState({
              number: JSON.parse(response.sum),
              img_library: response.list,
            });
            message.success('删除成功');
          })
          .catch(() => {
            this.setState({
              number: 0,
              img_library: [],
            });
            message.success('删除成功');
          });
      })
      .catch(() => {
        NProgress.done();
        message.error('删除失败');
      });
  };

  render() {
    // model 默认内容
    const default_model = (
      <div style={{ textAlign: 'center', padding: '0 80px' }}>
        <img src={'http://src.e7wei.com/0.2823198691104869.png'} alt={'img'} />
        <br />
        <UploadImgForm
          type={2}
          onChange={this.uploadChange}
          child={
            <Button type="dashed" style={{ width: '150px' }}>
              添加素材
            </Button>
          }
          {...this.state.upload}
        />
      </div>
    );
    // 当用户拥有上传数据时
    const show_data = (
      <React.Fragment>
        <div
          style={{
            width: '100%',
            minHeight: '300px',
            maxHeight: '300px',
            overflow: 'auto',
          }}
        >
          <div className={'response_flex'}>
            {this.state.img_library.map((data, index) => {
              return (
                <div
                  className={'flex_model_1'}
                  key={index}
                  onClick={this.choose_img.bind(this, data.url)}
                >
                  <Tooltip
                    title={
                      <div
                        style={{ cursor: ' pointer' }}
                        onClick={this.delete.bind(this, data.mid, index)}
                      >
                        删除
                      </div>
                    }
                  >
                    <div
                      className={
                        data.url === this.props.img_url
                          ? `${style.part_active}`
                          : `${style.part_choose}`
                      }
                    >
                      <div className={style.img_show}>
                        <img className={style.img} src={data.url} alt={'img'} />
                      </div>
                    </div>
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
        <Divider />
        <div style={{ padding: '0 35%', width: '100%' }}>
          <Button
            onClick={this.closeModal}
            style={{ width: '100px', marginRight: '10px' }}
          >
            取消
          </Button>
          <Button
            onClick={this.closeModal}
            style={{ width: '100px', marginRight: '10px' }}
          >
            确定
          </Button>
        </div>
      </React.Fragment>
    );
    return (
      <React.Fragment>
        <span onClick={this.showModal}>{this.props.children}</span>
        <Modal
          width={800}
          title="我的素材"
          visible={this.state.visible}
          onCancel={this.closeModal}
          footer={null}
        >
          <Tabs
            tabBarExtraContent={
              <span>
                <Row gutter={16} style={{ width: '300px' }}>
                  <Col span={8} style={{ transform: 'translate(0,4px)' }}>
                    <UploadImgForm
                      upload={{
                        value: '',
                      }}
                      onChange={this.uploadChange}
                      child={
                        <div
                          style={{
                            color: '#19a0fa',
                            cursor: 'pointer',
                            marginRight: '10px',
                          }}
                        >
                          <Icon type="plus" />
                          &nbsp;添加素材
                        </div>
                      }
                    />
                  </Col>
                  <Col span={16} style={{ transform: 'translate(0,11px)' }}>
                    <Pagination
                      simple
                      pageSize={24}
                      total={this.state.number}
                      current={this.state.current}
                      onChange={this.onChange}
                    />
                  </Col>
                </Row>
              </span>
            }
          >
            <Tabs.TabPane tab="我的素材" key="1">
              {this.state.img_library.length === 0 ? default_model : show_data}
            </Tabs.TabPane>
          </Tabs>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 背景组件样式
    bg_ui_value: state.bgUi_rdc,
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
)(UploadImg);
