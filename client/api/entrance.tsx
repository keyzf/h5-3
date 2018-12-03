import axios from "axios";
import Mock, {Random} from "mockjs";

/**
 * @desc 获取全体数据，对正确返回与错误返回作出处理
 * @param id
 * @param web
 */
const entrance_api = (id: number, web: string) => {
    const params: any = new URLSearchParams();
    const ajaxUrl: string = `${
        web === "r" ? "/view/getData" : "/Create/getData"
        }`;


    /**
     * ⬇️模拟数据
     */
    const error: number = 0;
    Mock.setup({
        timeout: 200
    });
    Mock.mock(
        `${window.location.origin}${ajaxUrl}`,
        "post",
        {
            error: error,
            info: {
                bg: {
                    type: 'background',
                    name: 'background',
                    customize: {
                        color: 'white',
                        img: '',
                        crop_img: '',
                        height: 871,
                        img_config: {}
                    }
                },
                cover: Random.dataImage("200x100"),
                desc: "这里是描述",
                form: null,
                self: "1",
                music: {music_url: Random.url(), desc: "13123qwer"},
                pv: "0",
                sid: "10775",
                title: "我的页面",
                ui: [
                    {
                        customize: {
                            type: 'text',
                            index_number: '63cLlWM',
                            name: 'thirty_one_text',
                            html_content: '请输入标题'
                        },
                        advance: {
                            color: '',
                            img: '',
                            width: 300,
                            left: 10,
                            height: 50,
                            live: false,
                            move: true,
                            crop_img: '',
                            top: 25,
                            style_color: 'rgb(0,161,159)',
                            zIndex: 100,
                            rotate: 0,
                            img_config: {
                                stretching: {
                                    value: ''
                                },
                                tiling: {
                                    value: ''
                                }
                            }
                        }
                    },
                    {
                        customize: {
                            type: 'text',
                            index_number: 'ijcEzXx',
                            name: 'thirty_text',
                            html_content: '你看到的是一个标题'
                        },
                        advance: {
                            color: '',
                            img: '',
                            width: 300,
                            left: 17,
                            height: 50,
                            live: false,
                            move: true,
                            crop_img: '',
                            top: 156,
                            style_color: 'rgb(0,214,205)',
                            zIndex: 100,
                            rotate: 0,
                            img_config: {
                                stretching: {
                                    value: ''
                                },
                                tiling: {
                                    value: ''
                                }
                            }
                        }
                    },
                    {
                        customize: {
                            type: 'text',
                            index_number: 'I9cs8k4',
                            name: 'twenty_eight_text',
                            html_content: '你看到的是一个标题'
                        },
                        advance: {
                            color: '',
                            img: '',
                            width: 300,
                            left: 6,
                            height: 50,
                            live: false,
                            move: true,
                            crop_img: '',
                            top: 104,
                            style_color: 'rgb(0,220,255)',
                            zIndex: 100,
                            rotate: 0,
                            img_config: {
                                stretching: {
                                    value: ''
                                },
                                tiling: {
                                    value: ''
                                }
                            }
                        }
                    },
                    {
                        customize: {
                            type: 'text',
                            index_number: 'KfZ3c5W',
                            name: 'twenty_nine_text',
                            html_content: '你看到的是一个标题'
                        },
                        advance: {
                            color: '',
                            img: '',
                            width: 300,
                            left: 5,
                            height: 50,
                            live: false,
                            move: true,
                            crop_img: '',
                            top: 242,
                            style_color: 'rgb(0,214,205)',
                            zIndex: 100,
                            rotate: 0,
                            img_config: {
                                stretching: {
                                    value: ''
                                },
                                tiling: {
                                    value: ''
                                }
                            }
                        }
                    },
                    {
                        customize: {
                            type: 'form',
                            types: '报名',
                            name: 'form',
                            item: [
                                {
                                    type: 'name',
                                    title_color: '#000',
                                    opt_color: '#000',
                                    form_id: 'aGyw7U9',
                                    title: {
                                        value: '姓名'
                                    },
                                    decorator: '姓名',
                                    choose: false,
                                    option: {
                                        value: '请输入姓名'
                                    }
                                },
                                {
                                    type: 'phone',
                                    title_color: '#000',
                                    opt_color: '#000',
                                    form_id: 'dr16fhb',
                                    title: {
                                        value: '手机'
                                    },
                                    decorator: '手机',
                                    choose: false,
                                    option: {
                                        value: '请输入手机号'
                                    }
                                },
                                {
                                    type: 'textarea',
                                    form_id: '9cm9YK4',
                                    title_color: '#000',
                                    opt_color: '#000',
                                    title: {
                                        value: '备注'
                                    },
                                    choose: false,
                                    decorator: '备注',
                                    option: {
                                        value: '请填写备注'
                                    }
                                }
                            ],
                            btn_content: {
                                value: '提交'
                            },
                            btn_color: 'white',
                            btn_bg_color: ''
                        },
                        advance: {
                            color: '',
                            img: '',
                            width: 230,
                            left: 51,
                            height: 401,
                            live: false,
                            move: true,
                            crop_img: '',
                            top: 359,
                            zIndex: 100,
                            rotate: 0,
                            img_config: {
                                stretching: {
                                    value: ''
                                },
                                tiling: {
                                    value: ''
                                }
                            }
                        }
                    }
                ],
                version: "1"
            },
            url: error ? "http://my.e7wei.com/404.html" : Random.url()
        }
    );
    /**
     * ⬆️模拟数据
     */



    params.append("id", `${id}`);
    return new Promise((resolve: any, reject: any) => {
        axios
            .post(`${window.location.origin}${ajaxUrl}`, params)
            .then(response => {
                if (parseInt(response.data.error)) {
                    reject(response.data.url);
                } else {
                    // 调用函数，调整数据源数据
                    resolve(response.data);
                }
            })

    });
};

export default entrance_api;
