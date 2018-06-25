/**
 * 发布页面
 */
import React, { PureComponent } from 'react';
import H5RenderCommon from '../../common/render/h5_show';
import style from './content.module.scss';

class ContentReleaseView extends PureComponent {
  render() {
    return (
      <div style={{ padding: '6% 29%', height: '100%' }}>
        <div className={style.phone}>
          <div className={style.phone_header} />
          <div className={style.phone_content}>
            <H5RenderCommon />
          </div>
          <div className={style.phone_footer} />
        </div>
      </div>
    );
  }
}

export default ContentReleaseView;
