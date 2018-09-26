import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph9Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={'text_44_1'}
        style={{
          border: ` 2px dashed  ${
            base.color ? base.color : '#33ebe4'
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
    );
  }
}


export default Paragraph9Text;
