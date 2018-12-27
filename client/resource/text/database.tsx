const TextData: any = [];

/**
 * @desc  text 核心组件数据
 */
const core = [
  {
    id: 0,
    color: "white",
    wordArt: "",
    height: 206,
    html: `<p style="text-align:center;font-size: 25px">竖排文本示例</p><p style="text-align:center;font-size: 20px">元日</p><p style="text-align:center;font-size: 14px">爆竹声中一岁除<br/>春风送暖入屠苏<br/>千门万户曈曈日<br/>总把新桃换旧符</p><br/><br/>`
  },
  {
    id: 1,
    color: "white",
    height: "206",
    wordArt: "",
    html: `<p style="text-align:center;font-size: 25px">横排文本示例</p>
   <p style="text-align:center;font-size: 14px">点左侧组件可以添加新内容</p>
   <p style="text-align:center;font-size: 14px">点右键可以进行删除等操作</p>
 `
  }
];
core.map(data => {
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

// 招聘2-14
const recruitment = [
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/910164RJY4FH78H.png",
    html: ``,
    id: 2
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/910165W297256JP.png",
    html: ``,
    id: 3
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/910163MA646M53L.png",
    html: ``,
    id: 4
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/91016M72SHTY55W.png",
    html: ``,
    id: 5
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/91016VK7487M97R.png",
    html: ``,
    id: 6
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/91016845448D94J.png",
    html: ``,
    id: 7
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/910167997P5SP2M.png",
    html: ``,
    id: 8
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/9101685F727UC55.png",
    html: ``,
    id: 9
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/9101626HS9EJD9B.png",
    html: ``,
    id: 10
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/91016326296XD77.png",
    html: ``,
    id: 11
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/91016HU2AX659MP.png",
    html: ``,
    id: 12
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/910162945Y58A86.png",
    html: ``,
    id: 13
  },
  {
    color: ``,
    height: 200,
    wordArt: "http://src.e7wei.com/91016XQ6DBR5F5L.png",
    html: ``,
    id: 14
  }
];
recruitment.map(data => {
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

// 促销16-23
const promotion = [
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910164JSQB67CJA.png",
    html: ``,
    id: 15
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/9101685DFF6W4TJ.png",
    html: ``,
    id: 16
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016DG8S95YNU3.png",
    html: ``,
    id: 17
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910164958647764.png",
    html: ``,
    id: 18
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910164FR6GD7N4G.png",
    html: ``,
    id: 19
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/9101634435VN6T8.png",
    html: ``,
    id: 20
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016HDVG68F5XG.png",
    html: ``,
    id: 21
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016Y27F9947QC.png",
    html: ``,
    id: 22
  }
];
promotion.map(data => {
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
      height: 320,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

// 节日促销24-33
const festival = [
  {
    id: 23,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016M3J7K93DNG.png",
    html: ``
  },
  {
    id: 24,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/9101689E898MY9A.png",
    html: ``
  },
  {
    id: 25,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910166YY25B8983.png",
    html: ``
  },
  {
    id: 26,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910168875H3748B.png",
    html: ``
  },
  {
    id: 27,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016S4834CCH84.png",
    html: ``
  },
  {
    id: 28,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910164SL884QLNV.png",
    html: ``
  },
  {
    id: 29,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016F25BR2CJJY.png",
    html: ``
  },
  {
    id: 30,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910168G72H65VF3.png",
    html: ``
  },
  {
    id: 31,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/9101676Y96Q4W38.png",
    html: ``
  },
  {
    id: 32,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/9101626584DU5P6.png",
    html: ``
  }
];
festival.map(data => {
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
      height: 350,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

//  商务 34-37
const business = [
  {
    id: 33,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910164FT587664V.png",
    html: ``
  },
  {
    id: 34,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016C48NRA6QK5.png",
    html: ``
  },
  {
    id: 35,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910166M7968AXD5.png",
    html: ``
  },
  {
    id: 36,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910166J43QA92E6.png",
    html: ``
  }
];
business.map(data => {
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
      height: 200,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

//  邀请函38-48
const invitation = [
  {
    id: 37,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016H8TPPA7356.png",
    html: ``
  },
  {
    id: 38,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016253L46D755.png",
    html: ``
  },
  {
    id: 39,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016XW4WV2P555.png",
    html: ``
  },
  {
    id: 40,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016JY6SESU734.png",
    html: ``
  },
  {
    id: 41,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016L7R48GN8KT.png",
    html: ``
  },
  {
    id: 42,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016S43GE3739E.png",
    html: ``
  },
  {
    id: 43,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910165J42J96656.png",
    html: ``
  },
  {
    id: 44,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016D9697TJ34T.png",
    html: ``
  },
  {
    id: 45,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016C7MTQF45K7.png",
    html: ``
  },
  {
    id: 46,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016438Y72X7K4.png",
    html: ``
  },
  {
    id: 47,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910169328356K82.png",
    html: ``
  }
];
invitation.map(data => {
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
      height: 200,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

//  招生 49-60
const enrollment = [
  {
    id: 48,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/9101685N7LG96GX.png",
    html: ``
  },
  {
    id: 49,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910164VBD3TX95S.png",
    html: ``
  },
  {
    id: 50,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/9101647BV87B7YG.png",
    html: ``
  },
  {
    id: 51,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910165572956335.png",
    html: ``
  },
  {
    id: 52,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016495W332DY9.png",
    html: ``
  },
  {
    id: 53,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016YRT64F9J57.png",
    html: ``
  },
  {
    id: 54,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016L76459UB5A.png",
    html: ``
  },
  {
    id: 55,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016C8373W724A.png",
    html: ``
  },
  {
    id: 56,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/9101697H35K2472.png",
    html: ``
  },
  {
    id: 57,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910164N558556HU.png",
    html: ``
  },
  {
    id: 58,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910162H4QGTPAGE.png",
    html: ``
  },
  {
    id: 59,
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016CV26TA7Y6F.png",
    html: ``
  }
];
enrollment.map(data => {
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
      height: 350,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

// 排版 60-95
const typesetting = [
  {
    id: 60,
    color: `rgb(0,161,159)`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 61,
    color: "rgb(0,214,205)",
    height: 50,
    wordArt: "",
    html: `你看到的是一个标题`
  },
  {
    id: 62,
    color: `rgb(0,161,159)`,
    height: 50,
    wordArt: "",
    html: `你看到的是一个标题`
  },
  {
    id: 63,
    color: `rgb(0,214,205)`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 64,
    color: `yellow`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 65,
    color: `#4f36ce`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 66,
    color: `#1e9be8`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 67,
    color: `#7880c8`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 68,
    color: `#76e57b`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 69,
    color: `#76e57b`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 70,
    color: `#f58fc6`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 71,
    color: `#f96e57`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 72,
    color: `#57d9ff`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 73,
    color: `#ff8c00`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 74,
    color: `#f05454`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 75,
    color: `#fff10c`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 76,
    color: `#57d9ff`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 77,
    color: `#ff8c00`,
    height: 50,
    wordArt: "",
    html: `请输入标题`
  },
  {
    id: 78,
    color: `#ebe6d9`,
    height: 282,
    wordArt: "",
    html: `天堑无涯，绿杨陌上多离别，墙花路人暗想浮生`
  },
  {
    id: 79,
    color: `#1e9be8`,
    height: 282,
    wordArt: "",
    html: `乌云蔽月，人迹踪绝，说不出如斯寂寞。`
  },
  {
    id: 80,
    color: `#33ebe4`,
    height: 282,
    wordArt: "",
    html: `正如年年岁岁花相似，岁岁年年人不同。只道是不悔梦归处，只恨太匆匆。`
  },
  {
    id: 81,
    color: `#33ebe4`,
    height: 282,
    wordArt: "",
    html: `一身覆雪，雪洗风尘。凝视旷野，雪落无言。心灵沉静如冬`
  },
  {
    id: 82,
    color: `#f58fc6`,
    height: 282,
    wordArt: "",
    html: `从生命的开始，见到第一缕阳光，你就一直在我身旁，和我一起成长，一起历经人生的酸甜苦辣，有时颓废，有时忧伤，你都沉默的拍拍我的肩膀；有时快乐，有时幸福，你都会飞扬的随着我手舞足蹈。`
  },
  {
    id: 83,
    color: `#f58fc6`,
    height: 282,
    wordArt: "",
    html: `开满朝颜的晚秋，我可以卸掉一身倦怠，独自踏上旅途。趁晚秋未晚，我伴疏雨，轻车铁轨，我临窗静候，看车窗物景移变，幻出迷离异芒，织成一道道流光，弹落我心蒙蒙咸埃……唯有静候。晚秋。疏雨。入梦而来。`
  },
  {
    id: 84,
    color: `#57d9ff`,
    height: 282,
    wordArt: "",
    html: `人世间有太多的情感与归宿我们不能把握，构成了命运的不确定与爱情的不可求。在这个浮华掠影幻梦破灭的年代，对于爱情、事业、青春与梦想，我们通常只能默然相守，寂静求欢。`
  },
  {
    id: 85,
    color: `#7880c8`,
    height: 282,
    wordArt: "",
    html: `说谎和沉默可以说是现在人类社会里日渐蔓延的两大罪恶。事实上，我们经常说谎，动不动就沉默不语。——村上春树《且听风吟》`
  },
  {
    id: 86,
    color: `#33ebe4`,
    height: 282,
    wordArt: "",
    html: `站在高高的神坛上，俯瞰人生，没看到世间其乐融融，只看到哀思遍地，忧伤漫天，美丽如雪般凋零，淡漠如烟般飘散。`
  },
  {
    id: 87,
    color: `#76e57b`,
    height: 282,
    wordArt: "",
    html: `转身，一缕冷香远，逝雪深，笑意浅。来世你渡我，可愿？`
  },
  {
    id: 88,
    color: `#f05454`,
    height: 282,
    wordArt: "",
    html: `我曾听人说过，当你不能够再拥有，你唯一可以做的，就是令自己不要忘记。——《东邪西毒》`
  },
  {
    id: 89,
    color: `#76e57b`,
    height: 282,
    wordArt: "",
    html: `我微笑着看你来的方向，并不意味着我快乐，不眠夜，馨香若兰的气息，是对影似水的柔情`
  },
  {
    id: 90,
    color: `#f87a7a`,
    height: 282,
    wordArt: "",
    html: `真切的生活，真心的笑容，真挚的情感，真情的流露。面对真实，我无须掩饰。`
  },
  {
    id: 91,
    color: `#57d9ff`,
    height: 282,
    wordArt: "",
    html: `秋夜冷峻云烟，渐次消褪，淡淡的月色，透过密集摇叶的缝隙，洒下斑驳的光点。摇曳着月影的婆娑，忽明忽暗，遥指苍穹，蓝色的天幕上散落着点点寒星。月色在灵动的云层间游弋，忽隐忽现、瞬息万变，呈现出无限的遐想..`
  },
  {
    id: 92,
    color: `#76e57b`,
    height: 282,
    wordArt: "",
    html: `夜未央，流星落，情已殇。爱在夜色里永远是传奇`
  },
  {
    id: 93,
    color: `#33ebe4`,
    height: 282,
    wordArt: "",
    html: `天堑无涯，绿杨陌上多离别，墙花路人暗想浮生。`
  },
  {
    id: 94,
    color: `#f05454`,
    height: 282,
    wordArt: "",
    html: `一身覆雪，雪洗风尘。凝视旷野，雪落无言。心灵沉静如冬。`
  },
  {
    id: 95,
    color: `#57d9ff`,
    height: 282,
    wordArt: "",
    html: ` 染火枫林，琼壶歌月，长歌倚楼。岁岁年年，花前月下，一尊芳酒。水落红莲，唯闻玉磬，但此情依旧。`
  }
];
typesetting.map(data => {
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
      height: 200,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

export default TextData;
