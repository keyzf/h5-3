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
    bg: {
      type: "background",
      name: "background",
      customize: {
        color: "white",
        img: "",
        crop_img: "",
        height: 871,
        img_config: {}
      }
    },
    cover: Random.dataImage("200x100"),
    desc: "这里是描述",
    form: null,
    self: "1",
    music: { music_url: Random.url(), desc: "13123qwer" },
    pv: "0",
    sid: "10775",
    title: "我的页面",
    ui: [
      {
        customize: {
          type: "text",
          index_number: "63cLlWM",
          name: "thirty_one_text",
          html_content: "请输入标题"
        },
        advance: {
          color: "",
          img: "",
          width: 300,
          left: 10,
          height: 50,
          live: false,
          move: true,
          crop_img: "",
          top: 25,
          style_color: "rgb(0,161,159)",
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
          index_number: "ijcEzXx",
          name: "thirty_text",
          html_content: "你看到的是一个标题"
        },
        advance: {
          color: "",
          img: "",
          width: 300,
          left: 17,
          height: 50,
          live: false,
          move: true,
          crop_img: "",
          top: 156,
          style_color: "rgb(0,214,205)",
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
          index_number: "I9cs8k4",
          name: "twenty_eight_text",
          html_content: "你看到的是一个标题"
        },
        advance: {
          color: "",
          img: "",
          width: 300,
          left: 6,
          height: 50,
          live: false,
          move: true,
          crop_img: "",
          top: 104,
          style_color: "rgb(0,220,255)",
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
          index_number: "KfZ3c5W",
          name: "twenty_nine_text",
          html_content: "你看到的是一个标题"
        },
        advance: {
          color: "",
          img: "",
          width: 300,
          left: 5,
          height: 50,
          live: false,
          move: true,
          crop_img: "",
          top: 242,
          style_color: "rgb(0,214,205)",
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
          type: "form",
          types: "报名",
          name: "form",
          item: [
            {
              type: "name",
              title_color: "#000",
              opt_color: "#000",
              form_id: "aGyw7U9",
              title: {
                value: "姓名"
              },
              decorator: "姓名",
              choose: false,
              option: {
                value: "请输入姓名"
              }
            },
            {
              type: "phone",
              title_color: "#000",
              opt_color: "#000",
              form_id: "dr16fhb",
              title: {
                value: "手机"
              },
              decorator: "手机",
              choose: false,
              option: {
                value: "请输入手机号"
              }
            },
            {
              type: "textarea",
              form_id: "9cm9YK4",
              title_color: "#000",
              opt_color: "#000",
              title: {
                value: "备注"
              },
              choose: false,
              decorator: "备注",
              option: {
                value: "请填写备注"
              }
            }
          ],
          btn_content: {
            value: "提交"
          },
          btn_color: "white",
          btn_bg_color: ""
        },
        advance: {
          color: "",
          img: "",
          width: 230,
          left: 51,
          height: 401,
          live: false,
          move: true,
          crop_img: "",
          top: 359,
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
      }
    ],
    version: "1"
  },
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
    music: JSON.stringify({ music_url: "http://s.e7wei.com/811286853R292E7.mp3", desc: "庆祝圣诞" }),
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
          name: "img_re_1",
          item: [
            {
              img: "http://7xv429.com1.z0.glb.clouddn.com/mao1.jpg",
              title: { value: "——易企微" },
              content: { value: "微信一站式解决方案" },
              link: { value: "" },
              radius: { value: 0 },
              img_config: { stretching: { value: "" }, tiling: { value: "" } }
            }
          ],
          model: true,
          base: { show_element: {}, layout: { value: 0 }, font_color: "#000" }
        },
        advance: {
          color: "",
          img: "",
          width: 280,
          left: 20,
          height: 300,
          move: true,
          crop_img: "",
          top: 20,
          zIndex: 100,
          rotate: 0,
          content_color: "",
          img_config: { stretching: { value: "" }, tiling: { value: "" } }
        }
      }
    ]),
    uid: "364533",
    version: "1"
  },
  url: Random.url()
});
