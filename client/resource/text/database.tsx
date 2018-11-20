const TextData = [];

/**
 * @desc  text 核心组件数据
 */
const core = [
  {
    id: 1,
    color: "white",
    wordArt: "",
    height: 206,
    html: `<p style="text-align:center;font-size: 25px">竖排文本示例</p><p style="text-align:center;font-size: 20px">元日</p><p style="text-align:center;font-size: 14px">爆竹声中一岁除<br/>春风送暖入屠苏<br/>千门万户曈曈日<br/>总把新桃换旧符</p><br/><br/>`
  },
  {
    id: 2,
    color: "white",
    height: "206",
    wordArt: "",
    html: `<p style="text-align:center;font-size: 25px">横排文本示例</p>
   <p style="text-align:center;font-size: 14px">点左侧组件可以添加新内容</p>
   <p style="text-align:center;font-size: 14px">点一下可以进行删除等操作</p>
 `
  }
];
core.map((data) => {
  TextData.push({
    common: {
      type: "text",
      id: data.id
    },
    base: {
      html: data.html,
      index: "",
      color: data.color,
      wordArt: data.wordArt,
      link: { type: "choose", url: "" }
    },
    position: {
      width: 300,
      height: data.height,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

export default TextData;


