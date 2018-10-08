import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph15Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={'text_38_1'}
        style={{
          border: `3px solid ${
            base.color ? base.color : '#76e57b'
            } `,
        }}
      >
        <section className={'text_38_2'}>
          <section
            className={'text_38_3'}
            style={{
              borderColor: `${
                base.color
                  ? base.color
                  : '#76e57b'
                } `,
              backgroundColor: `${
                base.color
                  ? base.color
                  : '#76e57b'
                } `,
            }}
          />
          <section
            className={'text_38_4'}
            style={{
              borderColor: `${
                base.color
                  ? base.color
                  : '#76e57b'
                } `,
              backgroundColor: `${
                base.color
                  ? base.color
                  : '#76e57b'
                } `,
            }}
          />
        </section>
        <section className={'text_38_5'}>
          <div className={'text_38_6'}>
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
        <section className={'text_38_7'}>
          <section
            className={'text_38_8'}
            style={{
              borderColor: `${
                base.color
                  ? base.color
                  : '#76e57b'
                } `,
              backgroundColor: `${
                base.color
                  ? base.color
                  : '#76e57b'
                } `,
            }}
          />
          <section
            className={'text_38_9'}
            style={{
              borderColor: `${
                base.color
                  ? base.color
                  : '#76e57b'
                } `,
              backgroundColor: `${
                base.color
                  ? base.color
                  : '#76e57b'
                } `,
            }}
          />
        </section>
      </section>
    );
  }
}

export default Paragraph15Text;
