import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Divider, Modal, Tabs, Button, Icon } from 'antd';
import { $$video_database } from '../../../ui/video/video.db';
import { redux_action } from '../../../redux/action';
import { buttonData } from '../../../ui/button/buttonData';
import { formData } from '../../../ui/form/formData';
import style from './side.module.scss';

class InterActiveSelect extends PureComponent {
  state = {
    choose_show: '', //当前展示的具体项名称
    back: false, // 返回界面控制
  };

  /**
   * 选择某项
   * @param name
   */
  chooseItem = name => {
    if (name === 'video') {
      const push_data = $$video_database('video', '');
      const select_up_data = this.props.h5_data_value.data.push(push_data);
      this.props.upData('H5_DATA', select_up_data);
      this.props.upData(
        'EDITOR_UI',
        { number: select_up_data.size - 1, data: push_data },
        {
          content: true,
          choose: true,
        }
      );
    }
    if (name === 'button') {
      this.setState({
        choose_show: 'button',
        back: true,
      });
    }
    if (name === 'form') {
      this.setState({
        choose_show: 'form',
        back: true,
      });
    }
  };
  /*
   * 返回至默认界面
   */
  back = () => {
    this.setState({
      back: false,
    });
  };

  /**
   * 替换h5数据源中已存在的表单项
   * @param index
   * @param data
   */
  formChange = (index, data) => {
    const select_up_data = this.props.h5_data_value.data.set(index, data);
    this.props.upData('H5_DATA', select_up_data);
    this.props.upData('EDITOR_UI', {
      number: select_up_data.size - 1,
      data: data,
    });
    return '';
  };

  /**
   * 向h5数据源中添加组件数据
   * @param name 组件名称
   * @param ui_data 组件数据
   */
  addH5 = (name, ui_data) => {
    const { data } = this.props.h5_data_value;
    // 判断form 在表单中是否存在
    let form = true;
    // 判断数据集中是否存在form字段，或者当前插入是否为form组件
    if (name === 'form') {
      data.map((data, index) => {
        if (data.getIn(['customize', 'type']) === 'form') {
          Modal.confirm({
            title: '提醒',
            content: '表单组件已存在，是否替换原表单?',
            okText: '确认',
            cancelText: '取消',
            onOk: this.formChange.bind(this, index, ui_data),
          });
          form = false;
          return '';
        }
        return '';
      });
      if (form) {
        const select_up_data = data.push(ui_data);
        this.props.upData('H5_DATA', select_up_data);
        this.props.upData('EDITOR_UI', {
          number: select_up_data.size - 1,
          data: ui_data,
        });
        return '';
      }
      return '';
    }
    // 否则 进行下面操作
    else {
      const select_up_data = data.push(ui_data);
      this.props.upData('H5_DATA', select_up_data);
      this.props.upData('EDITOR_UI', {
        number: select_up_data.size - 1,
        data: ui_data,
      });
    }
    return '';
  };

  render() {
    const TabPane = Tabs.TabPane;
    // 默认显示（视频选项，表单选项，按钮选项）
    const DefaultItem = () => (
      <Row type={'flex'} gutter={16} key={1}>
        <Col
          span={6}
          className={style.interActiveContent}
          onClick={this.chooseItem.bind(this, 'video')}
        >
          <i
            className="iconfont icon-shipin"
            style={{ fontSize: '26px', flex: '1' }}
          />
          <div style={{ flex: '1' }}>视频</div>
        </Col>
        <Col
          span={6}
          className={style.interActiveContent}
          onClick={this.chooseItem.bind(this, 'button')}
        >
          <i
            className=" iconfont icon-anniu"
            style={{ fontSize: '26px', flex: '1' }}
          />
          <div style={{ flex: '1' }}>按钮</div>
        </Col>
        <Col
          span={6}
          className={style.interActiveContent}
          onClick={this.chooseItem.bind(this, 'form')}
        >
          <i
            className=" iconfont icon-biaodan"
            style={{ fontSize: '26px', flex: '1' }}
          />
          <div style={{ flex: '1' }}>表单</div>
        </Col>
        <Col span={6} />
      </Row>
    );
    //  具体操作某一项
    const EditorItem = () => (
      <Tabs
        tabBarExtraContent={
          <Button
            type={'dashed'}
            onClick={this.back}
            style={{ width: '100%', marginLeft: '-5px' }}
          >
            <Icon type="left" /> 返回
          </Button>
        }
      >
        <Tabs.TabPane
          tab={this.state.choose_show === 'button' ? '按钮组件' : '表单组件'}
          key="1"
        >
          <div
            className={style.sideContent}
            style={{ height: 'calc(100vh - 145px)' }}
          >
            {this.state.choose_show === 'button' ? (
              buttonData.map((ui_data, index) => {
                return (
                  <div key={index}>
                    {ui_data.data === 'dividing-line' ? (
                      <Divider orientation="left" key={index}>
                        设计师推荐
                      </Divider>
                    ) : (
                      <div
                        className={style.components_hover}
                        key={index}
                        onClick={this.addH5.bind(this, 'button', ui_data.data)}
                      >
                        <div style={{ pointerEvents: 'none' }}>
                          {ui_data.template}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <Tabs defaultActiveKey="1">
                <TabPane tab="报名" key="1">
                  {formData.map((ui_data, index) => {
                    return (
                      <React.Fragment key={index}>
                        {ui_data.data.getIn(['customize', 'types']) ===
                        '报名' ? (
                          <div
                            className={style.components_hover}
                            key={index}
                            onClick={this.addH5.bind(
                              this,
                              'form',
                              ui_data.data
                            )}
                          >
                            <div style={{ pointerEvents: 'none' }}>
                              {ui_data.template}
                            </div>
                          </div>
                        ) : (
                          ''
                        )}
                      </React.Fragment>
                    );
                  })}
                </TabPane>
                <TabPane tab="招聘" key="3">
                  {formData.map((ui_data, index) => {
                    return (
                      <React.Fragment key={index}>
                        {ui_data.data.getIn(['customize', 'types']) ===
                        '招聘' ? (
                          <div
                            className={style.components_hover}
                            key={index}
                            onClick={this.addH5.bind(
                              this,
                              'form',
                              ui_data.data
                            )}
                          >
                            <div style={{ pointerEvents: 'none' }}>
                              {ui_data.template}
                            </div>
                          </div>
                        ) : (
                          ''
                        )}
                      </React.Fragment>
                    );
                  })}
                </TabPane>
                <TabPane tab="问卷" key="2">
                  {formData.map((ui_data, index) => {
                    return (
                      <React.Fragment key={index}>
                        {ui_data.data.getIn(['customize', 'types']) ===
                        '问卷' ? (
                          <div
                            className={style.components_hover}
                            key={index}
                            onClick={this.addH5.bind(
                              this,
                              'form',
                              ui_data.data
                            )}
                          >
                            <div style={{ pointerEvents: 'none' }}>
                              {ui_data.template}
                            </div>
                          </div>
                        ) : (
                          ''
                        )}
                      </React.Fragment>
                    );
                  })}
                </TabPane>
              </Tabs>
            )}
          </div>
        </Tabs.TabPane>
      </Tabs>
    );
    return (
      <React.Fragment>
        {this.state.back ? <EditorItem /> : <DefaultItem />}
      </React.Fragment>
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
)(InterActiveSelect);
