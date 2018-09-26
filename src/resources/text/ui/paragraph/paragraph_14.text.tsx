import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph14Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_39_1'}>
        <section className={'text_39_2'}>
          <section className={'text_39_3'}>
            <section
              className={'text_39_4'}
              style={{
                borderColor: ` ${
                  base.color
                    ? base.color
                    : '#57d9ff'
                  } `,
              }}
            />
            <section
              className={'text_39_5'}
              style={{
                borderColor: ` ${
                  base.color
                    ? base.color
                    : '#57d9ff'
                  } `,
              }}
            />
          </section>
          <section
            className={'text_39_6'}
            style={{
              border: ` 2px solid ${
                base.color
                  ? base.color
                  : '#57d9ff'
                } `,
            }}
          >
            <div className={'text_39_7'}>
              <span className={'text_39_8'}>
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
              </span>
            </div>
          </section>
        </section>
      </section>
    );
  }
}


export default Paragraph14Text;
