import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph6Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <div>
        <section
          className={'text_47_1'}
          style={{
            borderBottom: ` 1px solid ${
              base.color
                ? base.color
                : '#f58fc6'
              }`,
          }}
        />
        <section
          className={'text_47_2'}
          style={{
            borderLeft: ` 1px solid ${
              base.color
                ? base.color
                : '#f58fc6'
              }`,
          }}
        />
        <section className={'text_47_3'}>
          <div className={'text_47_4'}>
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
          </div>
        </section>
        <section className={'text_47_5'}>
          <section
            className={'text_47_6'}
            style={{
              borderRight: ` 1px solid ${
                base.color
                  ? base.color
                  : '#f58fc6'
                }`,
            }}
          />
          <section
            className={'text_47_7'}
            style={{
              borderBottom: ` 1px solid ${
                base.color
                  ? base.color
                  : '#f58fc6'
                }`,
            }}
          />
        </section>
      </div>
    );
  }
}

export default Paragraph6Text;

