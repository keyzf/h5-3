import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph16Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_37_1'}>
        <section className={'text_37_2'}>
          <section className={'text_37_3'}>
            <section
              className={'text_37_4'}
              style={{
                borderTopColor: `${
                  base.color
                    ? base.color
                    : '#33ebe4'
                  } `,
                borderLeftColor: `${
                  base.color
                    ? base.color
                    : '#33ebe4'
                  } `,
              }}
            />
            <section
              className={'text_37_5'}
              style={{
                borderTopColor: `${
                  base.color
                    ? base.color
                    : '#33ebe4'
                  } `,
                borderRightColor: `${
                  base.color
                    ? base.color
                    : '#33ebe4'
                  } `,
              }}
            />
          </section>
          <section className={'text_37_6'}>
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
          <section className={'text_37_7'}>
            <section
              className={'text_37_8'}
              style={{
                borderLeftColor: `${
                  base.color
                    ? base.color
                    : '#33ebe4'
                  } `,
                borderBottomColor: `${
                  base.color
                    ? base.color
                    : '#33ebe4'
                  } `,
              }}
            />
            <section
              className={'text_37_9'}
              style={{
                borderRightColor: `${
                  base.color
                    ? base.color
                    : '#33ebe4'
                  } `,
                borderBottomColor: `${
                  base.color
                    ? base.color
                    : '#33ebe4'
                  } `,
              }}
            />
          </section>
        </section>
      </section>
    );
  }
}


export default Paragraph16Text;
