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
        height: 3000
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
          type: "picture",
          id: 0
        },
        base: {
          img: "http://src.e7wei.com/90911R38N4C59K8.png",
          crop: "http://src.e7wei.com/90911R38N4C59K8.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 324,
          height: 507,
          left: -2,
          top: -1,
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
            '<p style="text-align:center;"><span style="color:#ffffff"><span style="line-height:24"><strong><span style="font-size:16px">大会嘉宾 / </span><span style="font-size:18px">Guests</span></strong></span></span></p>',
          index: "TzVZFFg",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 32,
          left: 9,
          top: 686,
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
            '<p style="text-align:center;"><span style="color:#ffffff"><span style="line-height:24"><strong><span style="font-size:16px">大会流程 / Schedule</span></strong></span></span></p>',
          index: "menPKzf",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 32,
          left: 70,
          top: 1050,
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
            '<p style="text-align:center;"><strong><span style="font-size:20px"><span style="color:#ffffff">      2019平坦适年年会</span></span></strong></p><p style="text-align:center;"><span style="letter-spacing:1px"><strong><span style="color:#ffffff"><span style="font-size:28px">翻.转2019</span></span></strong></span><br/></p><p style="text-align:center;"><span style="font-size:24px"><span style="letter-spacing:1px"><strong><span style="color:#ffffff">——翻新篇，转未来</span></strong></span></span> </p><p style="text-align:center;"><span style="color:#ffffff"><strong><span style="font-size:18px"><span style="letter-spacing:1px">翻新专业服务  转运品质未来</span></span></strong></span></p><p></p><p style="text-align:center;"><span style="color:#ffffff"><span style="font-size:16px"><strong>ANNUAL MEETING OF PENTENS </strong></span></span></p><p style="text-align:center;"><span style="color:#ffffff"><span style="font-size:16px"><strong>DISTRICT ON 2019</strong></span></span></p><p style="text-align:center;"><br/></p><p style="text-align:center;"><span style="color:#ffffff">广东·东莞</span></p><p style="text-align:center;"><span style="color:#ffffff">2019年1月19日</span></p><p style="text-align:center;"><span style="color:#ffffff"><span style="color:#9742ca">－</span><span style="background-color:#262573">DONGGUAN  2018 Jan.19</span><span style="color:#9742ca">－</span></span></p><p style="text-align:center;"><br/></p><p style="text-align:center;"><br/></p><p style="text-align:center;"><br/></p><p style="text-align:center;"><br/></p><p style="text-align:center;"><br/></p><p style="text-align:center;"><br/></p><p style="text-align:center;"><br/></p><p></p>',
          index: "rAlHsZ1",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 324,
          height: 340,
          left: -5,
          top: 46,
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
            '<p><strong><span style="color:#c48b41">尊敬的                      先生/女士：</span></strong></p><p> </p><p><strong><span style="color:#c48b41">      蔽司玆定于   2019    年   1   月   19   日在   大岭山帝京酒店三楼2号宴会厅   举办   </span></strong></p><p><strong><span style="color:#c48b41">“翻.转2019——翻新篇，转未来（翻新专业服务，转动品质未来）”2019平坦适中国区年会，我们真诚欢迎您的光临！</span></strong></p><p></p><p><strong><span style="color:#c48b41">年会流程：      17:30点——入场</span></strong></p><p><strong><span style="color:#c48b41">                        18:00点——大会致辞</span></strong></p><p><strong><span style="color:#c48b41">                        18:10  点——晚宴</span></strong></p><p style="text-align:right;"><strong><span style="color:#c48b41">此致  </span></strong></p><p style="text-align:right;"><strong><span style="color:#c48b41">                                                                                                  广东平坦适环保材料有限公司</span></strong></p><p style="text-align:right;"><strong><span style="color:#c48b41">                          2019年01月03日</span></strong></p><p style="text-align:right;"></p>',
          index: "prEJbtY",
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 271,
          height: 335,
          left: 26,
          top: 523,
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
          html: "<p></p>",
          index: "EptDnMH",
          color: "#fff10c",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 40,
          left: 52,
          top: 46,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 1
        },
        base: [
          {
            img: "http://src.e7wei.com/100103QV24C592WT.jpg",
            crop: "http://src.e7wei.com/100103QV24C592WT.jpg",
            link: {
              type: "choose",
              url: ""
            },
            openness: 0,
            radius: 0,
            color: ""
          },
          {
            img: "http://src.e7wei.com/10010364FU45AKH2.jpg",
            crop: "http://src.e7wei.com/10010364FU45AKH2.jpg",
            link: {
              type: "choose",
              url: ""
            },
            openness: 0,
            radius: 0,
            color: ""
          },
          {
            img: "http://src.e7wei.com/100103F25JB64G63.jpg",
            crop: "http://src.e7wei.com/100103F25JB64G63.jpg",
            link: {
              type: "choose",
              url: ""
            },
            openness: 0,
            radius: 0,
            color: ""
          },
          {
            img: "http://src.e7wei.com/1001035CCNR2DT77.jpg",
            crop: "http://src.e7wei.com/1001035CCNR2DT77.jpg",
            link: {
              type: "choose",
              url: ""
            },
            openness: 0,
            radius: 0,
            color: ""
          }
        ],
        position: {
          width: 322,
          height: 180,
          left: -2,
          top: 845,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 44
        },
        base: {
          html: "",
          index: "3dquFLd",
          color: "",
          wordArt: "http://src.e7wei.com/91016D9697TJ34T.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 200,
          left: 10,
          top: 1684,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 44
        },
        base: {
          html: "",
          index: "bSrNF42",
          color: "",
          wordArt: "http://src.e7wei.com/91016D9697TJ34T.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 200,
          left: 10,
          top: 1684,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 44
        },
        base: {
          html: "",
          index: "19Xd3Uu",
          color: "",
          wordArt: "http://src.e7wei.com/91016D9697TJ34T.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 200,
          left: 10,
          top: 1684,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 44
        },
        base: {
          html: "",
          index: "A6p1zjy",
          color: "",
          wordArt: "http://src.e7wei.com/91016D9697TJ34T.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 200,
          left: 10,
          top: 1684,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 44
        },
        base: {
          html: "",
          index: "S9TbmbS",
          color: "",
          wordArt: "http://src.e7wei.com/91016D9697TJ34T.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 200,
          left: 10,
          top: 1684,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 39
        },
        base: {
          html: "",
          index: "PgGUtY5",
          color: "",
          wordArt: "http://src.e7wei.com/91016XW4WV2P555.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 200,
          left: 10,
          top: 1684,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 37
        },
        base: {
          html: "",
          index: "iZ7oOuD",
          color: "",
          wordArt: "http://src.e7wei.com/91016H8TPPA7356.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 200,
          left: 10,
          top: 1684,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 44
        },
        base: {
          html: "",
          index: "pN5DkiE",
          color: "",
          wordArt: "http://src.e7wei.com/91016D9697TJ34T.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 200,
          left: 10,
          top: 1684,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 44
        },
        base: {
          html: "",
          index: "p4GumgW",
          color: "",
          wordArt: "http://src.e7wei.com/91016D9697TJ34T.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 200,
          left: 10,
          top: 1684,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 44
        },
        base: {
          html: "",
          index: "QxdrWo6",
          color: "",
          wordArt: "http://src.e7wei.com/91016D9697TJ34T.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 200,
          left: 10,
          top: 1684,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 1
        },
        base: [
          {
            img: "http://src.e7wei.com/100103PH5688S657.png",
            crop: "http://src.e7wei.com/100103PH5688S657.png",
            link: {
              type: "choose",
              url: ""
            },
            openness: 0,
            radius: 0,
            color: ""
          }
        ],
        position: {
          width: 327.25757575757575,
          height: 168.92,
          left: -5,
          top: 342,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 85
        },
        base: {
          html:
            '<p><span style="color:#ffffff">平坦适成立于1993年，专业且知名的建材供应者。生产并销售地板系统，水性树脂建筑材料、防水材料、结构补强材料、隔热涂料、防腐材料和高强度环氧树脂材料。其产品广泛地运用于民用及土木、建造工程业界，公司已通过ISO9001 ISO14001双认证。</span></p><p><span style="color:#ffffff">Pentens以为顾客提供品质服务，为遍及世界各地的合作伙伴提供创新的、高性能的建材产品以及有价值的服务、应用专长和解决方案为使命，满足遍及世界各地的合作伙伴的不同合作需求，有针对性的给合作伙伴提供资源和支持，确保合作伙伴与我们一起持续发展以共同实现客户价值。</span><span style="color:#2aaa0e">2019年，公司推动新战略，旨在通过翻新专业服务，转动品质未来，领航绿色建材市场新未来。</span></p><p></p>',
          index: "MM684UQ",
          color: "#7880c8",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 670,
          left: 9,
          top: 1066,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 65
        },
        base: {
          html:
            '<p style="text-align:center;">2019平坦适中国区年会——我们真诚欢迎您的光临！</p>',
          index: "VEb5O3c",
          color: "#4f36ce",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 300,
          height: 200,
          left: 6,
          top: 1011,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 1
        },
        base: [
          {
            img: "http://src.e7wei.com/1001035J5J2E5J57.jpg",
            crop: "http://src.e7wei.com/1001035J5J2E5J57.jpg",
            link: {
              type: "choose",
              url: ""
            },
            openness: 0,
            radius: 0,
            color: ""
          }
        ],
        position: {
          width: 329,
          height: 265,
          left: -8,
          top: 1451,
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
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/909143J6D96A2P4.png",
              crop_img: "http://src.e7wei.com/909143J6D96A2P4.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 306,
          left: 7,
          height: 282,
          move: true,
          crop_img: "",
          top: 7,
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
              img: "http://src.e7wei.com/90914GJMVD5GGC7.png",
              crop_img: "http://src.e7wei.com/90914GJMVD5GGC7.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 229,
          left: 43,
          height: 61,
          move: true,
          crop_img: "",
          top: -3,
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
              img: "http://src.e7wei.com/90914E62277WF79.png",
              crop_img: "http://src.e7wei.com/90914E62277WF79.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 202,
          left: 64,
          height: 57,
          move: true,
          crop_img: "",
          top: 33,
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
              img: "http://src.e7wei.com/90914D694C3K338.png",
              crop_img: "http://src.e7wei.com/90914D694C3K338.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 182,
          left: -2,
          height: 152,
          move: true,
          crop_img: "",
          top: -1,
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
              img: "http://src.e7wei.com/90914XQ6H855738.png",
              crop_img: "http://src.e7wei.com/90914XQ6H855738.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 15,
          left: 35,
          height: 38,
          move: true,
          crop_img: "",
          top: 42,
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
              img: "http://src.e7wei.com/909144C958XT7G3.png",
              crop_img: "http://src.e7wei.com/909144C958XT7G3.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 10,
          left: 280,
          height: 42,
          move: true,
          crop_img: "",
          top: 95,
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
              img: "http://src.e7wei.com/912249Y9W5G24MU.JPG",
              crop_img: "http://src.e7wei.com/912249Y9W5G24MU.JPG",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 137,
          left: 380,
          height: 136,
          move: true,
          crop_img: "",
          top: 97,
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
              img: "http://src.e7wei.com/90914T9P69NKG4U.png",
              crop_img: "http://src.e7wei.com/90914T9P69NKG4U.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            },
            {
              img: "http://src.e7wei.com/91224E9555R8856.JPG",
              crop_img: "http://src.e7wei.com/91224E9555R8856.JPG"
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 132,
          left: -168,
          height: 144,
          move: true,
          crop_img: "",
          top: 71,
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
              img: "http://src.e7wei.com/90914R3A2T763VJ.png",
              crop_img: "http://src.e7wei.com/90914R3A2T763VJ.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 321,
          left: -1,
          height: 1093,
          move: true,
          crop_img: "",
          top: 269,
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
              img: "http://src.e7wei.com/90914R3A2T763VJ.png",
              crop_img: "http://src.e7wei.com/90914R3A2T763VJ.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 321,
          left: 0,
          height: 1093,
          move: true,
          crop_img: "",
          top: 669,
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
              img: "http://src.e7wei.com/90914PUK73B796P.png",
              crop_img: "http://src.e7wei.com/90914PUK73B796P.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 63,
          left: 4,
          height: 93,
          move: true,
          crop_img: "",
          top: 272,
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
              img: "http://src.e7wei.com/90914476647EMHC.png",
              crop_img: "http://src.e7wei.com/90914476647EMHC.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 271,
          left: 25,
          height: 1029,
          move: true,
          crop_img: "",
          top: 293,
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
              img: "http://src.e7wei.com/90914476647EMHC.png",
              crop_img: "http://src.e7wei.com/90914476647EMHC.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 271,
          left: 25,
          height: 1029,
          move: true,
          crop_img: "",
          top: 682,
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
              img: "http://src.e7wei.com/9091449F7X376NQ.png",
              crop_img: "http://src.e7wei.com/9091449F7X376NQ.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 256,
          left: 32,
          height: 1011,
          move: true,
          crop_img: "",
          top: 302,
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
              img: "http://src.e7wei.com/9091449F7X376NQ.png",
              crop_img: "http://src.e7wei.com/9091449F7X376NQ.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 256,
          left: 32,
          height: 1011,
          move: true,
          crop_img: "",
          top: 692,
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
              img: "http://src.e7wei.com/90914384863HT5C.png",
              crop_img: "http://src.e7wei.com/90914384863HT5C.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 36,
          left: 288,
          height: 73,
          move: true,
          crop_img: "",
          top: 258,
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
              img: "http://src.e7wei.com/90914RK673964Y4.png",
              crop_img: "http://src.e7wei.com/90914RK673964Y4.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 18,
          left: 47,
          height: 40,
          move: true,
          crop_img: "",
          top: 305,
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
              img: "http://src.e7wei.com/90914RK673964Y4.png",
              crop_img: "http://src.e7wei.com/90914RK673964Y4.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 18,
          left: 47,
          height: 40,
          move: true,
          crop_img: "",
          top: 505,
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
              img: "http://src.e7wei.com/90914RK673964Y4.png",
              crop_img: "http://src.e7wei.com/90914RK673964Y4.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 18,
          left: 50,
          height: 40,
          move: true,
          crop_img: "",
          top: 1272,
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
              img: "http://src.e7wei.com/90914RK673964Y4.png",
              crop_img: "http://src.e7wei.com/90914RK673964Y4.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 18,
          left: 49,
          height: 40,
          move: true,
          crop_img: "",
          top: 1499,
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "x7KV37N",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:center;"><strong><span style="font-size:18px">关于我们</span></strong></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 103,
          left: 31,
          height: 29,
          live: false,
          move: true,
          crop_img: "",
          top: 320,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "6eAdZXS",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:center;"><strong><span style="font-size:18px"><span style="color:#07a9fe">热招职位（男女不限）</span></span></strong></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 254,
          left: 28,
          height: 30,
          live: false,
          move: true,
          crop_img: "",
          top: 524,
          style_color: "#4a90e2",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "u2y6MUN",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:center;"><strong><span style="font-size:18px"><span style="color:#07a9fe">福利待遇</span></span></strong></p><p><strong><span style="font-size:12px">                            要么你业绩第一能力出众</span></strong></p><p><strong><span style="font-size:12px">                            要么你勤劳忠心服务大众</span></strong></p><p><strong><span style="font-size:12px">                       店长会把你捧在手中、装进心中！</span></strong></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 265,
          left: 10,
          height: 89,
          live: false,
          move: true,
          crop_img: "",
          top: 1251,
          style_color: "#d0021b",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "XB5Zcpi",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:center;"><strong><span style="font-size:18px"><span style="color:#07a9fe">联系我们</span></span></strong></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 103,
          left: 31,
          height: 29,
          live: false,
          move: true,
          crop_img: "",
          top: 1511,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "EwRQfhw",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#07a9fe">欧阳美业三角坪时尚店</span>，是一家私人发型定制、健康养发护发的专业店，其中项目以烫染设计为主导，以剪发、洗护、接发为根本，真正我们做到服务以技术为核心全心全意为您服务，让你消费舒心、放心。<span style="color:#07a9fe">地址在怀化三角坪一中红绿灯路口往三医院方向50米处榆市路190号。</span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 235,
          left: 46,
          height: 175,
          live: false,
          move: true,
          crop_img: "",
          top: 347,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "jsrnzn6",
          name: "horizontal_text",
          html_content:
            '<p>职位要求：</p><p><strong><span style="font-size:18px">☆一：</span><span style="color:#07a9fe"><span style="font-size:16px">发型设计师</span></span><span style="font-size:18px">（1名）</span></strong></p><p><span style="font-size:12px">1、具有良好形象、细心、耐心，具有2年以上工作经验或在本地有一定铁粉的工作者者优先；</span></p><p><span style="font-size:12px">2、有空杯好学的心态，掌握一定摄影、了解新媒体特点，熟悉微博、微信、抖音，具备一定的线上线下活动推广经验。</span></p><p><span style="font-size:12px">3、具有快速的时尚信息收集、整合能力。</span></p><p><span style="font-size:12px">4、较好的团队协作精神，高度的责任心，做事细致、缜密，正能量爆棚者优先。</span> </p><p><span style="font-size:20px">☆</span><strong>二：<span style="font-size:16px">  <span style="color:#07a9fe">编外发型师 </span></span>  （8名）</strong></p><p>1、可带顾客来本店做项目，自己可当天结算现金分成（具体可详谈）</p><p>2、无需按正常上班、专门做自己的预约客人即可          </p><p><strong>☆三：<span style="color:#07a9fe"><span style="font-size:16px">编外业务员</span></span>（不限名额）</strong></p><p> 1、介绍顾客来本店消费，只要是顾客说是您介绍或者你自己找前台或店长登记，即刻返还被介绍顾客当日消费的10％作为您的福利</p><p> </p><p></p><p></p><p> </p>'
        },
        advance: {
          color: "",
          img: "",
          width: 243,
          left: 38,
          height: 439,
          live: false,
          move: true,
          crop_img: "",
          top: 618,
          style_color: "#50e3c2",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "Bz4U4HZ",
          name: "horizontal_text",
          html_content:
            '<p>职位要求：</p><p>1、 洗护师：正能量、勤劳无需你吃苦，<span style="font-size:12px">服从管理积极向上者优先</span></p><p>2、 烫染师：<span style="font-size:12px">1年以上工作先计效果者优先经验、能独立完成发型师设计要求者优先。</span></p><p>3、学徒 ：<span style="font-size:12px">真心 热爱美发、服从管理、勤劳刻苦、积极好学、感恩爱心者优先</span></p><p></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 236,
          left: 37,
          height: 148,
          live: false,
          move: true,
          crop_img: "",
          top: 1109,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "8ex0KM0",
          name: "horizontal_text",
          html_content:
            "<p>1、不低于行业标准的薪资水平，具体情况根据个人能力面议。</p><p>2、入职即签订合同</p><p>3、丰富的团建活动，吃住等不限量供应；</p><p>4、合理的涨薪制度，优秀员工更有股权激励；</p><p>5、按自己预约休假，想去哪就去哪！</p>"
        },
        advance: {
          color: "",
          img: "",
          width: 235,
          left: 41,
          height: 171,
          live: false,
          move: true,
          crop_img: "",
          top: 1342,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "dwtbpKc",
          name: "horizontal_text",
          html_content:
            '<p>Tel：<strong><span style="color:#07a9fe">18897482172</span></strong></p><p><span style="color:#07a9fe">微信</span>：18897482172</p>'
        },
        advance: {
          color: "",
          img: "",
          width: 235,
          left: 47,
          height: 48,
          live: false,
          move: true,
          crop_img: "",
          top: 1537,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "8EJemYM",
          name: "horizontal_text",
          html_content:
            '<p><strong><span style="color:#07a9fe">发型设计师</span>  （1名）</strong></p><p><strong><span style="color:#07a9fe">编外发型师</span>  （8名）</strong></p><p><strong><span style="color:#07a9fe">编外业务员</span> （不限人数）</strong></p><p></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 211,
          left: 81,
          height: 60,
          live: false,
          move: true,
          crop_img: "",
          top: 555,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "osW4xP7",
          name: "horizontal_text",
          html_content:
            '<p><strong><span style="color:#07a9fe">洗护师</span>（2名）</strong></p><p><strong><span style="color:#07a9fe">烫染师</span>（1名）</strong></p><p><strong><span style="color:#07a9fe">学徒</span>（5名）</strong></p><p></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 189,
          left: 122,
          height: 69,
          live: false,
          move: true,
          crop_img: "",
          top: 1055,
          style_color: "#000000",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "JDdKrN9",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#ffffff"><strong><span style="font-size:16px">1</span></strong></span></p><p></p><p></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 53,
          left: 27,
          height: 28,
          live: false,
          move: true,
          crop_img: "",
          top: 566,
          style_color: "",
          zIndex: 104,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "M8m8ECP",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#ffffff"><strong><span style="font-size:16px">2</span></strong></span></p><p></p><p></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 54,
          left: 53,
          height: 41,
          live: false,
          move: true,
          crop_img: "",
          top: 1059,
          style_color: "",
          zIndex: 104,
          rotate: 143,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/90914W9FUW8YF45.png",
              crop_img: "http://src.e7wei.com/90914W9FUW8YF45.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 21,
          left: 49,
          height: 48,
          move: true,
          crop_img: "",
          top: 579,
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
              img: "http://src.e7wei.com/90914W9FUW8YF45.png",
              crop_img: "http://src.e7wei.com/90914W9FUW8YF45.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 25,
          left: 69,
          height: 48,
          move: true,
          crop_img: "",
          top: 1065,
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
              img: "http://src.e7wei.com/91224E9555R8856.JPG",
              crop_img: "http://src.e7wei.com/91224E9555R8856.JPG",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 64,
          left: 94,
          height: 114,
          move: true,
          crop_img: "",
          top: 1580,
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
              img: "http://src.e7wei.com/90914384863HT5C.png",
              crop_img: "http://src.e7wei.com/90914384863HT5C.png",
              title: { value: "图片备注" },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 } }
        },
        advance: {
          color: "",
          img: "",
          width: 37,
          left: -5,
          height: 95,
          move: true,
          crop_img: "",
          top: 1692,
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "img",
          name: "carousel_img",
          item: [
            {
              img: "http://src.e7wei.com/912249Y9W5G24MU.JPG",
              crop_img:
                "http://src.e7wei.com/912249Y9W5G24MU.JPG?imageMogr2/crop/!402.5777777777778x400a0a2.7777777777777777",
              title: { value: "轮播图" },
              content: {
                value:
                  "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
              },
              link: { value: "" },
              radius: {
                value: 13,
                name: "radius",
                touched: true,
                dirty: false
              },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            },
            {
              img: "http://src.e7wei.com/912244J6576A6Q8.jpg",
              crop_img:
                "http://src.e7wei.com/912244J6576A6Q8.jpg?imageMogr2/crop/!2025.0666666666668x2103.4666666666667a309.79999999999967a90.66666666666667",
              title: { value: "轮播图" },
              content: {
                value:
                  "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            },
            {
              img: "http://src.e7wei.com/912243UFT8K2Y57.JPG",
              crop_img: "http://src.e7wei.com/912243UFT8K2Y57.JPG",
              title: { value: "轮播图" },
              content: {
                value:
                  "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            },
            {
              img: "http://src.e7wei.com/91224WJQ6959792.JPG",
              crop_img:
                "http://src.e7wei.com/91224WJQ6959792.JPG?imageMogr2/crop/!966x864a438a72",
              title: { value: "轮播图" },
              content: {
                value:
                  "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 }, font_color: "#FFF" }
        },
        advance: {
          color: "",
          img: "",
          width: 309,
          left: 3,
          height: 165,
          move: true,
          crop_img: "",
          top: 84,
          zIndex: 100,
          rotate: 0,
          content_color: "",
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "img",
          name: "carousel_img",
          item: [
            {
              img: "http://src.e7wei.com/912249Y9W5G24MU.JPG",
              crop_img:
                "http://src.e7wei.com/912249Y9W5G24MU.JPG?imageMogr2/crop/!355.35555555555555x436.11111111111114a10.044444444444405a13.88888888888889",
              title: { value: "轮播图" },
              content: {
                value:
                  "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
              },
              link: { value: "" },
              radius: {
                value: 17,
                name: "radius",
                touched: true,
                dirty: false
              },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            },
            {
              img: "http://src.e7wei.com/912244J6576A6Q8.jpg",
              crop_img:
                "http://src.e7wei.com/912244J6576A6Q8.jpg?imageMogr2/crop/!2315.2000000000003x2139.7333333333336a255.39999999999964a72.53333333333333",
              title: { value: "轮播图" },
              content: {
                value:
                  "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            },
            {
              img: "http://src.e7wei.com/912243UFT8K2Y57.JPG",
              crop_img:
                "http://src.e7wei.com/912243UFT8K2Y57.JPG?imageMogr2/crop/!1268.7222222222222x1329.411111111111a110.63333333333321a53.53333333333333",
              title: { value: "轮播图" },
              content: {
                value:
                  "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            },
            {
              img: "http://src.e7wei.com/91224WJQ6959792.JPG",
              crop_img:
                "http://src.e7wei.com/91224WJQ6959792.JPG?imageMogr2/crop/!1464x810a162a162",
              title: { value: "轮播图" },
              content: {
                value:
                  "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
              },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: false,
          base: { show_element: {}, layout: { value: 0 }, font_color: "#FFF" }
        },
        advance: {
          color: "",
          img: "",
          width: 225,
          left: 49,
          height: 192,
          move: true,
          crop_img: "",
          top: 74,
          zIndex: 100,
          rotate: 0,
          content_color: "",
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "Pcaku2i",
          name: "text20",
          html_content:
            '<p><strong><span style="color:#07a9fe">欧阳美业时尚店招兵买马</span></strong></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 292,
          left: 27,
          height: 42,
          live: false,
          move: true,
          crop_img: "",
          top: 287,
          style_color: "#9013fe",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "button",
          name: "btn_re_5",
          btn_url: { value: "" },
          shadow: {},
          bg_color: "transparent",
          radius: {},
          content: { value: "" },
          font_color: "white"
        },
        advance: {
          color: "",
          img: "http://src.e7wei.com/0.36788814909137724.png",
          width: 152,
          left: -253,
          height: 49,
          live: false,
          move: true,
          crop_img: "http://src.e7wei.com/0.36788814909137724.png",
          top: 1695,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: true } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "kkmqIze",
          name: "thirty_text",
          html_content: "你看到的是一个标题"
        },
        advance: {
          color: "",
          img: "",
          width: 300,
          left: -454,
          height: 50,
          live: false,
          move: true,
          crop_img: "",
          top: 187,
          style_color: "rgb(0,214,205)",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "RVO7XM4",
          name: "text19",
          html_content: "<span style='color:white'>输入标题</span>"
        },
        advance: {
          color: "",
          img: "",
          width: 292,
          left: -713,
          height: 175,
          live: false,
          move: true,
          crop_img: "",
          top: 735,
          style_color: "#f58fc6",
          zIndex: 100,
          rotate: 0,
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "2ccOXib",
          name: "text16",
          html_content: "火柴杆"
        },
        advance: {
          color: "",
          img: "",
          width: 292,
          left: -517,
          height: 175,
          live: false,
          move: true,
          crop_img: "",
          top: 112.5,
          style_color: "#f96e57",
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
