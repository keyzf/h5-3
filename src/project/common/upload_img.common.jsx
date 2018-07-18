import React, { PureComponent } from 'react';
import NProgress from 'nprogress';
import { fromJS } from 'immutable';
import connect from '../redux/decorator';
import { Modal, Tabs, Icon, message, Button, Divider } from 'antd';
import UploadImgFactory from './factory/upload_img_form.factory';
import UserImgLazyFactory from './factory/user_img_lazy.factory';
import ImgLibraryLazyFactory from './factory/img_library_lazy.factory';
import { system_library_list_api } from '../api/system_library_list.api';
import { upload_api } from '../api/upload.api';
import 'nprogress/nprogress.css';

@connect
export default class UploadImgCommon extends PureComponent {
  state = {
    img_list: [],
    img: '',
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
    // 公共图片库列表
    system_library_list_api(1)
      .then(data => {
        this.setState({
          img_list: data,
        });
      })
      .catch(error => {
        message.error(error);
      });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  closeModal = () => {
    const $$data = this.props.user_img_value.data;
    this.setState({
      visible: false,
    });
    this.props.func($$data.get('choose_url'));
    NProgress.done();
  };

  uploadChange = changedFields => {
    const file = changedFields.upload.value.file;
    const $$data = this.props.user_img_value.data;
    if (file.status === 'uploading') {
      NProgress.start();
      NProgress.inc();
    }
    if (file.status === 'done') {
      upload_api(
        1,
        file.response.key,
        `http://src.e7wei.com/${file.response.key}`
      ).then(
        ajax_data => {
          NProgress.done();
          NProgress.remove();
          message.success('上传成功');
          this.props.upData('USER_IMG', {
            upload_library: $$data.get('upload_library').unshift(
              fromJS({
                url: `http://src.e7wei.com/${file.response.key}`,
                mid: ajax_data.mid,
              })
            ),
            choose_url: $$data.get('choose_url'),
          });
        },
        function(error) {
          console.error('出错了', error);
        }
      );
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
                closeModal={this.closeModal.bind(this)}
                onChange={this.uploadChange.bind(this)}
              />
            </TabPane>
            <TabPane tab="共享素材" key="2">
              <Tabs tabPosition={'left'}>
                {this.state.img_list
                  ? this.state.img_list.map((data, index) => {
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
                    })
                  : ''}
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
