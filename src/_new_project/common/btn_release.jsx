import React, { PureComponent } from 'react';
import QueueAnim from 'rc-queue-anim';
import connect from '../redux/decorator';
import { save_ajax } from "../api/save.api";


@connect
export class BtnRelease extends PureComponent {
  onSave = () => {
    save_ajax({ ...this.props })
      .then(data => {})
      .catch(data => {});
  };

  render() {
    return (
      <div onClick={this.onSave}>
        <QueueAnim type={'bottom'} delay={220}>
          <div key={'1'}>
            <i
              className={'icon iconfont icon-fabu'}
              style={{ marginRight: '10px' }}
            />
            发布
          </div>
        </QueueAnim>
      </div>
    );
  }
}
