const TextData:any = [];

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
   <p style="text-align:center;font-size: 14px">点一下可以进行删除等操作</p>
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
    height: 100,
    wordArt: "http://src.e7wei.com/910164RJY4FH78H.png",
    html: ``,
    id: 2
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910165W297256JP.png",
    html: ``,
    id: 3
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910163MA646M53L.png",
    html: ``,
    id: 4
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016M72SHTY55W.png",
    html: ``,
    id: 5
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016VK7487M97R.png",
    html: ``,
    id: 6
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016845448D94J.png",
    html: ``,
    id: 7
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910167997P5SP2M.png",
    html: ``,
    id: 8
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/9101685F727UC55.png",
    html: ``,
    id: 9
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/9101626HS9EJD9B.png",
    html: ``,
    id: 10
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016326296XD77.png",
    html: ``,
    id: 11
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/91016HU2AX659MP.png",
    html: ``,
    id: 12
  },
  {
    color: ``,
    height: 100,
    wordArt: "http://src.e7wei.com/910162945Y58A86.png",
    html: ``,
    id: 13
  },
  {
    color: ``,
    height: 100,
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
      height: data.height,
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
      height: data.height,
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
      height: data.height,
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
      height: data.height,
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
      height: data.height,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

export default TextData;
