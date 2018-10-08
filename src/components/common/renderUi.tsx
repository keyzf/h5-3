import * as React from "react";
import VTextUi from "../../resources/text/ui/example/vertical";
import HTextUi from "../../resources/text/ui/example/horizontal";
import Title1Text from "../../resources/text/ui/title/title_1.text";
import Title2Text from "../../resources/text/ui/title/title_2.text";
import Title3Text from "../../resources/text/ui/title/title_3.text";
import Title4Text from "../../resources/text/ui/title/title_4.text";
import Title5Text from "../../resources/text/ui/title/title_5.text";
import Title6Text from "../../resources/text/ui/title/title_6.text";
import Title7Text from "../../resources/text/ui/title/title_7.text";
import Title8Text from "../../resources/text/ui/title/title_8.text";
import Title9Text from "../../resources/text/ui/title/title_9.text";
import Title10Text from "../../resources/text/ui/title/title_10.text";
import Title11Text from "../../resources/text/ui/title/title_11.text";
import Title12Text from "../../resources/text/ui/title/title_12.text";
import Title13Text from "../../resources/text/ui/title/title_13.text";
import Title14Text from "../../resources/text/ui/title/title_14.text";
import Title15Text from "../../resources/text/ui/title/title_15.text";
import Title16Text from "../../resources/text/ui/title/title_16.text";
import Title17Text from "../../resources/text/ui/title/title_17.text";
import Title18Text from "../../resources/text/ui/title/title_18.text";
import Paragraph1Text from "../../resources/text/ui/paragraph/paragraph_1.text";
import Paragraph16Text from "../../resources/text/ui/paragraph/paragraph_16.text";
import Paragraph2Text from "../../resources/text/ui/paragraph/paragraph_2.text";
import Paragraph3Text from "../../resources/text/ui/paragraph/paragraph_3.text";
import Paragraph5Text from "../../resources/text/ui/paragraph/paragraph_5.text";
import Paragraph17Text from "../../resources/text/ui/paragraph/paragraph_17.text";
import Paragraph10Text from "../../resources/text/ui/paragraph/paragraph_10.text";
import Paragraph7Text from "../../resources/text/ui/paragraph/paragraph_7.text";
import Paragraph12Text from "../../resources/text/ui/paragraph/paragraph_12.text";
import Paragraph8Text from "../../resources/text/ui/paragraph/paragraph_8.text";
import Paragraph14Text from "../../resources/text/ui/paragraph/paragraph_14.text";
import Paragraph18Text from "../../resources/text/ui/paragraph/pargaraph_18.text";
import Paragraph9Text from "../../resources/text/ui/paragraph/paragraph_9.text";
import Paragraph13Text from "../../resources/text/ui/paragraph/paragraph_13.text";
import Paragraph4Text from "../../resources/text/ui/paragraph/paragraph_4.text";
import Paragraph6Text from "../../resources/text/ui/paragraph/paragraph_6.text";
import Paragraph11Text from "../../resources/text/ui/paragraph/paragraph_11.text";
import Paragraph15Text from "../../resources/text/ui/paragraph/paragraph_15.text";

interface Props {
  common: { name };
  position: any;
  base: {
    html: string;
    index: string;
    color: "";
  };
}

/**
 * 通过接收数据，返回不同的组件样式，纽带组件！！！（很重要）
 * @param data 数据
 * @returns {*}
 */
class RenderUI extends React.Component<Props, any> {
  render() {
    const { common, base } = this.props;
    let ui: object;
    switch (common.name) {
      //文本类
      case "ex_v_text":
        return (ui = <VTextUi html={base.html} />);
      case "ex_h_text":
        return (ui = <HTextUi html={base.html} />);
      // 标题
      case "title_1_text":
        return (ui = <Title1Text {...this.props} />);
      case "title_2_text":
        return (ui = <Title2Text {...this.props} />);
      case "title_3_text":
        return (ui = <Title3Text {...this.props} />);
      case "title_4_text":
        return (ui = <Title4Text {...this.props} />);
      case "title_5_text":
        return (ui = <Title5Text {...this.props} />);
      case "title_6_text":
        return (ui = <Title6Text {...this.props} />);
      case "title_7_text":
        return (ui = <Title7Text {...this.props} />);
      case "title_8_text":
        return (ui = <Title8Text {...this.props} />);
      case "title_9_text":
        return (ui = <Title9Text {...this.props} />);
      case "title_10_text":
        return (ui = <Title10Text {...this.props} />);
      case "title_11_text":
        return (ui = <Title11Text {...this.props} />);
      case "title_12_text":
        return (ui = <Title12Text {...this.props} />);
      case "title_13_text":
        return (ui = <Title13Text {...this.props} />);
      case "title_14_text":
        return (ui = <Title14Text {...this.props} />);
      case "title_15_text":
        return (ui = <Title15Text {...this.props} />);
      case "title_16_text":
        return (ui = <Title16Text {...this.props} />);
      case "title_17_text":
        return (ui = <Title17Text {...this.props} />);
      case "title_18_text":
        return (ui = <Title18Text {...this.props} />);

      // 段落
      case "paragraph_1_text":
        return (ui = <Paragraph1Text {...this.props} />);
      case "paragraph_2_text":
        return (ui = <Paragraph2Text {...this.props} />);
      case "paragraph_3_text":
        return (ui = <Paragraph3Text {...this.props} />);
      case "paragraph_4_text":
        return (ui = <Paragraph4Text {...this.props} />);
      case "paragraph_5_text":
        return (ui = <Paragraph5Text {...this.props} />);
      case "paragraph_6_text":
        return (ui = <Paragraph6Text {...this.props} />);
      case "paragraph_7_text":
        return (ui = <Paragraph7Text {...this.props} />);
      case "paragraph_8_text":
        return (ui = <Paragraph8Text {...this.props} />);
      case "paragraph_9_text":
        return (ui = <Paragraph9Text {...this.props} />);
      case "paragraph_10_text":
        return (ui = <Paragraph10Text {...this.props} />);
      case "paragraph_11_text":
        return (ui = <Paragraph11Text {...this.props} />);
      case "paragraph_12_text":
        return (ui = <Paragraph12Text {...this.props} />);
      case "paragraph_13_text":
        return (ui = <Paragraph13Text {...this.props} />);
      case "paragraph_14_text":
        return (ui = <Paragraph14Text {...this.props} />);
      case "paragraph_15_text":
        return (ui = <Paragraph15Text {...this.props} />);
      case "paragraph_16_text":
        return (ui = <Paragraph16Text {...this.props} />);
      case "paragraph_17_text":
        return (ui = <Paragraph17Text {...this.props} />);
      case "paragraph_18_text":
        return (ui = <Paragraph18Text {...this.props} />);
    }
    return <React.Fragment>{ui}</React.Fragment>;
  }
}

export default RenderUI;
