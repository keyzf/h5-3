import Mock, { Random } from "mockjs";

Mock.setup({
  timeout: 200
});

/**
 * 获取用户资源
 */
Mock.mock(`${window.location.origin}/Material/getUser`, "post", {
  error: 0,
  list: [
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述wfwqefwqefqwefqwfeweqffqw"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    }
  ],
  sum: 30
});

/**
 * 删除用户资源
 */
Mock.mock(`${window.location.origin}/Material/delUser`, "post", {
  error: 0,
  list: [
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "0.28.png"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "0.28.png"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    },
    {
      mid: Random.id(),
      url: Random.dataImage("200x100"),
      desc: "图片/音乐描述"
    }
  ],
  sum: 30
});

/**
 * 用户上传
 */
Mock.mock(`${window.location.origin}/Material/addUser`, "post", {
  error: 0,
  url: "http://src.e7wei.com/91126T63PR4R783.png"
});

/**
 * 音乐分类列表
 */
Mock.mock(`${window.location.origin}/Material/getSysType`, "post", {
  error: 0,
  list: [
    { tid: "9", typename: "治愈" },
    { tid: "8", typename: "商务" },
    { tid: "7", typename: "轻松" },
    { tid: "6", typename: "浪漫" },
    { tid: "5", typename: "节日" },
    { tid: "4", typename: "欢快" },
    { tid: "3", typename: "复古" },
    { tid: "2", typename: "动感" },
    { tid: "1", typename: "大气" }
  ]
});

/**
 * 系统数据
 */
Mock.mock(`${window.location.origin}/Material/getSys`, "post", {
  error: 0,
  list: [
    { url: "http://s.e7wei.com/811284QY8FA48F2.mp3", name: "奏响舞曲" },
    { url: "http://s.e7wei.com/811284QY8FA48F2.mp3", name: "奏响舞曲" },
    { url: "http://s.e7wei.com/811285359523452.mp3", name: "自然力量" },
    { url: "http://s.e7wei.com/81128P4QHT934LR.mp3", name: "重现旧时" },
    { url: "http://s.e7wei.com/81128EUR25E6588.mp3", name: "征服天堂" },
    { url: "http://s.e7wei.com/81128NCH79363V5.mp3", name: "印象深刻" },
    { url: "http://s.e7wei.com/81128X7V569Q45F.mp3", name: "夜半呼喊" },
    { url: "http://s.e7wei.com/81128KEG5K9BA99.mp3", name: "舞风之刃" },
    { url: "http://s.e7wei.com/81128E9N5M57V9S.mp3", name: "无坚不摧" },
    { url: "http://s.e7wei.com/8112886S39T985M.mp3", name: "文艺复兴" },
    { url: "http://s.e7wei.com/81128G8FA8A5WP9.mp3", name: "伟大史诗" }
  ],
  sum: 30
});

