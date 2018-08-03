import React, { PureComponent } from 'react';
import { List } from 'immutable';
import { ImgAtom } from '../../img/img_atom';

class GridMallUi extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const advance = this.props.data.get('advance');
    const $$show_element = List(
      customize.getIn(['base', 'show_element', 'value'])
    );
    const advanced_settings = {
      width: advance.get('width'),
      height: advance.get('height'),
    };

    return (
      <ImgAtom {...advanced_settings}>
        <div className={'response_flex'}>
          {customize.get('item').map((data, index) => {
            return (
              <div
                className={`flex_${customize.getIn([
                  'base',
                  'layout',
                  'value',
                ])}`}
                key={index}
              >
                <a href={data.getIn(['link', 'value'])}>
                  <img
                    style={{
                      borderRadius: `${data.getIn(['radius', 'value'])}px`,
                    }}
                    src={data.get('crop_img')}
                    width={'100%'}
                    alt={'img'}
                  />
                </a>
                <div
                  style={{
                    background: `${advance.get('content_color')}`,
                    color: customize.getIn(['base', 'font_color']),
                  }}
                >
                  <h4
                    style={{
                      color: customize.getIn(['base', 'font_color']),
                    }}
                  >
                    {' '}
                    {$$show_element.includes('标题')
                      ? ''
                      : data.getIn(['title', 'value'])}
                  </h4>
                </div>
                <h6
                  style={{
                    background: `${advance.get('content_color')}`,
                    color: customize.getIn(['base', 'font_color']),
                  }}
                >
                  {$$show_element.includes('内容')
                    ? ''
                    : data.getIn(['content', 'value'])}
                </h6>
                <h6 style={{ background: `${advance.get('content_color')}` }}>
                  {$$show_element.includes('现价') ? (
                    ''
                  ) : (
                    <span
                      style={{
                        marginRight: '5px',
                        color: 'rgb(255,6,79)',
                      }}
                    >
                      现价{data.get('current').get('value')}
                    </span>
                  )}
                  <span>
                    {' '}
                    {$$show_element.includes('原价') ? (
                      ''
                    ) : (
                      <span style={{ textDecoration: 'line-through' }}>
                        原价{data.getIn(['original', 'value'])}
                      </span>
                    )}
                  </span>
                </h6>
                <button
                  style={{
                    width: '100%',
                    background: 'rgb(255,6,79)',
                    color: 'white',
                    border: 'none',
                  }}
                >
                  {$$show_element.includes('按钮')
                    ? ''
                    : data.get('btn_content').get('value')}
                </button>
              </div>
            );
          })}
        </div>
      </ImgAtom>
    );
  }
}

export { GridMallUi };
