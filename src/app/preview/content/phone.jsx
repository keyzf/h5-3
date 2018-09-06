import React, { PureComponent } from 'react';
import H5Render from '../../../components/h5Render/h5Render';
import style from './phone.module.scss';

class PhoneCommonView extends PureComponent {
  render() {
    return (
      <div style={{ margin: ' 40px auto', width: '320px', height: '600px' }}>
        <div className={style.phone}>
          <div className={style.phone_header} />
          <div className={style.phone_content}>
            <H5Render />
          </div>
          <div className={style.phone_footer} />
        </div>
      </div>
    );
  }
}

export default PhoneCommonView;
