import React, { PureComponent } from 'react';
import H5RenderCommon from '../../../common/render/h5_show';
import style from './content.module.scss';
import connect from '../../../redux/decorator';

@connect
export default class ContentPreviewView extends PureComponent {
  render() {
    const $$bg_data = this.props.bg_ui_value.data;
    return (
      <div style={{ margin: ' 40px auto', width: '340px', height: '630px' }}>
        <div className={style.phone}>
          <div className={style.phone_header} />
          {$$bg_data.getIn(['customize', 'img_config', 'fixed']) ? (
            <div className={style.phone_content}>
              <H5RenderCommon />
            </div>
          ) : (
            <div className={style.phone_content} style={{ overflow: 'auto' }}>
              <H5RenderCommon />
            </div>
          )}
          <div className={style.phone_footer} />
        </div>
      </div>
    );
  }
}
