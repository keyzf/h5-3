import React from 'react';
import { List } from 'immutable';
import { Button, Tabs, Modal, Icon, Divider } from 'antd';
import ImgForm from '../../../components/form/img_form';

/**
 * TODO 获取数据来源问题
 * 猜测隐藏bug： state 属性可能引起的问题 ，猜测解决办法： 重新生成model （antd 自带此属性）
 * 接收数据
 * 1 父组件选择的图片信息
 * 2. 选择图片后回掉给父组件的信息
 */
class UpImgPart extends React.Component {
  // 数据上传时使用的数据模型
  state = {
    // 用户图库,后期通过ajax获取
    user_img: List(),
    // 图片地址
    img_url: this.props.img,
  };
  // 用户选择组件时更新state
  choose = img_url => {
    this.setState({
      img_url: img_url, //技术图片信息
    });
  };
  // 用户上传图片后，将图片信息更新进组件中
  ImgPartChange = changedFields => {
    if (
      changedFields.upload &&
      changedFields.upload.value.file.response !== undefined
    ) {
      let $$user_img_new = this.state.user_img.push(
        'http://p8afqcqwq.bkt.clouddn.com/' +
          changedFields.upload.value.file.response.key
      );
      this.setState({
        user_img: $$user_img_new,
      });
    }
  };

  render() {
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
        {/*tabBarExtraContent 图片上传组件*/}
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
          {/*用户自上传图片*/}
          <TabPane tab="我的素材" key="1">
            {//  如果用户未上传数据则显示此默认模板，否则显示上传列表
            this.state.user_img.size ? (
              // true : 循环出用户的图片信息
              <div style={{ width: '100%', minHeight: '400px' }}>
                <div style={{ minHeight: '300px' }}>
                  {// 循环显示出用户的自上传图片
                  this.state.user_img.map((data, index) => {
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
                    {' '}
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
                    {' '}
                    确定
                  </Button>
                </div>
              </div>
            ) : (
              // false : 显示默认模板
              <div style={{ textAlign: 'center', padding: '0 80px' }}>
                <img
                  src={'http://h5.xiuzan.com/p/Tplglobal/images/plant-2x.png'}
                  alt={'img'}
                />
                <br />
                <ImgForm
                  upload={{ value: '' }}
                  onChange={this.ImgPartChange}
                  child={
                    <Button type="dashed" style={{ width: '150px' }}>
                      种植素材
                    </Button>
                  }
                  f
                />
              </div>
            )}
          </TabPane>
          {/*公司提供的图片*/}
          <TabPane tab="共享素材" key="2">
            <Tabs tabPosition={'left'}>
              <TabPane tab="背景" key="1">
                Content of Tab 1
              </TabPane>
              <TabPane tab="文本背景" key="2">
                Content of Tab 2
              </TabPane>
              <TabPane tab="艺术字" key="3">
                Content of Tab 3
              </TabPane>
              <TabPane tab="电商" key="4">
                Content of Tab 3
              </TabPane>
              <TabPane tab="节日" key="5">
                Content of Tab 3
              </TabPane>
              <TabPane tab="文理" key="6">
                Content of Tab 3
              </TabPane>
              <TabPane tab="配饰" key="7">
                Content of Tab 3
              </TabPane>
              <TabPane tab="图形图标" key="8">
                Content of Tab 3
              </TabPane>
            </Tabs>
            <Divider />
            <div style={{ padding: '0 35%', width: '100%' }}>
              <Button
                onClick={this.props.unvisible.bind(this, true, this.props.img)}
                style={{ width: '100px', marginRight: '10px' }}
              >
                {' '}
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
                {' '}
                确定
              </Button>
            </div>
          </TabPane>
        </Tabs>
      </Modal>
    );
  }
}

export default UpImgPart;
