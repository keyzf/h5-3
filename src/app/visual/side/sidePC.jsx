import React, { PureComponent } from 'react';
import { Tabs, Divider } from 'antd';
import { connect } from 'react-redux';
import { random } from '../../../utils/random/random';
import { redux_action } from '../../../redux/action';
import { imgData } from '../../../ui/img/imgData';
import { textData } from '../../../ui/text/textData';
import InterActiveSelect from './interactive';
import BgEditor from '../../../ui/bg/bg_editor';
import EditorMusic from '../../../ui/music/music_editor';

import style from './side.module.scss';

class SiderVisualPC extends PureComponent {
  /**
   * 向h5数据源中添加组件数据
   * @param name 组件名称
   * @param ui_data 组件数据
   */
  addH5Ui = (name, ui_data) => {
    const { data } = this.props.h5_data_value;
    const push_data = name === 'text' ? ui_data(random()) : ui_data;
    const select_up_data = data.push(push_data);
    this.props.upData('EDITOR_UI', {
      number: select_up_data.size - 1,
      data: push_data,
    });
    this.props.upData('H5_DATA', select_up_data);
  };

  render() {
    return (
      <Tabs
        defaultActiveKey={'1'}
        tabPosition={'left'}
        className={style.pcSider}
      >
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
          <div className={style.sideContent}>
            {textData.map((ui_data, index) => {
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
                      onClick={this.addH5Ui.bind(this, 'text', ui_data.data)}
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
          <div className={style.sideContent}>
            {imgData.map((ui_data, index) => {
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
                      onClick={this.addH5Ui.bind(this, 'img', ui_data.data)}
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
          <div className={style.sideContent}>
            <BgEditor />
          </div>
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
          <div className={style.sideContent}>
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
          <div className={style.sideContent}>
            <InterActiveSelect />
          </div>
        </Tabs.TabPane>
      </Tabs>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
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
)(SiderVisualPC);
