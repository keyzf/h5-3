import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph11Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <div>
        <section className={'text_42_1'}>
          <section
            className={'text_42_2'}
            style={{
              border: ` 1px solid ${
                base.color
                  ? base.color
                  : '#f05454'
                }`,
            }}
          />
          <section
            className={'text_42_3'}
            style={{
              border: ` 1px solid ${
                base.color
                  ? base.color
                  : '#f05454'
                }`,
            }}
          />
        </section>
        <section
          className={'text_42_4'}
          style={{
            border: ` 1px solid ${
              base.color
                ? base.color
                : '#f05454'
              }`,
          }}
        >
          <div className={'text_42_5'}>
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
        <section className={'text_42_6'}>
          <section
            className={'text_42_7'}
            style={{
              border: ` 1px solid ${
                base.color
                  ? base.color
                  : '#f05454'
                }`,
            }}
          />
          <section
            className={'text_42_8'}
            style={{
              border: ` 1px solid ${
                base.color
                  ? base.color
                  : '#f05454'
                }`,
            }}
          />
        </section>
      </div>
    );
  }
}

export default Paragraph11Text;