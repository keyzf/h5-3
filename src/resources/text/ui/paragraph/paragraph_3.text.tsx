import React, { PureComponent } from 'react';
interface Props {
  base: {
    html: string;
    index: string;
    color: '';
  };
}

class Paragraph3Text extends PureComponent<Props, any> {
  render() {
    const { base } = this.props;
    return (
      <section
        className={'text_50_1'}
        style={{
          border: ` 1px solid ${
            base.color ? base.color : '#1e9be8'
          }`,
        }}
      >
        <section
          className={'text_50_2'}
          style={{
            border: `0 none ${
              base.color
                ? base.color
                : '#1e9be8'
            }`,
          }}
        >
          <section
            className={'text_50_3'}
            style={{
              backgroundColor: `${
                base.color
                  ? base.color
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={'text_50_4'}
            style={{
              backgroundColor: `${
                base.color
                  ? base.color
                  : '#1e9be8'
              }`,
            }}
          />
        </section>
        <section
          className={'text_50_5'}
          style={{
            borderColor: `${
              base.color
                ? base.color
                : '#1e9be8'
            }`,
          }}
        >
          <section
            className={'text_50_6'}
            style={{
              backgroundColor: `${
                base.color
                  ? base.color
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={'text_50_7'}
            style={{
              borderColor: `${
                base.color
                  ? base.color
                  : '#1e9be8'
              }`,
            }}
          >
            <div className={'text_50_8'}>
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
          <section
            className={'text_50_9'}
            style={{
              backgroundColor: `${
                base.color
                  ? base.color
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={'text_50_10'}
            style={{
              backgroundColor: `${
                base.color
                  ? base.color
                  : '#1e9be8'
              }`,
            }}
          />
        </section>
        <section
          className={'text_50_11'}
          style={{
            border: `0 none ${
              base.color
                ? base.color
                : '#1e9be8'
            }`,
          }}
        >
          <section
            className={'text_50_12'}
            style={{
              backgroundColor: `${
                base.color
                  ? base.color
                  : '#1e9be8'
              }`,
            }}
          />
          <section
            className={'text_50_13'}
            style={{
              backgroundColor: `${
                base.color
                  ? base.color
                  : '#1e9be8'
              }`,
            }}
          />
        </section>
      </section>
    );
  }
}

export default Paragraph3Text;

