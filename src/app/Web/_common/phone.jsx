import React, { PureComponent } from 'react';
import H5RenderCommon from '../../Middleware/render/h5_show';
import style from './_common.module.scss';
import MusicRenderCommon from '../../Middleware/render/music_render';

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
              <MusicRenderCommon />
              <div
                style={{
                  position: 'absolute',
                  zIndex: '999',
                  lineHeight: '30px',
                  top: '40px',
                  right: '0',
                }}
              >
                <div
                  style={{
                    borderTopLeftRadius: '50px',
                    borderBottomLeftRadius: '50px',
                    background: 'rgba(0,0,0,0.4)',
                    color: 'white',
                  }}
                >
                  &nbsp; &nbsp;投诉 &nbsp;
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

export default PhoneCommonView;
