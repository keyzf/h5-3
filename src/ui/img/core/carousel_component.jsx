import React, { PureComponent } from 'react';
import { Carousel } from 'antd';

class CarouselImgUI extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    // 可编辑属性 data:为文本
    const $$show_element = customize.getIn(['base', 'show_element', 'value']);
    const font_color = customize.getIn(['base', 'font_color']);
    const $$show_element_title =
      $$show_element !== undefined ? $$show_element[0] : '';
    const $$show_element_content =
      $$show_element !== undefined && $$show_element[1]
        ? $$show_element[1]
        : '';
    return (
      <div>
        <Carousel autoplay>
          {customize.get('item').map((data, index) => {
            return (
              <div key={index}>
                <a
                  href={data.getIn(['link', 'value'])}
                  style={{ color: font_color }}
                >
                  <img
                    width={
                      data.getIn(['width', 'value'])
                        ? data.getIn(['width', 'value'])
                        : '100%'
                    }
                    height={
                      data.getIn(['height', 'value'])
                        ? data.getIn(['height', 'value'])
                        : 'auto'
                    }
                    src={
                      data.get('crop_img')
                        ? data.get('crop_img')
                        : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                    }
                    alt={'img'}
                  />
                </a>
                <div
                  style={{
                    marginTop: '-100px',
                    position: 'relative',
                    top: '-30px',
                    color: font_color,
                  }}
                >
                  {$$show_element_title ? (
                    ''
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: font_color,
                      }}
                    >
                      {data.get('title').get('value')}
                    </div>
                  )}
                  {$$show_element_content ? (
                    ''
                  ) : (
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: font_color,
                      }}
                    >
                      {data.getIn(['content', 'value'])}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export { CarouselImgUI };
