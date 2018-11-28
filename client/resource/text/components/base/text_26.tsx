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

class Text26 extends React.PureComponent<Props, ""> {
  render() {
    const { base } = this.props;
    return <section className={style.text24c1}>
        <section className={style.text24c2}>
          <section className={style.text24c3} style={{ borderColor: `${base.color }` }} />
          <section className={style.text24c4} style={{ borderColor: `${base.color }` }} />
          <section className={style.text24c5} />
        </section>
        <section className={style.text24c6} style={{ border: ` 1px solid ${base.color }` }}>
          <section className={style.text24c7}>
            <span className={style.mobile} style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: `<p style="font-size: 14px">${base.html}</p>`.replace(new RegExp("(\\d+)px", "g"), "calc($1/320*100vw)") }} />
            <span className={style.pc} style={{ whiteSpace: "pre-wrap" }} dangerouslySetInnerHTML={{ __html: base.html }} />
          </section>
        </section>
        <section className={style.text24c8}>
          <section className={style.text24c9} style={{ borderColor: `${base.color }` }} />
          <section className={style.text24c10} style={{ borderColor: `${base.color }` }} />
        </section>
      </section>;
  }
}

export default Text26;
