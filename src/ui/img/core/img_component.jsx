import React, { PureComponent } from 'react';

class UpImgUi extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    const font_color = customize.getIn(['base', 'font_color']);
    return (
      <div>
        {customize.get('item').map((data, index) => {
          return (
            <div key={index}>
              {data.getIn(['link', 'value']) === '' ? (
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
                    data.get('crop_img')
                      ? data.get('crop_img')
                      : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                  }
                  alt={'img'}
                />
              ) : (
                <a
                  href={data.getIn(['link', 'value'])}
                  style={{ color: font_color }}
                >
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
                      data.get('crop_img')
                        ? data.get('crop_img')
                        : 'http://demos.creative-tim.com/material-kit-pro/assets/img/image_placeholder.jpg'
                    }
                    alt={'img'}
                  />
                </a>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

export { UpImgUi };
