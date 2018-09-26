import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Title1Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_31_1'}>
        <section className={'text_31_2'}>
          <section>
            <section
              className={'text_31_3'}
              style={{ background: `${base.color ? base.color : `#379c9d`}` }}
            />
            <section
              className={'text_31_4'}
              style={{ background: `${base.color ? base.color : `#379c9d`}` }}
            />
          </section>
          <section className={'text_31_5'}>
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
          <section>
            <section
              className={'text_31_4'}
              style={{ background: `${base.color ? base.color : `#379c9d`}` }}
            />
            <section
              className={'text_31_3'}
              style={{ background: `${base.color ? base.color : `#379c9d`}` }}
            />
          </section>
        </section>
      </section>
    );
  }
}

export default Title1Text;
