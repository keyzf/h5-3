import React from 'react';
import { connect } from 'react-redux';
import { visual_ui_show_action } from '../../redux/action';
import { Layout } from 'antd';
import {
  template_img_data,
  template_mall_data,
  template_music_data,
  template_text_data,
  template_video_data,
} from '../../containers/visual/func_library/select_database';
import SelectCommon from '../../common/visual/select_common';
import InterActiveSelect from '../../containers/visual/func_library/interactive';

class VisualUiShowView extends React.Component {
  render() {
    const $$name = this.props.visual_ui_show_value.data.get('name');
    const show = $$name => {
      if ($$name === 'text') {
        return <SelectCommon data={template_text_data} />;
      }
      if ($$name === 'img') {
        return <SelectCommon data={template_img_data} />;
      }
      if ($$name === 'music') {
        return <SelectCommon data={template_music_data} />;
      }
      if ($$name === 'video') {
        return <SelectCommon data={template_video_data} />;
      }
      if ($$name === 'mall') {
        return <SelectCommon data={template_mall_data} />;
      }
      if ($$name === 'lnteractive') {
        return <InterActiveSelect />;
      }
    };
    return (
      <React.Fragment>
        {$$name ? (
          <Layout.Sider
            width={330}
            style={{ height: '100%', background: 'transparent' }}
          >
            {show($$name)}
          </Layout.Sider>
        ) : (
          ''
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    visual_ui_show_value: state.visual_ui_show_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    visual_ui_show_upData: (data, meta, error) =>
      dispatch(visual_ui_show_action(data, meta, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(VisualUiShowView);
