//visual 页面进行保存操作的按钮
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';

// import axios from "axios";
class ToPreviewAjax extends PureComponent {
  /**
   * 将信息传递给后台
   * 1. 页面组件
   * 2. 背景组件
   * 3. 用户设置的信息
   */
  onSave = () => {
    // const bg_data = this.props.bg_value.data.toJS();
    // const component_data = this.props.select_value.data.toJS();
    // const html5_value = this.props.html5_value.data.toJS();
    // let params = new URLSearchParams();
    // let number = recognition = GetUrlPara("number");
    // params.append("id", recognition);
    // params.append("number", number);
    // axios.post('/')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  render() {
    return (
      <div onClick={this.onSave}>
        <QueueAnim type={'bottom'} delay={220}>
          <div key={'1'}>
            <i
              className={'icon iconfont icon-fabu'}
              style={{ marginRight: '10px' }}
            />
            发布
          </div>
        </QueueAnim>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bg_value: state.bg_reducer,
    select_value: state.h5_data_reducer,
    html5_value: state.shareMsg_reducer,
  };
};

export default connect(mapStateToProps, '')(ToPreviewAjax);
