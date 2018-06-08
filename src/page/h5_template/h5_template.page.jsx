import React, { PureComponent } from "react";
import { Row, Col, Layout } from "antd";
import { Link } from "react-router-dom";
import { fromJS, Map } from "immutable";
import { connect } from "react-redux";
import style from "./h5_template.module.scss";
import { choose_action, select_action } from "../../redux/action";
import { preview_render_component } from "../../common/render/preview_components";
import BgPreview from "../../ui/preview/background/bg_component";

// 模拟数据
const $$data = fromJS([{
  ui: [
    {
      "customize": {
        "index_number": 0.3259688739224347,
        "name": "one_text",
        "html_content": "<p>这里填充标题<br/>填充补充内容填充补充内容填充补充内容</p>"
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "index_number": 0.18626646910596545,
        "name": "two_text",
        "html_content": "<p>请在这里填入适当的内容！</p>"
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "index_number": 0.27788959655497036,
        "name": "three_text",
        "html_content": "位置定位"
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "index_number": 0.24249341299313176,
        "name": "four_text",
        "html_content": "时刻钟表"
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "index_number": 0.2631331620757673,
        "name": "six_text",
        "html_content": "极度完美主义"
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "index_number": 0.1490196438095126,
        "name": "seven_text",
        "html_content": "<h1>主讲人</h1>"
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "index_number": 0.5918079846485693,
        "name": "vertical_text",
        "html_content": "<h2 style=\"text-align:center;\">竖排文本示例</h2> <h3 style=\"text-align:center;\">元日</h3><p style=\"text-align:center;\">爆竹声中一岁除<br/>春风送暖入屠苏<br/>千门万户曈曈日<br/>总把新桃换旧符</p>"
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "index_number": 0.8687745467564716,
        "name": "horizontal_text",
        "html_content": "<h2 style=\"text-align:center;\">横排文本示例</h2><p style=\"text-align:center;\"> <h3 style=\"text-align:center;\">上邪</h3><p style=\"text-align:center;\"> 上邪，我欲与君相知，长命无绝衰。<br/>山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝</p>"
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "name": "slider_img",
        "item": [
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg0.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg2.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          }
        ],
        "base": {
          "show_element": {},
          "layout": {
            "value": 0
          }
        }
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "name": "slider_img",
        "item": [
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg0.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg2.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          }
        ],
        "base": {
          "show_element": {},
          "layout": {
            "value": 0
          }
        }
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "name": "carousel_img",
        "item": [
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg0.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg2.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          }
        ],
        "base": {
          "show_element": {},
          "layout": {
            "value": 0
          }
        }
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "name": "list_img",
        "item": [
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg0.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg2.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          }
        ],
        "base": {
          "show_element": {},
          "layout": {
            "value": 1
          }
        }
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "name": "grid_img",
        "item": [
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/dg2.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg7.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg2.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          },
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg3.jpg",
            "title": {
              "value": "这里是图片标题"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          }
        ],
        "base": {
          "show_element": {},
          "layout": {
            "value": 2
          }
        }
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        }
      }
    },
    {
      "customize": {
        "name": "single_img",
        "item": [
          {
            "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg7.jpg",
            "title": {
              "value": "图片备注"
            },
            "content": {
              "value": "这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描"
            },
            "link": {
              "value": ""
            },
            "width": {
              "value": ""
            },
            "height": {
              "value": ""
            },
            "img_config": {
              "stretching": {
                "value": ""
              },
              "tiling": {
                "value": ""
              }
            }
          }
        ],
        "base": {
          "show_element": {},
          "layout": {
            "value": 0
          }
        }
      },
      "advance": {
        "color": "",
        "img": "",
        "img_config": {
          "stretching": {
            "value": ""
          },
          "tiling": {
            "value": ""
          }
        },
        "position": {
          "depth": {
            "value": 0
          },
          "top": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          },
          "bottom": {
            "value": 0
          }
        },
        "padding": {
          "top": {
            "value": 0
          },
          "bottom": {
            "value": 0
          },
          "left": {
            "value": 0
          },
          "right": {
            "value": 0
          }
        }
      }
    }
  ],
  bg: {
    "name": "background",
    "customize": {
      "color": "white",
      "img": "https://demos.creative-tim.com/material-kit-pro/assets/img/bg.jpg",
      "img_config": {
        repeat: "",
        fixed: ""
      }
    }
  }
}]);


class H5Template extends PureComponent {
  chooseTemplate = (data) => {
    this.props.select_upData(data, "mate", false);
    this.props.choose_upData(
      Map({ number: 0, data: data.get('0') }),
      Map({
        content: true,
        choose: true
      }),
      false
    );

  };

  render() {
    const { Header, Content } = Layout;
    return (
      <Layout className={style.layout}>
        <Header className={style.header}>
          导航栏
        </Header>
        <Content className={style.content}>
          <Row gutter={16}>
            <Col span={20} offset={2}>
              <Row gutter={16} style={{ marginTop: "24px" }}>
                <Col span={6}>
                  <Link to={"visual"}>
                    <div className={style.default}>
                      创建空白模板
                    </div>
                  </Link>
                </Col>
                {/*数据循环*/}
                {
                  $$data.map((data, index) => {
                    return (
                      <Col span={6} key={index}>
                        <Link to={"visual"} style={{color:'black'}} onClick={this.chooseTemplate.bind(this, data.get("ui"))}>
                          <div className={style.item}>
                            <BgPreview color={data.getIn(["bg", "customize", "color"])}
                                       img={data.getIn(["bg", "customize", "img"])}
                                       repeat={data.getIn(["bg", "img_config", "repeat"])}
                                       fixed={data.getIn(["bg", "img_config", "fixed"])}>
                              {
                                data.get("ui").map((data_ui, index) => {
                                  return (
                                    <React.Fragment key={index}>
                                      {preview_render_component(data_ui)}
                                    </React.Fragment>
                                  );
                                })
                              }
                            </BgPreview>
                          </div>
                        </Link>
                      </Col>
                    );
                  })
                }
              </Row>
            </Col>
            <Col span={2}/>
          </Row>
        </Content>
      </Layout>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error))
  };
};

export default connect(
  "",
  mapDispatchToProps
)(H5Template);

