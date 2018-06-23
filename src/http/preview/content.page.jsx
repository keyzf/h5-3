import React, { PureComponent } from 'react';
import H5RenderCommon from '../../common/render/h5_show';
import style from './content.module.scss';

class ContentPreviewView extends PureComponent {
  render() {
    return (
      <div style={{ margin: ' 40px auto', width: '340px', height: '630px' }}>
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

export default ContentPreviewView;
