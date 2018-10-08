import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph2Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_51_1'}>
        <section
          className={'text_51_2'}
          style={{
            border: ` 2px solid${
              base.color
                ? base.color
                : '#33ebe4'
              }`,
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
        <section
          className={'text_51_3'}
          style={{
            borderTopColor: ` ${
              base.color
                ? base.color
                : '#33ebe4'
              }`,
            borderBottomColor: ` ${
              base.color
                ? base.color
                : '#33ebe4'
              }`,
          }}
        />
        <section className={'text_51_4'}/>
      </section>
    );
  }
}

export default Paragraph2Text;