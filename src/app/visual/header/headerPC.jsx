import React, { PureComponent } from 'react';
import { Menu, Button, Icon } from 'antd';
import SaveBtn from '../../../components/saveBtn';
import style from './header.module.scss';

/**
 * visual 页面 pc端 header 页面
 */
export class HeaderVisualPC extends PureComponent {
  /**
   * 返回指定连接
   */
  backUrl = () => {
    window.location.href = `${window.location.origin}/long/index.html`;
  };

  render() {
    // menu 属性配置
    const menuConfig = {
      theme: 'dark',
      style: { background: 'transparent', lineHeight: '50px' },
      selectable: false,
      mode: 'horizontal',
    };
    return (
      <div className={style.pcMenu}>
        <Menu {...menuConfig} style={{ position: 'absolute', left: '13px' }}>
          <Menu.Item className={style.menuBorder} key={'0'}>
            <i
              onClick={this.backUrl}
              className="iconfont icon-zuojiantou"
              style={{ fontWeight: 'bold', fontSize: '20px' }}
            />
          </Menu.Item>
          <Menu.Item className={style.menuBorder} key={'1'}>
            <a
              href={'http://my.e7wei.com/package/index.html'}
              target={'view_window'}
            >
              <Button style={{ border: 'none' }}>
                <i
                  className="icon iconfont icon-huiyuan"
                  style={{ color: 'rgb(255,181,71)' }}
                />
                <span style={{ marginLeft: '3px', color: 'rgb(255,181,71)' }}>
                  升级续费
                </span>
              </Button>
            </a>
          </Menu.Item>
          <Menu.Item className={style.menuBorder} key={'2'}>
            <a
              href={'http://www.e7wei.com/help-article-id-436.html'}
              target={'view_window'}
            >
              <Icon type="question-circle-o" />
              帮助中心
            </a>
          </Menu.Item>
          <Menu.Item key={'3'}>
            <a
              href={'http://www.e7wei.com/help-article-id-409.html'}
              target={'view_window'}
            >
              <Icon type="exclamation-circle-o" />
              内容规范
            </a>
          </Menu.Item>
        </Menu>
        <Menu {...menuConfig} style={{ position: 'absolute', right: '13px' }}>
          <Menu.Item key={'0'}>
            <SaveBtn name={'save'}>
              <i
                className={'icon iconfont icon-baocun'}
                style={{ marginRight: '10px' }}
              />
              保存
            </SaveBtn>
          </Menu.Item>
          <Menu.Item key={'1'}>
            <SaveBtn name={'preview'}>
              <i
                className={'icon iconfont icon-yulan'}
                style={{ marginRight: '10px' }}
              />
              预览/设置
            </SaveBtn>
          </Menu.Item>
          <Menu.Item key={'2'}>
            <SaveBtn name={'release'}>
              <i
                className={'icon iconfont icon-fabu'}
                style={{ marginRight: '10px' }}
              />
              发布
            </SaveBtn>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
