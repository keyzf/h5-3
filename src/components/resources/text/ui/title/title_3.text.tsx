import React, { PureComponent } from 'react';

interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Title3Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section className={'text_29_1'}>
        <section className={'text_29_2'}>
          <section className={'text_29_3'}/>
          <section
            className={'text_29_4'}
            style={{ background: `${base.color ? base.color : `#39cfca`}` }}
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
          <section className={'text_29_5'}/>
        </section>
      </section>
    );
  }
}

export default Title3Text;
