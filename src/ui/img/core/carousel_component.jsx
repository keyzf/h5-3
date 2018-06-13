import React from 'react';
import { Carousel } from 'antd';

class CarouselImgUI extends React.Component {
  render() {
    const customize = this.props.data.get('customize');
    // 可编辑属性 data:为文本
    const $$show_element = customize.getIn(['base', 'show_element', 'value']);
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
                <img
                  width={
                    data.get('width').get('value')
                      ? data.get('width').get('value')
                      : '100%'
                  }
                  height={
                    data.get('height').get('value')
                      ? data.get('height').get('value')
                      : 'auto'
                  }
                  src={
                    data.get('img')
                      ? data.get('img')
                      : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                  }
                  alt={'img'}
                />
                <div
                  style={{
                    marginTop: '-100px',
                    position: 'relative',
                    top: '-30px',
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
                      }}
                    >
                      {data.get('content').get('value')}
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
