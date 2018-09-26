import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph18Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_35_1'}>
        <section
          className={'text_35_2'}
          style={{
            backgroundColor: `${base.color ? base.color : '#57d9ff'} `,
          }}
        >
          <section className={'text_35_3'}>
            <section className={'text_35_4'}/>
            <section className={'text_35_5'}/>
            <section className={'text_35_6'}>
              <div className={'text_35_7'}>
                <span
                  className={'mobile'}
                  style={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{
                    __html: `<p style="font-size: 14px">${
                      base.html
                      }</p>`.replace(
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
            <section className={'text_35_8'}/>
            <section className={'text_35_9'}/>
          </section>
        </section>
      </section>
    );
  }
}


export default Paragraph18Text;
