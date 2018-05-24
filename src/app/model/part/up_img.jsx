import React from 'react';
import { Button, Tabs, Modal, Icon, Divider } from 'antd';
import ImgForm from '../../../components/form/img_form';
import { connect } from "react-redux";
import { up_img_action } from "../../../redux/action";




class UpImgPart extends React.Component {

  state = {
    img_url: this.props.img,
  };

  choose = img_url => {
    this.setState({
      img_url: img_url, //技术图片信息
    });
  };

  ImgPartChange = changedFields => {
    if (
      changedFields.upload &&
      changedFields.upload.value.file.response !== undefined
    ) {
      const  $$user_img_new = this.props.up_img_value.data.push(
        'http://p8afqcqwq.bkt.clouddn.com/' +
          changedFields.upload.value.file.response.key
      );
      this.props.up_img_upData($$user_img_new);
    }
  };

  render() {
    const TabPane = Tabs.TabPane;
    const { visible, unvisible } = this.props;
    const $$up_img = this.props.up_img_value.data;
    return (
      <Modal
        width={800}
        title="素材库"
        visible={visible}
        onCancel={unvisible}
        footer={null}
      >
        <Tabs tabBarExtraContent={<ImgForm
              upload={{ value: '' }}
              onChange={this.ImgPartChange}
              child={
                <div style={{ color: '#19a0fa', cursor: 'pointer' }}>
                  <Icon type="plus" />
                  &nbsp;添加素材
                </div>
              }
            />}>
          <TabPane tab="我的素材" key="1">
            {
              $$up_img.size ?
                (<div style={{ width: '100%', minHeight: '400px' }}>
                <div style={{ minHeight: '300px' }}>
                  {// 循环显示出用户的自上传图片
                    $$up_img.map((data, index) => {
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
              </div>)
                :
                (<div style={{ textAlign: 'center', padding: '0 80px' }}>
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
              </div>)
            }
          </TabPane>
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

const mapStateToProps = (state) => {
  return {
    up_img_value: state.up_img_reducer
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    up_img_upData: (data,meta,error) => dispatch(up_img_action(data,meta,error))
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpImgPart);
