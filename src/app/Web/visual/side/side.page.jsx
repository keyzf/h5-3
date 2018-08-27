import React, { PureComponent } from 'react';
import { Tabs, Divider, Modal } from 'antd';
import { connect } from 'react-redux';
import InterActiveSelect from './interactive';
import { redux_action } from '../../../../database/redux/action';
import style from './side.module.scss';
import {
  template_img_data,
  template_text_data,
} from '../../../../resources/template_database';
import EditorMusic from '../../../../app/Middleware/editor/music/music_editor';
import BgEditor from '../../../Middleware/editor/bg/bg_editor';

class SiderVisualView extends PureComponent {
  formModel = (index, data) => {
    const select_up_data = this.props.h5_data_value.data.set(index, data);
    this.props.upData('H5_DATA', select_up_data);
    this.props.upData(
      'EDITOR_UI',
      { number: select_up_data.size - 1, data: data },
      {
        content: true,
        choose: true,
      }
    );
  };

  transfer = (name, data) => {
    if (this.props.h5_data_value.data.size > 0) {
      this.props.h5_data_value.data.map((map_data, index) => {
        if (map_data.getIn(['customize', 'type']) === 'form') {
          Modal.confirm({
            title: '提醒',
            content: '表单组件已存在，是否替换原表单?',
            okText: '确认',
            cancelText: '取消',
            onOk: this.formModel.bind(true, index, data),
          });
        } else {
          let push_data;
          if (name === 'text') {
            push_data = data(Math.random());
          } else {
            push_data = data;
          }
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
      });
    } else {
      let push_data;
      if (name === 'text') {
        push_data = data(Math.random());
      } else {
        push_data = data;
      }
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
  };

  render() {
    return (
      <Tabs defaultActiveKey={'1'} tabPosition={'left'}>
        <Tabs.TabPane
          style={{
            marginLeft: ' -24px',
          }}
          key={'1'}
          tab={
            <span>
              <i
                className={'iconfont icon-wenzixiaoguo'}
                style={{ fontSize: 24, marginRight: 3 }}
              />
              <br />
              文字
            </span>
          }
        >
          <div className={style.queueAnim}>
            {template_text_data.map((ui_data, index) => {
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
                      onClick={this.transfer.bind(this, 'text', ui_data.data)}
                    >
                      <div style={{ pointerEvents: 'none' }}>
                        {ui_data.template}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane
          style={{
            marginLeft: ' -24px',
          }}
          key={'2'}
          tab={
            <span>
              <i
                className={'iconfont icon-tupian'}
                style={{ fontSize: 24, marginRight: 3 }}
              />
              <br />
              图片
            </span>
          }
        >
          <div className={style.queueAnim}>
            {template_img_data.map((ui_data, index) => {
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
                      onClick={this.transfer.bind(this, 'img', ui_data.data)}
                    >
                      <div style={{ pointerEvents: 'none' }}>
                        {ui_data.template}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane
          style={{
            marginLeft: ' -24px',
          }}
          key={'3'}
          tab={
            <span>
              <i
                className={'icon iconfont icon-beijing'}
                style={{ fontSize: 24, marginRight: 3 }}
              />
              <br />
              背景
            </span>
          }
        >
          <BgEditor />
        </Tabs.TabPane>
        <Tabs.TabPane
          style={{
            marginLeft: ' -24px',
          }}
          key={'4'}
          tab={
            <span>
              <i
                className={'iconfont icon-yinlemusic214'}
                style={{ fontSize: 24, marginRight: 3 }}
              />
              <br />
              音乐
            </span>
          }
        >
          <div style={{ overflow: 'auto' }}>
            <EditorMusic />
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane
          style={{
            marginLeft: ' -24px',
          }}
          key={'5'}
          tab={
            <span>
              <i
                className={'icon iconfont icon-yingyong'}
                style={{ fontSize: 24, marginRight: 3 }}
              />
              <br />
              更多
            </span>
          }
        >
          <InterActiveSelect />
        </Tabs.TabPane>
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
)(SiderVisualView);
