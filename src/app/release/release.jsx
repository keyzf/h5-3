import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import axios from 'axios';
import wx from 'weixin-js-sdk';
import EditorReleaseView from './editor/editor.page';
import H5Render from '../../components/h5Render/h5Render';
import { access_api } from '../../api/access.api';
import { redux_action } from '../../redux/action';
import style from './release.module.scss';

class ReleaseView extends PureComponent {
  state = {
    showLoading: true,
  };

  componentWillMount() {
    access_api(this.props.sid, this.props.state, this.props.upData)
      .then()
      .catch(error => {
        window.location.href = error;
      });
  }

  componentDidMount() {
    let params = new URLSearchParams();
    params.append('url', window.location.href);
    axios
      .post(`http://${window.location.host}/view/getSignPackage`, params)
      .then(response => {
        wx.config({
          debug: false,
          appId: response.data.appId,
          timestamp: response.data.timestamp,
          nonceStr: response.data.nonceStr,
          signature: response.data.signature,
          jsApiList: [
            'onMenuShareTimeline',
            'onMenuShareAppMessage',
            'onMenuShareQQ',
            'onMenuShareWeibo',
          ],
        });
        try {
          document.getElementById('h5_audio').play();
        } catch (error) {
          return '';
        }
        wx.ready(() => {
          try {
            document.getElementById('h5_audio').play();
          } catch (error) {
            return '';
          }
          wx.onMenuShareTimeline({
            title: this.props.shareMsg_value.data.get('title')
              ? this.props.shareMsg_value.data.get('title')
              : '我的页面', // 分享标题

            desc: this.props.shareMsg_value.data.get('desc')
              ? this.props.shareMsg_value.data.get('desc')
              : '我用易企微做了一个H5页面，你来看看吧！', // 分享描述

            link: this.props.release_value.data.get('url'), // 分享链接，该链接域名必须与当前企业的可信域名一致

            imgUrl: this.props.shareMsg_value.data.get('cover'), // 分享图标
          });
          wx.onMenuShareAppMessage({
            title: this.props.shareMsg_value.data.get('title')
              ? this.props.shareMsg_value.data.get('title')
              : '我的页面', // 分享标题
            desc: this.props.shareMsg_value.data.get('desc')
              ? this.props.shareMsg_value.data.get('desc')
              : '我用易企微做了一个H5页面，你来看看吧！', // 分享描述
            link: this.props.release_value.data.get('url'), // 分享链接，该链接域名必须与当前企业的可信域名一致
            imgUrl: this.props.shareMsg_value.data.get('cover'), // 分享图标
          });
          wx.onMenuShareQQ({
            title: this.props.shareMsg_value.data.get('title')
              ? this.props.shareMsg_value.data.get('title')
              : '我的页面', // 分享标题
            desc: this.props.shareMsg_value.data.get('desc')
              ? this.props.shareMsg_value.data.get('desc')
              : '我用易企微做了一个H5页面，你来看看吧！', // 分享描述
            link: this.props.release_value.data.get('url'), // 分享链接，该链接域名必须与当前企业的可信域名一致
            imgUrl: this.props.shareMsg_value.data.get('cover'), // 分享图标
          });
          wx.onMenuShareWeibo({
            title: this.props.shareMsg_value.data.get('title')
              ? this.props.shareMsg_value.data.get('title')
              : '我的页面', // 分享标题
            desc: this.props.shareMsg_value.data.get('desc')
              ? this.props.shareMsg_value.data.get('desc')
              : '我用易企微做了一个H5页面，你来看看吧！', // 分享描述
            link: this.props.release_value.data.get('url'), // 分享链接，该链接域名必须与当前企业的可信域名一致
            imgUrl: this.props.shareMsg_value.data.get('cover'), // 分享图标
          });
        });
        wx.error(() => {
          try {
            document.getElementById('h5_audio').play();
          } catch (error) {
            return '';
          }
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className={style.mobile_h5}>
          <H5Render />
        </div>
        <div className={style.phone_h5}>
          <div className={style.flex_center}>
            <Row gutter={32}>
              <Col span={15}>
                <div
                  style={{
                    background: 'white',
                    padding: '0 22px 17px',
                    borderBottom: '1px solid #e7e7e7',
                  }}
                >
                  <div
                    style={{
                      fontSize: '16px',
                      color: '#616161',
                      height: '55px',
                      lineHeight: '54px',
                      textAlign: 'center',
                    }}
                  >
                    {this.props.shareMsg_value.data.get('title')
                      ? this.props.shareMsg_value.data.get('title')
                      : '易企微 H5 页面设计'}
                  </div>
                  <div
                    className={style.flex_center}
                    style={{
                      width: '320px',
                      margin: 'auto',
                      // pointerEvents: "none",
                      // userSelect: "none",
                      position: 'relative',
                    }}
                  >
                    <H5Render />
                  </div>
                </div>
              </Col>
              <Col span={9}>
                <EditorReleaseView />
              </Col>
            </Row>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 核心组件
    h5_data_value: state.h5Data_rdc,
    // 背景组件样式
    bg_ui_value: state.bgUi_rdc,
    //
    shareMsg_value: state.shareMsg_rdc,
    //
    release_value: state.release_rdc,
    // 音乐
    music_ui_value: state.musicUi_rdc,
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
)(ReleaseView);