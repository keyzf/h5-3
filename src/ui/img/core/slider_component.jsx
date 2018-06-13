import React from 'react';

class SliderImgUI extends React.Component {
  render() {
    const customize = this.props.data.get('customize');
    const $$show_element = customize.getIn(['base', 'show_element', 'value']);
    const $$show_element_title =
      $$show_element !== undefined ? $$show_element[0] : '';
    const $$show_element_content =
      $$show_element !== undefined && $$show_element[1]
        ? $$show_element[1]
        : '';
    return (
      <React.Fragment>
        {customize.get('item').map((data, index) => {
          return (
            <div key={index} style={{ flex: '0 0 120px', marginRight: '2px' }}>
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
          );
        })}
      </React.Fragment>
    );
  }
}

export { SliderImgUI };
