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
          type: "form",
          id: 0
        },
        base: {
          item: [
            {
              form_id: "BNO5ZEY",
              isNeed: false,
              type: "name",
              title: "姓名",
              title_color: "#000",
              option: "请输入姓名",
              option_color: "#000"
            },
            {
              form_id: "995v0Oj",
              isNeed: false,
              type: "phone",
              title: "手机",
              title_color: "#000",
              option: "请输入手机号",
              option_color: "#000"
            },
            {
              type: "textarea",
              form_id: "zvU2VbK",
              title_color: "#000",
              option_color: "#000",
              title: "备注",
              isNeed: false,
              choose: false,
              decorator: "备注",
              option: "请填写备注"
            }
          ],
          desc: "提交",
          font_color: "white",
          bg_color: "",
          date: "3000-12-13"
        },
        position: {
          width: 212,
          height: 415.00000000000006,
          left: 52,
          top: 132.99999999999997,
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
          index_number: "2u6imXA",
          name: "vertical_text",
          html_content: '<p style="text-align:center;"></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 303,
          left: 10,
          height: 148,
          live: false,
          move: true,
          crop_img: "",
          top: 74,
          style_color: "#ffffff",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "img_re_1",
          item: [],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            },
            font_color: "#000"
          }
        },
        advance: {
          color: "",
          img: "",
          width: 280,
          left: 18,
          height: 565,
          move: true,
          crop_img: "",
          top: 48,
          zIndex: 100,
          rotate: 0,
          content_color: "",
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "img_re_1",
          item: [],
          model: true,
          base: {
            show_element: {},
            layout: {
              value: 0
            },
            font_color: "#000"
          }
        },
        advance: {
          color: "",
          img: "",
          width: 280,
          left: 14,
          height: 119,
          move: true,
          crop_img: "",
          top: 261,
          zIndex: 100,
          rotate: 0,
          content_color: "",
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "wzrMow5",
          name: "horizontal_text",
          html_content:
            '<p style="text-align:center;"></p><p><strong><span style="font-size:14px">1.为什么毕业后3年还是菜鸟？</span></strong></p><p><strong><span style="font-size:14px">2.为什么要做一名操机手？</span></strong></p><p><strong><span style="font-size:14px">3.为什么学不到最一流的技术？</span></strong></p><p><strong><span style="font-size:14px">4.为什么不能参与高规格的项目？</span></strong></p><p><strong><span style="font-size:14px">5.带你的老板牛不牛？</span></strong></p><p> </p><p style="text-align:justify;">      <span style="font-size:14px"><span style="line-height:2">Visov Design 广州市万象设计有限公司由广州著名设计师丁力学先生1997年于广州创办，历时二十年。Visov Design是一间具有优秀创作团队的专业设计公司，擅长营造视觉化的个性空间，有极强的概念方案能力及施工图深化设计能力。公司制定系统的施工图制图范，在行业中实属少见，长期深入研究材料及施工工艺，积累了从概念方案效果图到现场实景高还原度等丰富的项目执行经验。为客户提供了高水平的设计服务，获得业界充分肯定，并在设计行业领域屡获奖项。</span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 302,
          left: 9,
          height: 433,
          live: false,
          move: true,
          crop_img: "",
          top: 225,
          style_color: "#ffffff",
          zIndex: 101,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/912182V6S7U2LA7.jpg",
              crop_img: "http://src.e7wei.com/912182V6S7U2LA7.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 304,
          left: 8,
          height: 208,
          move: true,
          crop_img: "",
          top: 652,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/9121845P94F6348.jpg",
              crop_img: "http://src.e7wei.com/9121845P94F6348.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 304,
          left: 8,
          height: 172,
          move: true,
          crop_img: "",
          top: 1162,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91218CGS34LSU44.jpg",
              crop_img: "http://src.e7wei.com/91218CGS34LSU44.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 304,
          left: 8,
          height: 171,
          move: true,
          crop_img: "",
          top: 1343,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/912188746949SN7.jpg",
              crop_img: "http://src.e7wei.com/912188746949SN7.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 303,
          left: 7,
          height: 219,
          move: true,
          crop_img: "",
          top: 2104,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91218HFGQGXA9SB.jpg",
              crop_img: "http://src.e7wei.com/91218HFGQGXA9SB.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 302,
          left: 7,
          height: 220,
          move: true,
          crop_img: "",
          top: 2324,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91218ST67V26LQ6.jpg",
              crop_img: "http://src.e7wei.com/91218ST67V26LQ6.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 303,
          left: 8,
          height: 458,
          move: true,
          crop_img: "",
          top: 2583,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91218X2984QGC4X.jpg",
              crop_img: "http://src.e7wei.com/91218X2984QGC4X.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 304,
          left: 7,
          height: 236,
          move: true,
          crop_img: "",
          top: 3046,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91218654P24972T.jpg",
              crop_img: "http://src.e7wei.com/91218654P24972T.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 304,
          left: 8,
          height: 436,
          move: true,
          crop_img: "",
          top: 3894,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91218H55T3593C7.jpg",
              crop_img: "http://src.e7wei.com/91218H55T3593C7.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 304,
          left: 8,
          height: 222,
          move: true,
          crop_img: "",
          top: 4330,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/912185HYH569364.jpg",
              crop_img:
                "http://src.e7wei.com/912185HYH569364.jpg?imageMogr2/crop/!963.7x1750.2888888888888a63.688888888888876a132.93333333333334",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 305,
          left: 7,
          height: 467,
          move: true,
          crop_img: "",
          top: 4553,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/912182862FLD388.jpg",
              crop_img: "http://src.e7wei.com/912182862FLD388.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 303,
          left: 8,
          height: 441,
          move: true,
          crop_img: "",
          top: 5063,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "gssUPL2",
          name: "text46",
          html_content:
            '<p><span style="color:#000000"><strong><span style="font-size:16px">招聘：</span></strong></span></p><p><span style="color:#000000"><strong>我们能为您提供</strong></span></p><p><span style="color:#000000">＊高端人才及团队多元化合作机制</span><br/><span style="color:#000000">＊每年加薪机会，高于同行业标准的薪酬体系</span><br/><span style="color:#000000">＊室内设计行业知名设计公司的金牌履历</span><br/><span style="color:#000000">＊大咖分享&amp;培训，优秀员工培训</span><br/><span style="color:#000000">＊五险、商业保险、年度定期体检</span><br/><span style="color:#000000">＊不定期的高端活动</span><br/><span style="color:#000000">＊每年省内游、优秀员工国外游</span><br/><span style="color:#000000">＊ 生日补贴、生日会、节假日补贴</span><br/><span style="color:#000000">＊话费补贴、加班补贴、住房补贴</span></p><p></p><p><span style="color:#000000"><strong>招聘岗位</strong></span></p><p><span style="color:#000000">室内设计师助理</span></p><p><span style="color:#000000">软装设计师助理</span></p><p><span style="color:#000000">深化设计师助理</span></p><p><span style="color:#000000">施工图设计师助理</span></p><p><span style="color:#000000">商务文员</span></p><p><span style="color:#000000">行政文员</span></p><p></p><p><span style="color:#000000">地址：广州市天河北（五山）金颖路1号金颖大厦901－905</span><br/><span style="color:#000000">手机：13922140688</span></p><p><span style="color:#000000">固话：020-38319300</span><br/><span style="color:#000000">EMAIL：1620101747@qq.com </span><br/><span style="color:#000000">备注：应聘人员请编辑“姓名+应聘职位”为邮件主题， 发送PDF格式简历及个人作品到公司邮箱。</span></p><p></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 315,
          left: 2,
          height: 684,
          live: false,
          move: true,
          crop_img: "",
          top: 6292,
          style_color: "#d0021b",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "YGOeAWy",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="font-size:14px"><strong>丁力学</strong></span></span></p><p style="text-align:left;"> <span style="font-size:14px"><span style="line-height:2"><span style="color:#000000">Visov Design广州市万象设计有限公司</span></span></span></p><p><span style="font-size:14px"><span style="line-height:2">-- <span style="color:#000000">总经理 设计总监；</span></span></span></p><p style="text-align:left;"><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">高级室内建筑师；</span></span></span></p><p style="text-align:left;"><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">贵州大学美术学院</span></span></span></p><p><span style="font-size:14px"><span style="line-height:2">-- <span style="color:#000000">客座教授；</span></span></span></p><p style="text-align:left;"><span style="font-size:14px"><span style="line-height:2"><span style="color:#000000">《时代空间》杂志</span></span></span> </p><p><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">--杂志顾问；</span></span></span></p><p style="text-align:left;"><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">中国建筑学会室内设计分会广州专业委员会</span></span></span></p><p><span style="font-size:14px"><span style="line-height:2">-- <span style="color:#000000">委员；</span></span></span></p><p style="text-align:left;"><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">卫浴间隔系统国家标准</span></span></span></p><p><span style="font-size:14px"><span style="line-height:2">-- <span style="color:#000000">制定人之一；</span></span></span></p><p style="text-align:left;"><span style="font-size:14px"><span style="line-height:2"><span style="color:#000000">2014 inguangzhou</span></span></span> </p><p style="text-align:left;"><span style="font-size:14px"><span style="line-height:2"><span style="color:#000000">世界室内设计大会（中国）组织委员会</span></span></span> </p><p><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">--委员；</span></span></span></p><p style="text-align:left;"><span style="font-size:14px"><span style="line-height:2"><span style="color:#000000">2014年第九届金盘奖</span></span></span> </p><p><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">--总顾问及主评审；</span></span></span></p><p style="text-align:left;"><span style="font-size:14px"><span style="line-height:2"><span style="color:#000000">2013年第八届金盘奖</span></span></span> </p><p><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">--总顾问及主评审；</span></span></span></p><p style="text-align:left;"><span style="font-size:14px"><span style="line-height:2"><span style="color:#000000">2006、2007广州国际设计周</span></span></span> </p><p><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">--艺术设计总监；</span></span></span></p><p style="text-align:left;"><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">荣获“广州设计名片”殊荣；</span></span></span></p><p style="text-align:left;"><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">荣获赢在设计精英人物；</span></span></span></p><p style="text-align:left;"><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">羊城十大新锐设计师；</span></span></span></p><p style="text-align:left;"><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">中国室内设计年度封面人物（提名）；</span></span></span></p><p style="text-align:left;"><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">全国百名优秀室内建筑师；</span></span></span></p><p style="text-align:left;"><span style="color:#000000"><span style="font-size:14px"><span style="line-height:2">世界华人优秀设计师。</span></span></span></p><p> </p><p style="text-align:left;"></p><p style="text-align:left;"></p><p style="text-align:left;"></p><p></p><p></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 308,
          left: 7,
          height: 755,
          live: false,
          move: true,
          crop_img: "",
          top: 5531,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/9121875RBMN675B.jpg",
              crop_img:
                "http://src.e7wei.com/9121875RBMN675B.jpg?imageMogr2/crop/!2103.7333333333336x1157.3333333333333a791.6888888888885a799.1111111111111",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 303,
          left: 8,
          height: 163,
          move: true,
          crop_img: "",
          top: 50,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/912189L3TW63665.jpg",
              crop_img: "http://src.e7wei.com/912189L3TW63665.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 302,
          left: 8,
          height: 163,
          move: true,
          crop_img: "",
          top: 1754,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91218L34PU7427F.jpg",
              crop_img: "http://src.e7wei.com/91218L34PU7427F.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 302,
          left: 8,
          height: 151,
          move: true,
          crop_img: "",
          top: 1920,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91218BQ394755A3.jpg",
              crop_img: "http://src.e7wei.com/91218BQ394755A3.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 302,
          left: 8,
          height: 242,
          move: true,
          crop_img: "",
          top: 3318,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91218R84G576KA6.jpg",
              crop_img:
                "http://src.e7wei.com/91218R84G576KA6.jpg?imageMogr2/crop/!860.9333333333334x893.2500000000001a100.99999999999991a178.65",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 267,
          left: 24,
          height: 279,
          move: true,
          crop_img: "",
          top: 3570,
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "HT05jxg",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-size:16px"><strong> </strong>VISOV DESIGN<strong>  </strong></span><span style="font-size:14px">万象设计</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 237,
          left: 6,
          height: 35,
          live: false,
          move: true,
          crop_img: "",
          top: 16,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "srhbaCA",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-size:12px">广州文华东方酒店-荟珍阁</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 195,
          left: 7,
          height: 27,
          live: false,
          move: true,
          crop_img: "",
          top: 1122,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "zrbGvBQ",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-size:12px">富力-杭州建德-售楼部</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 139,
          left: 6,
          height: 24,
          live: false,
          move: true,
          crop_img: "",
          top: 1513,
          style_color: "",
          zIndex: 99,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "bqfeqwi",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-size:12px">凯德中国-样板间</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 99,
          left: 7,
          height: 24,
          live: false,
          move: true,
          crop_img: "",
          top: 2061,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "EcbYbA7",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-size:12px">凯德中国-样板间</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 99,
          left: 8,
          height: 24,
          live: false,
          move: true,
          crop_img: "",
          top: 1720,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "KSiXYz4",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-size:12px">广州CBD成果展</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 99,
          left: 6,
          height: 24,
          live: false,
          move: true,
          crop_img: "",
          top: 2544,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "P2w7a3q",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-size:12px">广州设计周</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 99,
          left: 7,
          height: 24,
          live: false,
          move: true,
          crop_img: "",
          top: 3278,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "V63n790",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-size:12px">美国富美家家具设计</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 162,
          left: 7,
          height: 24,
          live: false,
          move: true,
          crop_img: "",
          top: 3851,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "zLyizm6",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-size:12px">广州设计周组邀请丁力学先生出任主旨嘉宾出席活动</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 307,
          left: 8,
          height: 24,
          live: false,
          move: true,
          crop_img: "",
          top: 5021,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "Lvwpxcd",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-size:12px">贵州大学邀请丁力学先生举行专题讲座</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 307,
          left: 8,
          height: 24,
          live: false,
          move: true,
          crop_img: "",
          top: 5493,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "text",
          index_number: "4lpdW5Z",
          name: "horizontal_text",
          html_content:
            '<p><span style="color:#000000"><span style="background-color:#ffffff"><span style="font-size:12px">美国富美家家具产品展示</span></span></span></p>'
        },
        advance: {
          color: "",
          img: "",
          width: 162,
          left: 7,
          height: 24,
          live: false,
          move: true,
          crop_img: "",
          top: 3544,
          style_color: "",
          zIndex: 100,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      },
      {
        customize: {
          type: "img",
          name: "single_img",
          item: [
            {
              img: "http://src.e7wei.com/91218485T9M6P44.jpg",
              crop_img: "http://src.e7wei.com/91218485T9M6P44.jpg",
              title: {
                value: "图片备注"
              },
              content: {
                value:
                  "<div>在内容设置区点击<div>'更换图片'上传你的图片</div></div>"
              },
              link: {
                value: ""
              },
              radius: {
                value: 0
              },
              img_config: {
                stretching: {
                  value: ""
                },
                tiling: {
                  value: ""
                }
              }
            }
          ],
          model: false,
          base: {
            show_element: {},
            layout: {
              value: 0
            }
          }
        },
        advance: {
          color: "",
          img: "",
          width: 304,
          left: 8,
          height: 243,
          move: true,
          crop_img: "",
          top: 878,
          zIndex: 99,
          rotate: 0,
          img_config: {
            stretching: {
              value: ""
            },
            tiling: {
              value: ""
            }
          }
        }
      }
    ]),
    uid: "364533",
    version: "1"
  },
  url: Random.url()
});
