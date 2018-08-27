import React, { PureComponent } from 'react';
import { Row, Col } from 'antd';
import EditorReleaseView from './editor/editor.page';
import style from './release.module.scss';
import H5RenderCommon from '../../Middleware/render/h5_show';
import { redux_action } from '../../../database/redux/action';
import { connect } from 'react-redux';
import axios from 'axios';
import wx from 'weixin-js-sdk';
import MusicUi from '../../../resources/music/core/music_ui';
import { access_api } from '../../../api/access.api';

class ReleaseView extends PureComponent {
  componentWillMount() {
    document.title = this.props.shareMsg_value.data.get('title');
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
    const customize = this.props.bg_ui_value.data.get('customize');
    // 背景属性
    const bg_config = {
      color: customize.get('color'),
      img: customize.get('crop_img'),
    };
    return (
      <React.Fragment>
        <Row>
          <Col xs={24} sm={24} md={0} lg={0} xl={0}>
            <div
              style={{
                position: 'absolute',
                zIndex: '999',
                top: '19px',
                left: '8px',
              }}
            >
              {this.props.music_ui_value.data.get('music_url') ? (
                <MusicUi />
              ) : (
                <audio id={'h5_audio'}>
                  <source src={''} />
                </audio>
              )}
            </div>
            <div
              style={{
                position: 'absolute',
                zIndex: '999',
                lineHeight: '23px',
                top: '20px',
                right: '0',
              }}
            >
              <div
                style={{
                  borderRadius: '50px',
                  background: 'rgba(0,0,0,0.4)',
                  color: 'white',
                  marginRight: '5px',
                }}
              >
                &nbsp;{' '}
                <a
                  href={'#'}
                  target="view_window"
                  style={{ color: 'white', fontSize: '12px' }}
                >
                  投诉
                </a>{' '}
                &nbsp;
              </div>
            </div>
            <div
              className={`flex_center ${style.s}`}
              style={{
                backgroundColor: `${bg_config.color ? bg_config.color : null}`,
                backgroundImage: `url(' ${
                  bg_config.img ? bg_config.img : null
                }')`,
                margin: 'auto',
                backgroundRepeat: 'repeat',
                backgroundAttachment: 'local',
              }}
            >
              <div style={{ width: '320px' }}>
                <H5RenderCommon />
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={24} lg={24} xl={24}>
            <div className={style.ss}>
              <div className={style.layout}>
                <div className={'flex_center'}>
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
                          易企微 H5 页面设计
                        </div>
                        <div
                          className={'flex_center'}
                          style={{
                            width: '320px',
                            margin: 'auto',
                            position: 'relative',
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              zIndex: '999',
                              top: '25px',
                              left: '8px',
                            }}
                          >
                            {this.props.music_ui_value.data.get('music_url') ? (
                              <MusicUi />
                            ) : (
                              <audio id={'h5_audio'}>
                                <source src={''} />
                              </audio>
                            )}
                          </div>
                          <div
                            style={{
                              position: 'absolute',
                              zIndex: '999',
                              lineHeight: '25px',
                              top: '28px',
                              right: '0',
                            }}
                          >
                            <div
                              style={{
                                borderRadius: '50px',
                                background: 'rgba(0,0,0,0.4)',
                                color: 'white',
                                marginRight: '5px',
                              }}
                            >
                              &nbsp;{' '}
                              <a
                                href={'#'}
                                target="view_window"
                                style={{ color: 'white', fontSize: '10px' }}
                              >
                                投诉
                              </a>{' '}
                              &nbsp;
                            </div>
                          </div>
                          <div className={style.s}>
                            <H5RenderCommon />
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col span={9}>
                      <EditorReleaseView />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
        </Row>
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
