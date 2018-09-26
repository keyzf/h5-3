import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Title16Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_10_1'}>
        <section className={'text_10_2'}>
          <section
            className={'text_10_3'}
            style={{
              borderLeftColor: `${
                base.color
                  ? base.color
                  : '#fff10c'
                }`,
              borderRightColor: `${
                base.color
                  ? base.color
                  : '#fff10c'
                }`,
            }}
          />
          <section
            className={'text_10_4'}
            style={{
              borderLeftColor: `${
                base.color
                  ? base.color
                  : '#fff10c'
                }`,
              borderRightColor: `${
                base.color
                  ? base.color
                  : '#fff10c'
                }`,
            }}
          />
          <section
            className={'text_10_5'}
            style={{
              borderLeftColor: `${
                base.color
                  ? base.color
                  : '#fff10c'
                }`,
              borderRightColor: `${
                base.color
                  ? base.color
                  : '#fff10c'
                }`,
            }}
          />
          <section className={'text_10_6'}>
             <span
               className={'mobile'}
               style={{ whiteSpace: 'pre-wrap' }}
               dangerouslySetInnerHTML={{
                 __html: `<p style="font-size: 14px">${base.html}</p>`.replace(
                   new RegExp('(\\d+)px', 'g'),
                   'calc($1/320*100vw)',
                 ),
               }}
             />
            <span
              className={'pc'}
              style={{ whiteSpace: 'pre-wrap' }}
              dangerouslySetInnerHTML={{
                __html: base.html,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}

export default Title16Text;
