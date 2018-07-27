import React, { PureComponent } from 'react';
import { Row, Col, Modal } from 'antd';
import { connect } from 'react-redux';
import { $$video_database } from '../../../../database/video.db';
import { $$music_database } from '../../../../database/music.db';
import { redux_action } from '../../../../database/redux/action';

class InterActiveSelect extends PureComponent {
  pushH5Data = name => {
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
    if (name === 'music') {
      if (this.props.h5_data_value.data.size > 0) {
        let exist = true;
        this.props.h5_data_value.data.map(map_data => {
          if (map_data.getIn(['customize', 'type']) === 'music') {
            exist = false;
          }
        });
        if (exist) {
          let push_data = $$music_database('music', '');
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
        } else {
          Modal.warning({
            title: '提醒',
            content: '音乐组件已添加，请在右侧编辑栏中选择音乐',
            okText: '确认',
          });
        }
      } else {
        let push_data = $$music_database('music', '');
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
    }
  };

  render() {
    const default_text = {
      alignItems: 'center',
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'column nowrap',
      margin: 'auto',
      cursor: 'pointer',
    };
    return (
      <Row type={'flex'} gutter={16} key={1}>
        <Col
          span={6}
          style={default_text}
          className={'components_hover'}
          onClick={this.pushH5Data.bind(this, 'music')}
        >
          <i
            className="iconfont icon-yinlemusic214"
            style={{ fontSize: '26px', flex: '1' }}
          />
          <div style={{ flex: '1' }}>音乐</div>
        </Col>
        <Col
          span={6}
          style={default_text}
          className={'components_hover'}
          onClick={this.pushH5Data.bind(this, 'video')}
        >
          <i
            className="iconfont icon-shipin"
            style={{ fontSize: '26px', flex: '1' }}
          />
          <div style={{ flex: '1' }}>视频</div>
        </Col>
        <Col span={6} />
        <Col span={6} />
      </Row>
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
