import React, { PureComponent } from 'react';
import H5RenderCommon from '../../app_feature/render/h5_show';
import style from './_common.module.scss';

class PhoneCommonView extends PureComponent {
  render() {
    return (
      <div style={{ margin: ' 40px auto', width: '340px', height: '630px' }}>
        <div className={style.phone}>
          <div className={style.phone_header} />
          <div className={style.phone_content} style={{ overflow: 'auto' }}>
            <H5RenderCommon />
          </div>
          <div className={style.phone_footer} />
        </div>
      </div>
    );
  }
}

export default PhoneCommonView;
