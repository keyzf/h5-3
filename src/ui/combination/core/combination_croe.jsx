import React from 'react';
import { fromJS } from 'immutable';
import { ComRender } from '../../../app_feature/render/com_render';

export class CombinationCoreUI extends React.Component {
  render() {
    return (
      <ComRender
        bg={this.props.data.getIn(['customize', 'bg'])}
        data={this.props.data.getIn(['customize', 'ui'])}
      />
    );
  }
}

export const combinationCore_data = fromJS({
  // 基础编辑属性
  customize: {
    type: 'com',
    name: 'com_core',
    bg: {
      name: 'background',
      customize: {
        color: '#e5e2dc',
        img: '',
        crop_img: '',
        img_config: {},
      },
      advanced: {
        height: { value: 0 },
      },
    },
    ui: [
      {
        customize: {
          type: 'img',
          name: 'single_img',
          item: [
            {
              img: 'http://src.e7wei.com/0.2264607573333488.png',
              crop_img: 'http://src.e7wei.com/0.2264607573333488.png',
              title: {
                value: '图片备注',
              },
              content: {
                value:
                  '这里是图片描述，这里是图片描述，这里是图片描述，这里是图片描',
              },
              link: {
                value: '',
              },
              width: {
                value: '',
              },
              height: {
                value: '',
              },
              img_config: {
                stretching: {
                  value: '',
                },
                tiling: {
                  value: '',
                },
              },
            },
          ],
          base: {
            show_element: {},
            layout: {
              value: 0,
            },
            font_color: '#000',
          },
        },
        advance: {
          color: '',
          img: '',
          img_config: {
            stretching: {
              value: '',
            },
            tiling: {
              value: '',
            },
          },
          perimeter: {
            width: {
              value: 320,
            },
            height: {
              value: 449,
            },
          },
          transform: {
            translateX: {
              value: 0,
            },
            translateY: {
              value: 0,
            },
          },
        },
      },
      {
        customize: {
          type: 'text',
          index_number: 0.7305497264267169,
          name: 'seventeen_text',
          html_content: '<h2><span style="color:#ffffff">关于我们</span></h2>',
        },
        advance: {
          color: '',
          img: '',
          crop_img: '',
          img_config: {
            stretching: {
              value: '',
            },
            tiling: {
              value: '',
            },
          },
          perimeter: {
            width: {
              value: 257,
            },
            height: {
              value: 110,
            },
          },
          transform: {
            translateX: {
              value: 0,
            },
            translateY: {
              value: -59,
            },
          },
        },
      },
      {
        customize: {
          type: 'text',
          index_number: 0.3966995688256152,
          name: 'horizontal_text',
          html_content:
            '<p style="text-align:center;"></p><p><strong>易企微，一站式微信营销平台，是南京易企云软件技术有限公司旗下产品，提供微信营销一站式解决方案。</strong></p><p><strong>平台以微信为载体，开发企业实用的互动营销产品。帮助企业技术驱动营销，快捷、高效地开发客户，提升销量。</strong></p>',
        },
        advance: {
          color: '',
          img: '',
          crop_img: '',
          img_config: {
            stretching: {
              value: '',
            },
            tiling: {
              value: '',
            },
          },
          perimeter: {
            width: {
              value: 311,
            },
            height: {
              value: 160,
            },
          },
          transform: {
            translateX: {
              value: 6,
            },
            translateY: {
              value: -76,
            },
          },
        },
      },
      {
        customize: {
          type: 'text',
          index_number: 0.730549726426716239,
          name: 'seventeen_text',
          html_content:
            '<h2><span style="color:#ffffff"><strong>热招职位</strong></span></h2>',
        },
        advance: {
          color: '',
          img: '',
          crop_img: '',
          img_config: {
            stretching: {
              value: '',
            },
            tiling: {
              value: '',
            },
          },
          perimeter: {
            width: {
              value: 272,
            },
            height: {
              value: 93,
            },
          },
          transform: {
            translateX: {
              value: 0,
            },
            translateY: {
              value: -96,
            },
          },
        },
      },
      {
        customize: {
          type: 'text',
          index_number: 0.396699568825236152,
          name: 'horizontal_text',
          html_content:
            '<p style="text-align:center;"></p><h3><span style="color:#000000">1 文案策划兼新媒体运营</span></h3><p><span style="color:#000000">职位要求：</span></p><p><span style="color:#000000">1、本科以上学历（中文，传播学，新闻学，广学专业），具有记者或公司品牌文案工作经验者优先；</span></p><p><span style="color:#000000">2、具备3年以上新媒体运营工作经历，了解新媒体特点，熟悉微博、微信、今日头条等新媒体运营的方法与流程，具备一定的线上线下活动推广经验。</span></p><p><span style="color:#000000">3、具有快速的信息收集、整合能力，具备较强文案选题、文案策划、文案编辑、撰写能力与生动的文笔表达能力，能根据新媒体运营需要进行选题、策划、编辑相关网络文章；</span></p><p><span style="color:#000000">4、较好的团推协作精神，高度的责任心，做事细致，缜密，能承受较大的工作压力。</span></p>',
        },
        advance: {
          color: '',
          img: '',
          crop_img: '',
          img_config: {
            stretching: {
              value: '',
            },
            tiling: {
              value: '',
            },
          },
          perimeter: {
            width: {
              value: 312,
            },
            height: {
              value: 359,
            },
          },
          transform: {
            translateX: {
              value: 5,
            },
            translateY: {
              value: -97,
            },
          },
        },
      },
      {
        customize: {
          type: 'text',
          index_number: 0.396699568822356152,
          name: 'horizontal_text',
          html_content:
            '<p style="text-align:center;"></p><h3><span style="color:#000000">2 市场专员</span></h3><p><span style="color:#000000">职位要求：</span></p><p><span style="color:#000000">1、具备互联网思维，有2年以上相关岗位工作经验；</span></p><p><span style="color:#000000">2、对互联网行业感兴趣，了解相关行业操作；</span></p><p><span style="color:#000000">3、性格能力开朗，有较强的开拓能力，协调能力，沟通能力及谈判能力；</span></p><p><span style="color:#000000">4、熟悉商务拓展流程，善于抓住客户需求，有较强的公关能力；</span></p><p><span style="color:#000000">5、有独立工作能力和团队协调能力，极强的责任心，发现问题和解决问题的能力，积极主动、性格开朗、讲效率、乐于接受挑战</span></p><p><span style="color:#000000">6、较好的团推协作精神，高度的责任心，做事细致，缜密，能承受较大的工作压力。</span></p>',
        },
        advance: {
          color: '',
          img: '',
          crop_img: '',
          img_config: {
            stretching: {
              value: '',
            },
            tiling: {
              value: '',
            },
          },
          perimeter: {
            width: {
              value: 312,
            },
            height: {
              value: 339,
            },
          },
          transform: {
            translateX: {
              value: 5,
            },
            translateY: {
              value: -145,
            },
          },
        },
      },
      {
        customize: {
          type: 'text',
          index_number: 0.7305497262324267169,
          name: 'seventeen_text',
          html_content:
            '<h2><strong><span style="color:#ffffff">福利待遇</span></strong></h2>',
        },
        advance: {
          color: '',
          img: '',
          crop_img: '',
          img_config: {
            stretching: {
              value: '',
            },
            tiling: {
              value: '',
            },
          },
          perimeter: {
            width: {
              value: 280,
            },
            height: {
              value: 129,
            },
          },
          transform: {
            translateX: {
              value: 0,
            },
            translateY: {
              value: -187,
            },
          },
        },
      },
      {
        customize: {
          type: 'text',
          index_number: 0.3966995688232256152,
          name: 'horizontal_text',
          html_content:
            '<p style="text-align:center;"></p><p><span style="color:#000000">1、不低于行业标准的薪资水平，具体情况根据个人能力面议。</span></p><p></p><p><span style="color:#000000">2、入职即签订合同并交纳五险一金；</span></p><p><span style="color:#000000">3、丰富的团建活动，零食、下午茶不限量供应；</span></p><p><span style="color:#000000">4、合理的涨薪机制，优秀员工更有股权激励；</span></p><p><span style="color:#000000">5、超长年假，想去哪就去哪！</span></p>',
        },
        advance: {
          color: '',
          img: '',
          crop_img: '',
          img_config: {
            stretching: {
              value: '',
            },
            tiling: {
              value: '',
            },
          },
          perimeter: {
            width: {
              value: 314,
            },
            height: {
              value: 159,
            },
          },
          transform: {
            translateX: {
              value: 5,
            },
            translateY: {
              value: -209,
            },
          },
        },
      },
      {
        customize: {
          type: 'text',
          index_number: 0.7305497223264267169,
          name: 'seventeen_text',
          html_content:
            '<h2><span style="color:#ffffff"><strong>联系我们</strong></span></h2>',
        },
        advance: {
          color: '',
          img: '',
          crop_img: '',
          img_config: {
            stretching: {
              value: '',
            },
            tiling: {
              value: '',
            },
          },
          perimeter: {
            width: {
              value: 274,
            },
            height: {
              value: 108,
            },
          },
          transform: {
            translateX: {
              value: 0,
            },
            translateY: {
              value: -210,
            },
          },
        },
      },
      {
        customize: {
          type: 'text',
          index_number: 0.39669956823238256152,
          name: 'horizontal_text',
          html_content:
            '<p style="text-align:center;"></p><p><span style="color:#000000">Tel: 025-84515170</span></p><p><span style="color:#000000">Ad: 南京建邺区扬子江大道399号</span></p><p><span style="color:#000000"> 海峡云谷科技园5号楼520室</span></p>',
        },
        advance: {
          color: '',
          img: '',
          crop_img: '',
          img_config: {
            stretching: {
              value: '',
            },
            tiling: {
              value: '',
            },
          },
          perimeter: {
            width: {
              value: 263,
            },
            height: {
              value: 145,
            },
          },
          transform: {
            translateX: {
              value: 5,
            },
            translateY: {
              value: -222,
            },
          },
        },
      },
    ],
  },
  // 高级编辑属性
  advance: {
    color: '',
    img: '',
    img_config: {
      stretching: { value: '' },
      tiling: { value: '' },
    },
    perimeter: { width: { value: 320 }, height: { value: undefined } },
    transform: { translateX: { value: 0 }, translateY: { value: 0 } },
  },
});
