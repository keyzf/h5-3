import React, { PureComponent } from 'react';
import H5RenderCommon from '../../Middleware/render/h5_show';
import style from './_common.module.scss';
import { connect } from 'react-redux';
import MusicUi from '../../../resources/music/core/music_ui';

class PhoneCommonView extends PureComponent {
  render() {
    return (
      <div style={{ margin: ' 40px auto', width: '320px', height: '630px' }}>
        <div className={style.phone}>
          <div className={style.phone_header} />
          <div className={style.phone_content}>
            <div
              style={{ position: 'relative', width: '100%', height: '100%' }}
            >
              {this.props.music_ui_value.data.get('music_url') ? (
                <div
                  style={{
                    position: 'absolute',
                    zIndex: '999',
                    top: '28px',
                    left: '8px',
                  }}
                >
                  <MusicUi />
                </div>
              ) : (
                ''
              )}
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
                    borderRadius: '10px',
                    background: 'rgba(0,0,0,0.4)',
                    color: 'white',
                    marginRight:'5px'
                  }}
                >
                  &nbsp; <a href={'#'} target="view_window" style={{color:"white",fontSize:"12px"}}>投诉</a> &nbsp;
                </div>
              </div>
              <div className={style.s}>
                <H5RenderCommon />
              </div>
            </div>
          </div>
          <div className={style.phone_footer} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // 音乐
    music_ui_value: state.musicUi_rdc,
  };
};

export default connect(mapStateToProps)(PhoneCommonView);
