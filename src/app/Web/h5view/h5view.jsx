import React, { PureComponent } from 'react';
import H5RenderCommon from '../../Middleware/render/h5_show';
import style from '../_common/_common.module.scss';

class Html5View extends PureComponent {
  render() {
    return (
      <div className={'flex_center'} style={{ width: '340px', margin: 'auto' }}>
        <div className={style.s}>
          <H5RenderCommon />
        </div>
      </div>
    );
  }
}

export default Html5View;
