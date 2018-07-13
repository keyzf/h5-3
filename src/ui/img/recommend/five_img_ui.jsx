import React, { PureComponent } from 'react';

class FiveImgUi extends PureComponent {
  render() {
    const customize = this.props.data.get('customize');
    return (
      <div className={'flex_row'}>
        <div className={'flex'}>
          <div className={'flex_column '}>
            <div className={'flex'}>
              {customize.get('item').map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    {index === 0 ? (
                      data.getIn(['link', 'value']) === '' ? (
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
                      ) : (
                        <a href={data.getIn(['link', 'value'])}>
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
                        </a>
                      )
                    ) : (
                      ''
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <div className={'flex'}>
              {customize.get('item').map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    {index === 1 ? (
                      data.getIn(['link', 'value']) === '' ? (
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
                      ) : (
                        <a href={data.getIn(['link', 'value'])}>
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
                        </a>
                      )
                    ) : (
                      ''
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className={'flex'}>
          <div className={'flex_column '}>
            <div className={'flex'}>
              {customize.get('item').map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    {index === 2 ? (
                      data.getIn(['link', 'value']) === '' ? (
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
                      ) : (
                        <a href={data.getIn(['link', 'value'])}>
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
                        </a>
                      )
                    ) : (
                      ''
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <div className={'flex'}>
              {customize.get('item').map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    {index === 3 ? (
                      data.getIn(['link', 'value']) === '' ? (
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
                      ) : (
                        <a href={data.getIn(['link', 'value'])}>
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
                        </a>
                      )
                    ) : (
                      ''
                    )}
                  </React.Fragment>
                );
              })}
            </div>
            <div className={'flex'}>
              {customize.get('item').map((data, index) => {
                return (
                  <React.Fragment key={index}>
                    {index === 4 ? (
                      data.getIn(['link', 'value']) === '' ? (
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
                      ) : (
                        <a href={data.getIn(['link', 'value'])}>
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
                        </a>
                      )
                    ) : (
                      ''
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { FiveImgUi };
