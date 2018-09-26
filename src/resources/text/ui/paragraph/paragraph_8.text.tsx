import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph8Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={'text_45_1'}
        style={{
          border: ` 1px solid ${
            base.color ? base.color : '#7880c8'
            }`,
        }}
      >
        <div className={'text_45_2'}>
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
    );
  }
}

export default Paragraph8Text;
