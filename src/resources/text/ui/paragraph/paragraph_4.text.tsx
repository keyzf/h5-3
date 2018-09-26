import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph4Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={'text_49_1'}
        style={{
          border: ` 3px solid ${base.color ? base.color : '#33ebe4'}`,
        }}
      >
        <section className={'text_49_2'}>
          <section
            className={'text_49_3'}
            style={{
              border: ` 3px solid ${base.color ? base.color : '#33ebe4'}`,
            }}
          />
          <section
            className={'text_49_4'}
            style={{
              border: ` 3px solid ${base.color ? base.color : '#33ebe4'}`,
            }}
          />
        </section>
        <section className={'text_49_5'}/>
        <section className={'text_49_6'}>
          <div className={'text_49_7'}>
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
        <section className={'text_49_8'}>
          <section
            className={'text_49_9'}
            style={{
              border: ` 3px solid ${base.color ? base.color : '#33ebe4'}`,
            }}
          />
          <section
            className={'text_49_10'}
            style={{
              border: ` 3px solid ${base.color ? base.color : '#33ebe4'}`,
            }}
          />
        </section>
      </section>
    );
  }
}

export default Paragraph4Text;

