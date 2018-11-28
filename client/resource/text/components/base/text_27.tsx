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

class Text27 extends React.PureComponent<Props, ""> {
    render() {
        const {base} = this.props;
        return <section className={style.text25c1} style={{border: ` 1px solid ${base.color }`}}>
            <div className={style.text25c2}>
                <span className={style.mobile} style={{whiteSpace: "pre-wrap"}}
                      dangerouslySetInnerHTML={{__html: `<p style="font-size: 14px">${base.html}</p>`.replace(new RegExp("(\\d+)px", "g"), "calc($1/320*100vw)")}}/>
                <span className={style.pc} style={{whiteSpace: "pre-wrap"}}
                      dangerouslySetInnerHTML={{__html: base.html}}/>
            </div>
        </section>;
    }
}

export default Text27;
