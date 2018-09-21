export const $$horizontal_text = (index): object => {
  const common = {
    type: "text",
    name: "horizontal_text",
    move: false
  };
  const base = {
    html: `<p style="text-align:center;font-size: 25px">横排文本示例</p>
   <p style="text-align:center;font-size: 14px">点左侧组件可以添加新内容</p>
   <p style="text-align:center;font-size: 14px">点一下可以进行删除等操作</p>
 `,
    index: index,
    color: ""
  };
  const position = {
    width: 300,
    height: 206,
    left: 0,
    top: 0,
    rotate: 0,
    zIndex: 100
  };

  return { common, base, position };
};
export const $$vertical_text = (index): object => {
  const common = {
    type: "text",
    name: "vertical_text",
    move: false
  };
  const base = {
    html: `<p style="text-align:center;font-size: 25px">竖排文本示例</p><p style="text-align:center;font-size: 20px">元日</p><p style="text-align:center;font-size: 14px">爆竹声中一岁除<br/>春风送暖入屠苏<br/>千门万户曈曈日<br/>总把新桃换旧符</p><br/><br/>`,
    index: index,
    color: ""
  };
  const position = {
    width: 300,
    height: 206,
    left: 0,
    top: 0,
    rotate: 0,
    zIndex: 100
  };

  return { common, base, position };
};


