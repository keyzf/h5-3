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
              <a
                href={data.getIn(['link', 'value'])}
                style={{ color: font_color }}
              >
                {' '}
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
                  src={data.get('crop_img')}
                  alt={'img'}
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}

export { UpImgUi };
