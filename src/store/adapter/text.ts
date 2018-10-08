interface oldData {
  customize: {
    type?: string;
    index_number?: string; // 编辑器赓续index_Number来更新内容
    name?: string;
    html_content?: string;
  };
  advance: {
    style_color?: string;
    color?: string;
    img?: string;
    crop_img?: string;
    img_config?: {
      stretching?: { value?: string };
      tiling?: { value?: string };
    };
    width?: number;
    height?: number;
    move?: boolean;
    left?: number;
    top?: number;
    rotate?: number;
    zIndex?: number;
    live?: boolean;
  };
}

const textAdapter = (oldData: oldData): object => {
  const common = {
    type: oldData.customize.type,
    name: nameAdapter(oldData.customize.name)
  };
  const base = {
    html: oldData.customize.html_content,
    index: oldData.customize.index_number,
    color: oldData.advance.style_color
  };
  const position = {
    width: oldData.advance.width,
    height: oldData.advance.height,
    left: oldData.advance.left,
    top: oldData.advance.top,
    rotate: oldData.advance.rotate,
    zIndex: oldData.advance.zIndex
  };
  return { common, base, position };
};

const nameAdapter = (var_name: string): string => {
  switch (var_name) {
    //模板
    case "vertical_text":
      return "ex_v_text";
    case "horizontal_text":
      return "ex_h_text";
    // 标题
    case "thirty_one_text":
      return "title_1_text";
    case "thirty_text":
      return "title_2_text";
    case "twenty_nine_text":
      return "title_3_text";
    case "twenty_eight_text":
      return "title_4_text";
    case "twenty_seven_text":
      return "title_5_text";
    case "text4":
      return "title_6_text";
    case "text3":
      return "title_7_text";
    case "text2":
      return "title_8_text";
    case "text1":
      return "title_9_text";
    case "text20":
      return "title_10_text";
    case "text19":
      return "title_11_text";
    case "text16":
      return "title_12_text";
    case "text13":
      return "title_13_text";
    case "text12":
      return "title_14_text";
    case "text_re_11":
      return "title_15_text";
    case "text10":
      return "title_16_text";
    case "text9":
      return "title_17_text";
    case "text8":
      return "title_18_text";

    // 段落
    case "text24":
      return "paragraph_1_text";
    case "text51":
      return "paragraph_2_text";
    case "text50":
      return "paragraph_3_text";
    case "text49":
      return "paragraph_4_text";
    case "text48":
      return "paragraph_5_text";
    case "text47":
      return "paragraph_6_text";
    case "text46":
      return "paragraph_7_text";
    case "text45":
      return "paragraph_8_text";
    case "text44":
      return "paragraph_9_text";
    case "text43":
      return "paragraph_10_text";
    case "text42":
      return "paragraph_11_text";
    case "text41":
      return "paragraph_12_text";
    case "text40":
      return "paragraph_13_text";
    case "text39":
      return "paragraph_14_text";
    case "text38":
      return "paragraph_15_text";
    case "text_re_37":
      return "paragraph_16_text";
    case "text36":
      return "paragraph_17_text";
    case "text35":
      return "paragraph_18_text";
  }
};

export default textAdapter;