Mock.mock(`${window.location.origin}/view/getData?sid=3`, "get", {
  error: 0,
  info: {
    bg: JSON.stringify({
      common: {
        type: "background",
        name: "background"
      },
      base: {
        img: "",
        color: "white",
        height: 600
      }
    }),
    cover: "http://src.e7wei.com/0.644043773965004.png",
    desc: "",
    disable: "0",
    form: null,
    istemplate: "0",
    music: JSON.stringify({
      url: "http://prodect.oss-cn-beijing.aliyuncs.com/811286853R292E7.mp3",
      desc: "庆祝圣诞"
    }),
    open: "1",
    pv: "0",
    share: "0",
    sid: "47425",
    state: "1",
    time: "1544491641",
    title: "我的页面",
    type: "1",
    ui: JSON.stringify([
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p style="text-align:center;"><span style="padding-left:0px;padding-right:0px"><span style="color:#ad9491"><span style="line-height:normal"><span style="font-size:12px">──── </span><span style="font-size:18px">双旦节精选内购酒款</span><span style="font-size:12px">────</span></span></span></span></p>',
          index: "trmhUNA",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 322,
          height: 42,
          left: 0,
          top: 498,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p style="text-align:center;"><span style="padding-left:0px;padding-right:0px"><span style="line-height:normal"><span style="color:#977877"><span style="font-size:12px">────</span><span style="font-size:18px">自提货信息</span><span style="font-size:12px">────</span></span></span></span></p>',
          index: "DhB9lD5",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 318,
          height: 30,
          left: 1,
          top: 1869,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p style="text-align:center;"><span style="padding-left:0px;padding-right:0px"><span style="line-height:normal"><span style="color:#977877"><span style="font-size:12px">────</span><span style="font-size:18px">内购预约</span><span style="font-size:12px">────</span></span></span></span></p>',
          index: "1jpi8Of",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 318,
          height: 30,
          left: 0,
          top: 2128,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html: '<p style="text-align:center;"></p><p></p>',
          index: "xew8pOA",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 326,
          height: 45,
          left: -3,
          top: 265,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 0
        },
        base: {
          img: "http://src.e7wei.com/912207669W2B57D.png",
          crop: "http://src.e7wei.com/912207669W2B57D.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 78,
          height: 96,
          left: 15,
          top: 340,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 0
        },
        base: {
          img: "http://src.e7wei.com/909114X85DB86K7.png",
          crop: "http://src.e7wei.com/909114X85DB86K7.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 85,
          height: 83,
          left: 117,
          top: 333,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 0
        },
        base: {
          img: "http://src.e7wei.com/91220846889UD8R.png",
          crop: "http://src.e7wei.com/91220846889UD8R.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 57,
          height: 57,
          left: 232,
          top: 340,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p><span style="padding-left:0px;padding-right:0px"><span style="color:#947473">优良品种</span></span></p>',
          index: "UcrlWrH",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 66,
          height: 28,
          left: 19,
          top: 414,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p><span style="padding-left:0px;padding-right:0px"><span style="color:#947473">匠心种植</span></span></p>',
          index: "64DP5xa",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 66,
          height: 28,
          left: 128,
          top: 413,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p><span style="padding-left:0px;padding-right:0px"><span style="color:#947473">世代传承</span></span></p>',
          index: "G15uRr1",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 66,
          height: 28,
          left: 233,
          top: 414,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 0
        },
        base: {
          html:
            '<p style="text-align:left;"><span style="padding-left:0px;padding-right:0px"><span style="color:#632423"><span style="font-size:18px"><strong>ROB DOLAN</strong></span></span></span></p><p style="text-align:start;"><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">罗伯多兰精品酒庄</span></span></p><p></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">混酿葡萄酒</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">酒香泗溢</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">入口醇厚滑爽</span></span></p><p></p><p></p>',
          index: "egKpckd",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 182,
          height: 124,
          left: 129,
          top: 547,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 0
        },
        base: {
          html:
            '<p style="text-align:left;"><span style="padding-left:0px;padding-right:0px"><span style="color:#632423"><span style="font-size:18px"><strong>ROB DOLAN</strong></span></span></span></p><p style="text-align:start;"><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">罗伯多兰精品酒庄</span></span></p><p></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">黑标白中白起泡酒</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">回味无穷</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">酸甜可口</span></span></p>',
          index: "hM4tkJ0",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 192,
          height: 132,
          left: 16,
          top: 955,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 0
        },
        base: {
          html:
            '<p style="text-align:left;"><span style="padding-left:0px;padding-right:0px"><span style="color:#632423"><span style="font-size:18px"><strong>Maison Blue</strong></span></span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423"><span style="font-size:18px"><strong>美思庄</strong></span></span></span></p><p></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423"><span style="font-size:14px">麦克拉伦山谷出品</span></span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">无醇葡萄起泡果汁</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">100%葡萄原酿</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">果味香甜 酸甜可口</span></span></p>',
          index: "c4qxTXK",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 158,
          height: 133,
          left: 146,
          top: 1407,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 0
        },
        base: {
          img: "http://src.e7wei.com/912208252B84WUS.png",
          crop: "http://src.e7wei.com/912208252B84WUS.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 283,
          height: 250,
          left: 18,
          top: 677,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 0
        },
        base: {
          img: "http://src.e7wei.com/91220F86P94434F.png",
          crop: "http://src.e7wei.com/91220F86P94434F.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 289,
          height: 270,
          left: 14,
          top: 1091,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 0
        },
        base: {
          img: "http://src.e7wei.com/91220696544B794.png",
          crop: "http://src.e7wei.com/91220696544B794.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 289,
          height: 267,
          left: 11,
          top: 1535,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 62
        },
        base: {
          html:
            '<p><span style="font-size:20px"><strong><span style="color:#333333">饭公子的小酒肆</span></strong></span></p>',
          index: "T8QBDe0",
          color: "#d3cccb",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 320,
          height: 54,
          left: 1,
          top: 183,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 67
        },
        base: {
          html:
            '<p><span style="font-size:12px">提货地点：上海市黄浦区丽园路501号A7栋3楼</span></p>',
          index: "rZhgSmT",
          color: "#f5a623",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 304,
          height: 50,
          left: 8,
          top: 1909,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 71
        },
        base: {
          html:
            '<p><span style="font-size:12px">内购活动：2018年12月21日-12月30日</span></p>',
          index: "Cm4ip8M",
          color: "#4a4a4a",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 318,
          height: 68,
          left: -1,
          top: 274,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 75
        },
        base: {
          html:
            '<p><span style="font-size:12px"><span style="letter-spacing:0px">联系人：崔果果 18621820577</span></span></p><p><span style="font-size:12px"><span style="letter-spacing:0px">提货时间：周一-周五 9:00-17:30（双休日需预约） </span></span></p><p></p><p style="text-align:right;"></p>',
          index: "ioITTJO",
          color: "#f5a623",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 315,
          height: 95,
          left: 3,
          top: 1979,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 63
        },
        base: {
          html:
            '<p><strong><span style="color:#d35400"><span style="letter-spacing:2px"><span style="font-size:14px">还没开张 酒先内购</span></span></span></strong></p>',
          index: "poP9yKn",
          color: "#f5a623",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 317,
          height: 48,
          left: 1,
          top: 244,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "form",
          id: 0
        },
        base: {
          item: [
            {
              type: "name",
              title_color: "#000",
              opt_color: "#000",
              form_id: "jHkT5JJ",
              title: "姓名",
              decorator: "姓名",
              choose: false,
              option: "请输入姓名"
            },
            {
              type: "phone",
              title_color: "#000",
              opt_color: "#000",
              form_id: "jXuMWLy",
              title: "手机",
              decorator: "手机",
              choose: false,
              option: "请输入手机号"
            },
            {
              type: "datePicker",
              title_color: "#000",
              opt_color: "#000",
              form_id: "b6fhMg7",
              title: "提货时间",
              decorator: "日期选择",
              choose: true,
              option: ""
            },
            {
              type: "input",
              title_color: "#000",
              opt_color: "#000",
              form_id: "vNtYR0D",
              title: "内购码",
              decorator: "input",
              choose: true,
              option: "请填写您的内购码"
            },
            {
              type: "checkbox",
              title_color: "#000",
              opt_color: "#000",
              form_id: "T8z7rXu",
              title: "内购酒品",
              decorator: "checkbox",
              choose: true
            },
            {
              type: "input",
              title_color: "#000",
              opt_color: "#000",
              form_id: "Cyd8QMI",
              title: "备注",
              decorator: "input",
              choose: true,
              option: "请备注每款酒的购买数量"
            }
          ],
          desc: "预约提交",
          font_color: "white",
          bg_color: "#f5a623",
          date: "3000-12-13"
        },
        position: {
          width: 300,
          height: 670,
          left: 9,
          top: 2159,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p style="text-align:center;"><strong><span style="font-size:14px">澳洲严选  精品酒庄</span></strong></p>',
          index: "0P3iMXY",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 140,
          height: 31,
          left: 98,
          top: 472,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p style="text-align:center;"><strong><span style="font-size:14px">澳洲严选  精品酒庄</span></strong></p>',
          index: "twTI5v3",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 140,
          height: 31,
          left: 98,
          top: 472,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p style="text-align:left;"><span style="text-decoration:line-through"><span style="font-size:12px"><strong>原价：178元</strong></span></span></p>',
          index: "eOCwM4V",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 85,
          height: 27,
          left: 221,
          top: 926,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p style="text-align:left;"><span style="text-decoration:line-through"><span style="font-size:12px"><strong>原价：188元</strong></span></span></p>',
          index: "3IzoVc9",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 85,
          height: 27,
          left: 226,
          top: 1360,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p style="text-align:left;"><span style="text-decoration:line-through"><span style="font-size:12px"><strong>原价：88元</strong></span></span></p>',
          index: "SDRM5xj",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 85,
          height: 27,
          left: 217,
          top: 1800,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p style="text-align:center;"><span style="font-size:12px"><span style="letter-spacing:0px"><span style="line-height:1">活动最终解释权归澳多米莱商贸发展（上海）有限公司</span></span></span></p>',
          index: "ETxSwW2",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 326,
          height: 23,
          left: -4,
          top: 2840,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 0
        },
        base: {
          img: "http://src.e7wei.com/9122055W2638YUB.jpeg",
          crop: "http://src.e7wei.com/9122055W2638YUB.jpeg",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 316,
          height: 221,
          left: 2,
          top: 0,
          rotate: 0,
          zIndex: 100
        }
      }
    ]),
    uid: "364533",
    version: "2"
  },
  self: 1,
  url: Random.url()
});

