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
        id: nameAdapter(oldData.customize.name)
    };
    const base = {
        html: oldData.customize.html_content,
        index: oldData.customize.index_number,
        color: oldData.advance.style_color,
        wordArt: "",
        link:{type:"choose",url:''},
    };
    const position = {
        width: oldData.advance.width,
        height: oldData.advance.height,
        left: oldData.advance.left,
        top: oldData.advance.top,
        rotate: oldData.advance.rotate,
        zIndex: oldData.advance.zIndex
    };
    return {common, base, position};
};

const nameAdapter = (var_name: string): number => {
    switch (var_name) {
        //模板
        case "vertical_text":
            return 0;
        case "horizontal_text":
            return 1;
        // 标题
        case "thirty_one_text":
            return 60;
        case "thirty_text":
            return 61;
        case "twenty_nine_text":
            return 62;
        case "twenty_eight_text":
            return 63;
        case "twenty_seven_text":
            return 64;
        case "text4":
            return 65;
        case "text3":
            return 66;
        case "text2":
            return 67;
        case "text1":
            return 68;
        case "text20":
            return 69;
        case "text19":
            return 70;
        case "text16":
            return 71;
        case "text13":
            return 72;
        case "text12":
            return 73;
        case "text_re_11":
            return 74;
        case "text10":
            return 75;
        case "text9":
            return 76;
        case "text8":
            return 77;

        // 段落
        case "text24":
            return 78;
        case "text51":
            return 79;
        case "text50":
            return 80;
        case "text49":
            return 81;
        case "text48":
            return 82;
        case "text47":
            return 83;
        case "text46":
            return 84;
        case "text45":
            return 85;
        case "text44":
            return 86;
        case "text43":
            return 87;
        case "text42":
            return 88;
        case "text41":
            return 89;
        case "text40":
            return 90;
        case "text39":
            return 91;
        case "text38":
            return 92;
        case "text_re_37":
            return 93;
        case "text36":
            return 94;
        case "text35":
            return 95;
    }
};

export default textAdapter;
