import React, { PureComponent } from 'react';
interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph17Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_36_1'}>
        <section
          className={'text_36_2'}
          style={{
            backgroundColor: `${
              base.color
                ? base.color
                : '#f05454'
            } `,
          }}
        />
        <section
          className={'text_36_3'}
          style={{
            borderColor: `${
              base.color
                ? base.color
                : '#f05454'
            } `,
          }}
        >
          <section>
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
        <section
          className={'text_36_4'}
          style={{
            borderColor: `${
              base.color
                ? base.color
                : '#f05454'
            } `,
          }}
        />
      </section>
    );
  }
}

export default Paragraph17Text;
