import React, { PureComponent } from 'react';
import NProgress from 'nprogress';
import { connect } from 'react-redux';
import { Modal, Tabs, Icon, message, Button, Divider } from 'antd';
import { redux_action } from '../redux/action';
import UploadImgFactory from './factory/upload_img_form.factory';
import UserImgLazyFactory from './factory/user_img_lazy.factory';
import ImgLibraryLazyFactory from './factory/img_library_lazy.factory';
import 'nprogress/nprogress.css';
import { public_img_list } from '../ajax/public_img_list';

/**
 * 接收数据
 * 1. 包含的子组件
 * 2. 图片的url，用来判断用户选择那张图片 (img_url)
 * 3. 需要传到下去的运行函数
 */
class UploadImgCommon extends PureComponent {
  state = {
    img_list: [],
    img: '',
    list: '',
    length: '',
    // model 展示
    visible: false,
    // 进度条
    progress: false,
    // 上传图片
    upload: {
      upload: {
        value: '',
      },
    },
  };

  componentWillMount() {
    public_img_list().then(
      data => {
        this.setState({
          img_list: data,
        });
      },
      function(error) {
        console.error('出错了', error);
      }
    );

    const { upDate } = this.props;
    const $$data = this.props.upload_recode_value.data;

    upDate('UPLOAD_RECODE', {
      user_upload_img: $$data.get('user_upload_img'),
      choose_img_url: this.props.img_url,
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  closeModal = () => {
    const $$data = this.props.upload_recode_value.data;
    this.setState({
      visible: false,
    });
    this.props.func($$data.get('choose_img_url'));
  };

  /**
   * 图片上传
   * @param changedFields
   */
  uploadChange = changedFields => {
    const file = changedFields.upload.value.file;
    const $$data = this.props.upload_recode_value.data;
    if (file.status === 'uploading') {
      NProgress.start();
      NProgress.inc();
    }
    if (file.status === 'done') {
      NProgress.done();
      NProgress.remove();
      message.success('上传成功');
      this.props.upDate('UPLOAD_RECODE', {
        user_upload_img: $$data
          .get('user_upload_img')
          .unshift({ url: `http://src.e7wei.com/${file.response.key}` }),
        choose_img_url: $$data.get('choose_img_url'),
      });
    }
  };

  render() {
    const TabPane = Tabs.TabPane;

    return (
      <React.Fragment>
        <span onClick={this.showModal}>{this.props.children}</span>
        <Modal
          width={800}
          title="素材库"
          visible={this.state.visible}
          onOk={this.showModal}
          onCancel={this.closeModal}
          footer={null}
        >
          <Tabs
            tabBarExtraContent={
              <UploadImgFactory
                onChange={this.uploadChange}
                child={
                  <div style={{ color: '#19a0fa', cursor: 'pointer' }}>
                    <Icon type="plus" />
                    &nbsp;添加素材
                  </div>
                }
                {...this.state.upload}
              />
            }
          >
            <TabPane tab="我的素材" key="1">
              <UserImgLazyFactory
                img_url={this.props.img_url}
                close={this.closeModal}
                onChange={this.uploadChange}
              />
            </TabPane>
            <TabPane tab="共享素材" key="2">
              <Tabs tabPosition={'left'}>
                {this.state.img_list.map((data, index) => {
                  return (
                    <TabPane
                      tab={data.name}
                      key={index}
                      style={{ maxHeight: '400px', overflow: 'auto' }}
                    >
                      <ImgLibraryLazyFactory
                        img_url={this.props.img_url}
                        name={data.childtype}
                      />
                    </TabPane>
                  );
                })}
              </Tabs>
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
            </TabPane>
          </Tabs>
        </Modal>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 用户自己的图片
    img_model_value: state.img_model_reducer,
    // 记录图片上传信息，及选择图片的信息（通用）
    upload_recode_value: state.upload_recode_reducer,
    // 公共图片库
    img_library_value: state.img_library_reducer,
    // 用户id
    id_value: state.user_id_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upDate: (name, data) => dispatch(redux_action(name, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadImgCommon);
