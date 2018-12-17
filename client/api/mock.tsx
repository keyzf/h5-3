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

Mock.mock(`${window.location.origin}/view/getData`, "post", {
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
          id: 60
        },
        base: {
          html: "<p>请输入标题</p>",
          index: "qtHJEW7",
          color: "rgb(0,161,159)",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 206,
          height: 29.999999999999982,
          left: 10,
          top: 25,
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
          html: "<p>请输入标题</p>",
          index: "9peEhkA",
          color: "rgb(0,214,205)",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 193,
          height: 47.999999999999986,
          left: 18,
          top: 83,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 2
        },
        base: {
          html: "",
          index: "nBo5Rwp",
          color: "",
          wordArt: "http://src.e7wei.com/910164RJY4FH78H.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 198,
          height: 82.99999999999997,
          left: 17,
          top: 161,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 16
        },
        base: {
          html: "",
          index: "NpUShkF",
          color: "",
          wordArt: "http://src.e7wei.com/9101685DFF6W4TJ.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 184,
          height: 83.00000000000001,
          left: 23,
          top: 253,
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
          color: "#000"
        },
        position: {
          width: 126,
          height: 112,
          left: 44,
          top: 360,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 1001
        },
        base: {
          img: "http://src.e7wei.com/91212AC282C76P6.png",
          crop: "",
          link: {
            type: "choose",
            url: ""
          },
          openness: 1,
          radius: 0,
          color: "#000"
        },
        position: {
          width: 74,
          height: 77,
          left: 52,
          top: 497,
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

Mock.mock(`${window.location.origin}/Create/getData`, "post", {
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
          id: 60
        },
        base: {
          html: "<p>请输入标题</p>",
          index: "qtHJEW7",
          color: "rgb(0,161,159)",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 206,
          height: 29.999999999999982,
          left: 10,
          top: 25,
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
          html: "<p>请输入标题</p>",
          index: "9peEhkA",
          color: "rgb(0,214,205)",
          wordArt: "",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 193,
          height: 47.999999999999986,
          left: 18,
          top: 83,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 2
        },
        base: {
          html: "",
          index: "nBo5Rwp",
          color: "",
          wordArt: "http://src.e7wei.com/910164RJY4FH78H.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 198,
          height: 82.99999999999997,
          left: 17,
          top: 161,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "text",
          id: 16
        },
        base: {
          html: "",
          index: "NpUShkF",
          color: "",
          wordArt: "http://src.e7wei.com/9101685DFF6W4TJ.png",
          link: {
            type: "choose",
            url: ""
          }
        },
        position: {
          width: 184,
          height: 83.00000000000001,
          left: 23,
          top: 253,
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
          color: "#000"
        },
        position: {
          width: 126,
          height: 112,
          left: 44,
          top: 360,
          rotate: 0,
          zIndex: 100
        }
      },
      {
        common: {
          type: "picture",
          id: 1001
        },
        base: {
          img: "http://src.e7wei.com/91212AC282C76P6.png",
          crop: "",
          link: {
            type: "choose",
            url: ""
          },
          openness: 1,
          radius: 0,
          color: "#000"
        },
        position: {
          width: 74,
          height: 77,
          left: 52,
          top: 497,
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
