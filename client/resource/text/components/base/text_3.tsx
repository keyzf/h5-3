import * as React from "react";
import style from "./text-ui";

interface Props {
    base: {
        html: string;
        index: string;
        color: string;
        wordArt: string;
    };
}

class Text3s extends React.PureComponent<Props, ''> {
  render() {
    const { base } = this.props;
    return (
      <section className={style.text2c1}>
        <section className={style.text2c2}>
          <section className={style.text2c3}>
            <section className={style.text2c4}/>
          </section>
          <section
            className={style.text2c5}
            style={{ background: `${base.color}` }}
          >
             <span
                 className={style.mobile}
                 style={{ whiteSpace: "pre-wrap", fontSize: "calc(14/320*100vw)" }}
                 dangerouslySetInnerHTML={{
                     __html: `${base.html}`.replace(
                         new RegExp("(\\d+)px", "g"),
                         "calc($1/320*100vw)"
                     )
                 }}
             />
            <span
              className={style.pc}
              style={{ whiteSpace: 'pre-wrap' }}
              dangerouslySetInnerHTML={{
                __html: base.html,
              }}
            />
          </section>
          <section className={style.text2c6}>
            <section className={style.text2c7}/>
          </section>
        </section>
      </section>
    );
  }
}

export default Text3s;


