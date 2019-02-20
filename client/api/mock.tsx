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
  sum: "350"
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
          type: "text",
          id: 1
        },
        base: {
          html:
            '<p><strong><span style="color:#191919"><span style="font-size:18px">一起回顾</span></span></strong></p><p><strong><span style="color:#191919"><span style="font-size:14px">2018年我们取得的成绩</span></span></strong></p><p><span style="font-size:14px"><span style="color:#191919">2018，阳光校园平台全年交易流量</span></span> <span style="font-size:14px"><span style="color:#191919"><strong>3亿</strong></span></span></p><p><span style="font-size:14px"><span style="color:#191919">订单数量</span></span> <span style="font-size:14px"><span style="color:#191919"><strong>20万张</strong></span></span></p><p><span style="font-size:14px"><span style="color:#191919">服务学校</span></span> <span style="font-size:14px"><span style="color:#191919"><strong>208家</strong></span></span></p><p><span style="font-size:14px"><span style="color:#191919">服务学生数达</span></span> <span style="font-size:14px"><span style="color:#191919"><strong>25万人</strong></span></span></p><p><strong><span style="color:#191919"><span style="font-size:14px">上线城市：贵阳</span></span></strong></p><p><span style="font-size:14px"><strong><span style="color:#191919">即将上线省市：海南、江西、广西</span></strong></span> </p><p></p><p style="text-align:left;"></p><p></p><p></p>',
          index: 0.8477692774178625,
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 302,
          height: 235,
          left: 15,
          top: 323,
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
          img: "http://src.e7wei.com/0.5787581350175046.png",
          crop: "http://src.e7wei.com/0.5787581350175046.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 326,
          height: 318,
          left: -2,
          top: -2,
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
          img: "http://src.e7wei.com/0.9179775550369829.png",
          crop: "http://src.e7wei.com/0.9179775550369829.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 297,
          height: 232,
          left: 9,
          top: 20,
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
          img: "http://src.e7wei.com/0.3450422325195559.png",
          crop: "http://src.e7wei.com/0.3450422325195559.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 158,
          height: 115,
          left: 138,
          top: 133,
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
          img: "http://src.e7wei.com/0.2759344987063723.png",
          crop: "http://src.e7wei.com/0.2759344987063723.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 116,
          height: 24,
          left: 8,
          top: 327,
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
            '<p><strong><span style="color:#191919"><span style="font-size:18px">一起回顾</span></span></strong></p><p><strong><span style="color:#191919"><span style="font-size:14px">2018年我们取得的成绩</span></span></strong></p><p><span style="font-size:14px"><span style="color:#191919">2018，阳光校园平台全年交易流量</span></span> <span style="font-size:14px"><span style="color:#191919"><strong>3亿</strong></span></span></p><p><span style="font-size:14px"><span style="color:#191919">订单数量</span></span> <span style="font-size:14px"><span style="color:#191919"><strong>20万张</strong></span></span></p><p><span style="font-size:14px"><span style="color:#191919">服务学校</span></span> <span style="font-size:14px"><span style="color:#191919"><strong>208家</strong></span></span></p><p><span style="font-size:14px"><span style="color:#191919">服务学生数达</span></span> <span style="font-size:14px"><span style="color:#191919"><strong>25万人</strong></span></span></p><p><strong><span style="color:#191919"><span style="font-size:14px">上线城市：贵阳</span></span></strong></p><p><span style="font-size:14px"><strong><span style="color:#191919">即将上线省市：海南、江西、广西</span></strong></span> </p><p></p><p style="text-align:left;"></p><p></p><p></p>',
          index: 0.8477692774178625,
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 302,
          height: 235,
          left: 15,
          top: 323,
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
          img: "http://src.e7wei.com/0.2759344987063723.png",
          crop: "http://src.e7wei.com/0.2759344987063723.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 131,
          height: 26,
          left: -5,
          top: 516,
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
            '<p style="text-align:left;"><span style="font-size:18px"><strong>平台作用</strong></span></p><p></p><p></p><p></p>',
          index: 0.567768377577611,
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 132,
          height: 34,
          left: 10,
          top: 514,
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
            '<p><strong><span style="font-size:16px">政    府---高效管理工具</span></strong></p><p><strong><span style="font-size:16px">校    园---法制建设工具</span></strong></p><p><strong><span style="font-size:16px">家    长---缴费维权工具</span></strong></p><p><strong><span style="font-size:16px">供应商---服务保护工具</span></strong></p>',
          index: 0.3427280070734904,
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 298,
          height: 141,
          left: 71,
          top: 580,
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
          img: "http://src.e7wei.com/0.2759344987063723.png",
          crop: "http://src.e7wei.com/0.2759344987063723.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 124,
          height: 26,
          left: 31,
          top: 1894,
          rotate: 0,
          zIndex: 101
        }
      },
      {
        common: {
          type: "text",
          id: 1
        },
        base: {
          html:
            '<h2 style="text-align:center;"></h2><p></p><p><span style="font-size:16px">· 优惠券</span></p>',
          index: 0.508879407249994,
          color: "",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 80,
          height: 31,
          left: 54,
          top: 1015,
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
          img: "http://src.e7wei.com/0.9449393633731356.png",
          crop: "http://src.e7wei.com/0.9449393633731356.png",
          link: {
            type: "web",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 43,
          height: 46,
          left: 202,
          top: 1889,
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
              form_id: "PQbQmbT",
              title: "企业名称",
              decorator: "姓名",
              choose: false,
              option: "请输入姓名"
            },
            {
              type: "phone",
              title_color: "#000",
              opt_color: "#000",
              form_id: "0YrhgH7",
              title: "联系方式",
              decorator: "手机",
              choose: false,
              option: "请输入电话"
            },
            {
              type: "textarea",
              form_id: "O8EYkdd",
              title_color: "#000",
              opt_color: "#000",
              title: "意见留言",
              choose: false,
              decorator: "备注",
              option: "请填写备注"
            }
          ],
          desc: "提交",
          font_color: "white",
          bg_color: "#bd10e0",
          date: "3000-12-13"
        },
        position: {
          width: 300,
          height: 377,
          left: 16,
          top: 2325,
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
            '<p><strong><span style="color:#333333">供应商们：</span></strong></p><p style="text-indent:2em;"><strong><span style="color:#333333">您们好！</span></strong><br/> <span style="color:#333333">不断发展壮大的阳光校园平台至今已经成功跨越一个多年头了，在阳光校园营运团队的努力下，在广大入驻供应商的大力支持下，在全新的校园代收费模式市场化的征程中，我们克服一个又一个困难，终于在互联网领域中创造出了我们共同的天地！</span></p><p style="text-indent:2em;"><span style="color:#333333">我们怀着感恩之情，对入驻的供应商们表示最诚挚的谢意！阳光校园平台设计的初衷侧重于校园法制建设和交易资金安全的保障，故平台操作过程也存在着一些不尽如人意的细节与不足。2019为了能更好地为关联用户（上级主管单位、学校、家长、供应商）提供最简洁、最人性化的服务。经过一段时间的积极筹备，新版的阳光校园平台将以APP的形式于2019年2月20日与大家见面。新平台APP以更加人性化的体验令人耳目一新，各方的服务功能也得到进一步的完善。请各位供应们在体验新平台所带来服务的同时，也给平台提出批评意见与改良建议，让我们共同成长！</span></p><p style="text-indent:2em;"><span style="color:#333333">2019年下学年平台服务供应商的初步计划：</span></p><p style="text-indent:2em;"><span style="color:#333333">1.新年后组织新平台上线使用讲解，现场教会各位使用新版平台后台操作，并上线项目；</span></p><p style="text-indent:2em;"><span style="color:#333333">2.2019年3月起由平台食品安全员与供应商组成员到每家供餐企业进行实地走访，听取供餐企业意见和建议，指出企业存在的法律风险、合规风险、经营风险和食品安全风险的问题加以完善，并保留车间照片等，以谈一谈心的方式进行；</span></p><p style="text-indent:2em;"><span style="color:#333333">3.邀请食品药品监督部门对供供餐企业校园餐饮配送规范进行指导；</span></p><p style="text-indent:2em;"><span style="color:#333333">4.恰当配合供餐企业做好餐费的催收、核对、请假退款、确认（待定）的及时性工作。新平台每个学校都有本校信息发布通道，我平台可以在每月月底最后五天连续发布“未缴XX月餐费的学生家长你好，请于XX月3号前补缴餐费，4号供餐将严格依照阳光校园平台数据供餐，不用餐或已缴费的家长请忽视本信息”，以此达到帮助供餐企业催收的作用。</span></p><p style="text-indent:2em;"><span style="color:#333333">以上只是平台的初步计划，以后的运行中还需要各位大力的配合以及提出宝贵意见，在新的一年里谱写辉煌！</span></p><p>        在此祝福各位新年快乐！生意兴隆！阖家幸福！ </p><p style="text-indent:2em;"> </p><p style="text-indent:2em;"> <span style="color:#333333">您的港湾：阳光校园平台</span></p><p></p><p></p><p><span style="font-size:18px"><span style="color:#000000"><strong>供餐中的温馨提示</strong></span></span></p><p></p><p></p><p><strong>太辣</strong>：低年级学生的中餐一般不用放辣椒；</p><p>保<strong>温</strong>：随着季节的变化，菜品保温很重要；</p><p><strong>餐盒不合格</strong>：不能用一次性用品；</p><p><strong>吃不饱</strong>：无加餐点的设置或是设置得不合理；</p><p><strong>吃出虫子</strong>：多数是因为不便清洗的菜里发现，例如：西蓝花、辣椒、豇豆等；</p><p><strong>不营养</strong>：注意饮食的合理搭配，如：韭菜含农药量较高不适宜做给学生吃。更不要给学生发津威、火腿肠等不健康的食物；制作的红烧肉用猪头肉、送炒饭、用速冻鸡肉、油炸食品等家长们很反感。</p><p><strong>送餐不卫生不规范</strong>：无封条、随意摆放在地上不卫生。</p><p>注：许多小学生家长反映餐费涨了，但是周五很多学校有水果、牛奶、面包发放，为什么某些学校没有。</p>',
          index: 0.3427280070734904,
          color: "#ffffff",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 275,
          height: 1555,
          left: 25,
          top: 778,
          rotate: 0,
          zIndex: 98
        }
      },
      {
        common: {
          type: "picture",
          id: 0
        },
        base: {
          img: "http://src.e7wei.com/100130E5V6L634QV.jpg",
          crop: "http://src.e7wei.com/100130E5V6L634QV.jpg",
          link: {
            type: "choose",
            url: ""
          },
          openness: 0,
          radius: 0,
          color: ""
        },
        position: {
          width: 59,
          height: 60.999999999999986,
          left: 28,
          top: 35.00000000000001,
          rotate: 0,
          zIndex: 102
        }
      },
      {
        common: {
          type: "text",
          id: 33
        },
        base: {
          html: "",
          index: "QN7sISA",
          color: "",
          wordArt: "http://src.e7wei.com/910164FT587664V.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 268,
          height: 187,
          left: 55,
          top: -31,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 40
        },
        base: {
          img: "icon-icon-test34",
          crop: "",
          link: {
            type: "choose",
            url: ""
          },
          openness: 1,
          radius: 0,
          color: "#c5ade9"
        },
        position: {
          width: 244,
          height: 210,
          left: 36,
          top: 512.5,
          rotate: 0,
          zIndex: 99
        }
      },
      {
        common: {
          type: "text",
          id: 63
        },
        base: {
          html:
            '<p><strong><span style="font-size:18px">致供餐企业的一封信</span></strong></p>',
          index: "gZYUKYY",
          color: "#5e31a2",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 346,
          height: 61.999999999999986,
          left: -15,
          top: 742.5,
          rotate: 0,
          zIndex: 100
        }
      }
    ]),
    uid: "364533",
    version: "2"
  },
  url: Random.url()
});
