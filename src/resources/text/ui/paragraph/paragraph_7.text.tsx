import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph7Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_46_1'}>
        <section className={'text_46_2'}>
          <section
            className={'text_46_3'}
            style={{
              borderColor: `${
                base.color
                  ? base.color
                  : '#57d9ff'
                }`,
            }}
          />
          <section
            className={'text_46_4'}
            style={{
              borderColor: `${
                base.color
                  ? base.color
                  : '#57d9ff'
                }`,
            }}
          />
          <section className={'text_46_5'}/>
        </section>
        <section
          className={'text_46_6'}
          style={{
            border: ` 1px solid ${
              base.color
                ? base.color
                : '#57d9ff'
              }`,
          }}
        >
          <section className={'text_46_7'}>
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
        <section className={'text_46_8'}>
          <section
            className={'text_46_9'}
            style={{
              borderColor: `${
                base.color
                  ? base.color
                  : '#57d9ff'
                }`,
            }}
          />
          <section
            className={'text_46_10'}
            style={{
              borderColor: `${
                base.color
                  ? base.color
                  : '#57d9ff'
                }`,
            }}
          />
        </section>
      </section>
    );
  }
}

export default Paragraph7Text;
