import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph12Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_41_1'}>
        <section className={'text_41_2'}>
          <section className={'text_41_3'}>
            <span
              className={'text_41_4'}
              style={{
                color: `${
                  base.color
                    ? base.color
                    : '#76e57b'
                  } `,
              }}
            >
              ★
            </span>
          </section>
        </section>
        <section
          className={'text_41_5'}
          style={{
            borderTop: `1px solid ${
              base.color
                ? base.color
                : '#76e57b'
              } `,
            borderBottom: `1px solid ${
              base.color
                ? base.color
                : '#76e57b'
              } `,
          }}
        >
          <div className={'text_41_6'}>
            <span className={'text_41_7'}>
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
        <section className={'text_41_8'}>
          <section className={'text_41_9'}>
            <span
              className={'text_41_10'}
              style={{
                color: `${
                  base.color
                    ? base.color
                    : '#76e57b'
                  } `,
              }}
            >
              ★
            </span>
          </section>
        </section>
      </section>
    );
  }
}

export default Paragraph12Text;
