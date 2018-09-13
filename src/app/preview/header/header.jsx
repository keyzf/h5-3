import React, { PureComponent } from 'react';
import { Menu } from 'antd';
import SaveBtn from '../../../components/saveBtn';
import style from './header.module.scss';
import connect from 'react-redux/es/connect/connect';

class HeaderPreviewView extends PureComponent {
  /**
   * 跳转至操作界面
   */
  backUrl = () => {
    window.location.href = `${
      window.location.origin
    }/Create/index.html?state=visual&vid=${this.props.sid_value.data.get(
      'sid'
    )}`;
  };

  render() {
    const MenuConfig = {
      theme: 'dark',
      style: { background: 'transparent', lineHeight: '50px' },
      selectable: false,
      mode: 'horizontal',
    };
    return (
      <div style={{ position: 'relative' }}>
        <Menu {...MenuConfig} className={style.pc_menu_logo}>
          <Menu.Item>
            <a href={'https://www.e7wei.com/'}>
              <div className={style.logo}>易企微</div>
            </a>
          </Menu.Item>
        </Menu>
        <Menu {...MenuConfig} className={style.mobile_menu}>
          <Menu.Item key="release">
            <SaveBtn name={'release'}>
              <i
                className={'icon iconfont icon-fabu'}
                style={{ marginRight: '10px' }}
              />
              发布
            </SaveBtn>
          </Menu.Item>
          <Menu.Item key="save">
            <SaveBtn name={'save'}>
              <i
                className={'icon iconfont icon-baocun'}
                style={{ marginRight: '10px' }}
              />
              保存
            </SaveBtn>
          </Menu.Item>
          <Menu.Item key="quite">
            <span onClick={this.backUrl}>
              <i
                className="icon iconfont icon-iconfonticon2"
                style={{ marginRight: '10px' }}
              />
              继续编辑
            </span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sid_value: state.sid_rdc,
  };
};

export default connect(mapStateToProps)(HeaderPreviewView);