Mock.mock(`${window.location.origin}/Create/getData?sid=3`, "get", {
  error: 0,
  info: {
    bg: "",
    cover: "http://src.e7wei.com/0.644043773965004.png",
    desc: "",
    disable: "0",
    form: null,
    istemplate: "0",
    music: "",
    open: "1",
    pv: "0",
    share: "0",
    sid: "47425",
    state: "1",
    time: "1544491641",
    title: "我的页面",
    type: "1",
    ui: JSON.stringify([
      {
        customize: {
          type: "text",
          index_number: "trmhUNA",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:center;"><span style="padding-left:0px;padding-right:0px"><span style="color:#ad9491"><span style="line-height:normal"><span style="font-size:12px">──── </span><span style="font-size:18px">双旦节精选内购酒款</span><span style="font-size:12px">────</span></span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 322,
          left: 0,
          height: 42,
          live: false,
          move: true,
          crop_img: "",
          top: 498,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "DhB9lD5",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:center;"><span style="padding-left:0px;padding-right:0px"><span style="line-height:normal"><span style="color:#977877"><span style="font-size:12px">────</span><span style="font-size:18px">自提货信息</span><span style="font-size:12px">────</span></span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 318,
          left: 1,
          height: 30,
          live: false,
          move: true,
          crop_img: "",
          top: 1869,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "1jpi8Of",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:center;"><span style="padding-left:0px;padding-right:0px"><span style="line-height:normal"><span style="color:#977877"><span style="font-size:12px">────</span><span style="font-size:18px">内购预约</span><span style="font-size:12px">────</span></span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 318,
          left: 0,
          height: 30,
          live: false,
          move: true,
          crop_img: "",
          top: 2128,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "xew8pOA",
          name: "horizontal_text",
          html_content: '<p style="text-align:center;"></p><p></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 326,
          left: -3,
          height: 45,
          live: false,
          move: true,
          crop_img: "",
          top: 265,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/912207669W2B57D.png",
              crop_img: "http://src.e7wei.com/912207669W2B57D.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: {
                stretching: { value: "" },
                tiling: { value: "" }
              }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 78,
          left: 15,
          height: 96,
          move: true,
          crop_img: "",
          top: 340,
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/909114X85DB86K7.png",
              crop_img: "http://src.e7wei.com/909114X85DB86K7.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: {
                stretching: { value: "" },
                tiling: { value: "" }
              }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 85,
          left: 117,
          height: 83,
          move: true,
          crop_img: "",
          top: 333,
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91220846889UD8R.png",
              crop_img: "http://src.e7wei.com/91220846889UD8R.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: {
                stretching: { value: "" },
                tiling: { value: "" }
              }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 57,
          left: 232,
          height: 57,
          move: true,
          crop_img: "",
          top: 340,
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "UcrlWrH",
          name: "horizontal_text",
          html_content:
            '<p><span style="padding-left:0px;padding-right:0px"><span style="color:#947473">优良品种</span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 66,
          left: 19,
          height: 28,
          live: false,
          move: true,
          crop_img: "",
          top: 414,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "64DP5xa",
          name: "horizontal_text",
          html_content:
            '<p><span style="padding-left:0px;padding-right:0px"><span style="color:#947473">匠心种植</span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 66,
          left: 128,
          height: 28,
          live: false,
          move: true,
          crop_img: "",
          top: 413,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "G15uRr1",
          name: "horizontal_text",
          html_content:
            '<p><span style="padding-left:0px;padding-right:0px"><span style="color:#947473">世代传承</span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 66,
          left: 233,
          height: 28,
          live: false,
          move: true,
          crop_img: "",
          top: 414,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "egKpckd",
          name: "vertical_text",
          html_content:
            '<p style="text-align:left;"><span style="padding-left:0px;padding-right:0px"><span style="color:#632423"><span style="font-size:18px"><strong>ROB DOLAN</strong></span></span></span></p><p style="text-align:start;"><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">罗伯多兰精品酒庄</span></span></p><p></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">混酿葡萄酒</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">酒香泗溢</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">入口醇厚滑爽</span></span></p><p></p><p></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 182,
          left: 129,
          height: 124,
          live: false,
          move: true,
          crop_img: "",
          top: 547,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "hM4tkJ0",
          name: "vertical_text",
          html_content:
            '<p style="text-align:left;"><span style="padding-left:0px;padding-right:0px"><span style="color:#632423"><span style="font-size:18px"><strong>ROB DOLAN</strong></span></span></span></p><p style="text-align:start;"><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">罗伯多兰精品酒庄</span></span></p><p></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">黑标白中白起泡酒</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">回味无穷</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">酸甜可口</span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 192,
          left: 16,
          height: 132,
          live: false,
          move: true,
          crop_img: "",
          top: 955,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "c4qxTXK",
          name: "vertical_text",
          html_content:
            '<p style="text-align:left;"><span style="padding-left:0px;padding-right:0px"><span style="color:#632423"><span style="font-size:18px"><strong>Maison Blue</strong></span></span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423"><span style="font-size:18px"><strong>美思庄</strong></span></span></span></p><p></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423"><span style="font-size:14px">麦克拉伦山谷出品</span></span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">无醇葡萄起泡果汁</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">100%葡萄原酿</span></span></p><p><span style="padding-left:0px;padding-right:0px"><span style="color:#632423">果味香甜 酸甜可口</span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 158,
          left: 146,
          height: 133,
          live: false,
          move: true,
          crop_img: "",
          top: 1407,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/912208252B84WUS.png",
              crop_img: "http://src.e7wei.com/912208252B84WUS.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: {
                stretching: { value: "" },
                tiling: { value: "" }
              }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 283,
          left: 18,
          height: 250,
          move: true,
          crop_img: "",
          top: 677,
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91220F86P94434F.png",
              crop_img: "http://src.e7wei.com/91220F86P94434F.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: {
                stretching: { value: "" },
                tiling: { value: "" }
              }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 289,
          left: 14,
          height: 270,
          move: true,
          crop_img: "",
          top: 1091,
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91220696544B794.png",
              crop_img: "http://src.e7wei.com/91220696544B794.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: {
                stretching: { value: "" },
                tiling: { value: "" }
              }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 289,
          left: 11,
          height: 267,
          move: true,
          crop_img: "",
          top: 1535,
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "T8QBDe0",
          name: "twenty_nine_text",
          html_content:
            '<p><span style="font-size:20px"><strong><span style="color:#333333">饭公子的小酒肆</span></strong></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 320,
          left: 1,
          height: 54,
          live: false,
          move: true,
          crop_img: "",
          top: 183,
          style_color: "#d3cccb",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "rZhgSmT",
          name: "text2",
          html_content:
            '<p><span style="font-size:12px">提货地点：上海市黄浦区丽园路501号A7栋3楼</span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 304,
          left: 8,
          height: 50,
          live: false,
          move: true,
          crop_img: "",
          top: 1909,
          style_color: "#f5a623",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "Cm4ip8M",
          name: "text16",
          html_content:
            '<p><span style="font-size:12px">内购活动：2018年12月21日-12月30日</span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 318,
          left: -1,
          height: 68,
          live: false,
          move: true,
          crop_img: "",
          top: 274,
          style_color: "#4a4a4a",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "ioITTJO",
          name: "text10",
          html_content:
            '<p><span style="font-size:12px"><span style="letter-spacing:0px">联系人：崔果果 18621820577</span></span></p><p><span style="font-size:12px"><span style="letter-spacing:0px">提货时间：周一-周五 9:00-17:30（双休日需预约） </span></span></p><p></p><p style="text-align:right;"></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 315,
          left: 3,
          height: 95,
          live: false,
          move: true,
          crop_img: "",
          top: 1979,
          style_color: "#f5a623",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "poP9yKn",
          name: "twenty_eight_text",
          html_content:
            '<p><strong><span style="color:#d35400"><span style="letter-spacing:2px"><span style="font-size:14px">还没开张 酒先内购</span></span></span></strong></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 317,
          left: 1,
          height: 48,
          live: false,
          move: true,
          crop_img: "",
          top: 244,
          style_color: "#f5a623",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "form",
          types: "报名",
          name: "form",
          item: [
            {
              type: "name",
              title_color: "#000",
              opt_color: "#000",
              form_id: "jHkT5JJ",
              title: { value: "姓名" },
              decorator: "姓名",
              choose: false,
              option: { value: "请输入姓名" }
            },
            {
              type: "phone",
              title_color: "#000",
              opt_color: "#000",
              form_id: "jXuMWLy",
              title: { value: "手机" },
              decorator: "手机",
              choose: false,
              option: { value: "请输入手机号" }
            },
            {
              type: "datePicker",
              title_color: "#000",
              opt_color: "#000",
              form_id: "b6fhMg7",
              title: { value: "提货时间" },
              decorator: "日期选择",
              choose: true,
              option: { value: "" }
            },
            {
              type: "input",
              title_color: "#000",
              opt_color: "#000",
              form_id: "vNtYR0D",
              title: { value: "内购码" },
              decorator: "input",
              choose: true,
              option: { value: "请填写您的内购码" }
            },
            {
              type: "checkbox",
              title_color: "#000",
              opt_color: "#000",
              form_id: "T8z7rXu",
              title: { value: "内购酒品" },
              decorator: "checkbox",
              choose: true,
              option: [
                "1. Rob Dolan混酿干红葡萄酒",
                "2. Rob Dolan黑标白中白起泡酒",
                "3. 美思庄无醇红葡萄气泡果汁"
              ]
            },
            {
              type: "input",
              title_color: "#000",
              opt_color: "#000",
              form_id: "Cyd8QMI",
              title: { value: "备注" },
              decorator: "input",
              choose: true,
              option: { value: "请备注每款酒的购买数量" }
            }
          ],
          btn_content: { value: "预约提交" },
          btn_color: "white",
          btn_bg_color: "#f5a623"
        },
        advance: {
          color: "",
          img: "",
          width: 300,
          left: 9,
          height: 670,
          live: false,
          move: false,
          crop_img: "",
          top: 2159,
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "0P3iMXY",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:center;"><strong><span style="font-size:14px">澳洲严选  精品酒庄</span></strong></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 140,
          left: 98,
          height: 31,
          live: false,
          move: true,
          crop_img: "",
          top: 472,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "twTI5v3",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:center;"><strong><span style="font-size:14px">澳洲严选  精品酒庄</span></strong></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 140,
          left: 98,
          height: 31,
          live: false,
          move: true,
          crop_img: "",
          top: 472,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "eOCwM4V",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:left;"><span style="text-decoration:line-through"><span style="font-size:12px"><strong>原价：178元</strong></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 85,
          left: 221,
          height: 27,
          live: false,
          move: true,
          crop_img: "",
          top: 926,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "3IzoVc9",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:left;"><span style="text-decoration:line-through"><span style="font-size:12px"><strong>原价：188元</strong></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 85,
          left: 226,
          height: 27,
          live: false,
          move: true,
          crop_img: "",
          top: 1360,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "SDRM5xj",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:left;"><span style="text-decoration:line-through"><span style="font-size:12px"><strong>原价：88元</strong></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 85,
          left: 217,
          height: 27,
          live: false,
          move: true,
          crop_img: "",
          top: 1800,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "ETxSwW2",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:center;"><span style="font-size:12px"><span style="letter-spacing:0px"><span style="line-height:1">活动最终解释权归澳多米莱商贸发展（上海）有限公司</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 326,
          left: -4,
          height: 23,
          live: false,
          move: true,
          crop_img: "",
          top: 2840,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/9122055W2638YUB.jpeg",
              crop_img: "http://src.e7wei.com/9122055W2638YUB.jpeg",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: {
                stretching: { value: "" },
                tiling: { value: "" }
              }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 316,
          left: 2,
          height: 221,
          move: true,
          crop_img: "",
          top: 0,
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      }
    ]),
    uid: "364533",
    version: "1"
  },
  url: Random.url()
});
