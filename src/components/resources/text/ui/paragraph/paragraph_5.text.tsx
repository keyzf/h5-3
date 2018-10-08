import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph5Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_48_1'}>
        <section
          className={'text_48_2'}
          style={{
            backgroundColor: `${
              base.color
                ? base.color
                : '#f58fc6'
              }`,
          }}
        >
          <section className={'text_48_3'}>
            <section className={'text_48_4'}/>
            <section className={'text_48_5'}/>
            <section className={'text_48_6'}>
              <section className={'text_48_7'}>
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
            <section className={'text_48_8'}/>
            <section className={'text_48_9'}/>
          </section>
        </section>
      </section>
    );
  }
}

export default Paragraph5Text;

