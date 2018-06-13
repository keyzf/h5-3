import React from 'react';

class UpImgUi extends React.Component {
  render() {
    const customize = this.props.data.get('customize');
    return (
      <div>
        {customize.get('item').map((data, index) => {
          return (
            <div key={index}>
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
                src={data.get('img')}
                alt={'img'}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export { UpImgUi };
