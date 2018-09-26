import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph1Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_24_1'}>
        <section className={'text_24_2'}>
          <section
            className={'text_24_3'}
            style={{
              border: `1px solid  ${
                base.color
                  ? base.color
                  : '#ebe6d9'
                } `,
            }}
          />
          <section
            className={'text_24_4'}
            style={{
              border: `1px solid  ${
                base.color
                  ? base.color
                  : '#ebe6d9'
                } `,
            }}
          />
        </section>
        <section
          className={'text_24_5'}
          style={{
            border: `1px solid  ${
              base.color
                ? base.color
                : '#ebe6d9'
              } `,
            backgroundColor: ` ${
              base.color
                ? base.color
                : '#ebe6d9'
              } `,
          }}
        >
          <section
            className={'text_24_6'}
            style={{
              border: `1px solid  ${
                base.color
                  ? base.color
                  : '#ebe6d9'
                } `,
            }}
          >
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
        <section className={'text_24_2'}>
          <section
            className={'text_24_3'}
            style={{
              border: `1px solid  ${
                base.color
                  ? base.color
                  : '#ebe6d9'
                } `,
            }}
          />
          <section
            className={'text_24_4'}
            style={{
              border: `1px solid  ${
                base.color
                  ? base.color
                  : '#ebe6d9'
                } `,
            }}
          />
        </section>
      </section>
    );
  }
}

export default Paragraph1Text;