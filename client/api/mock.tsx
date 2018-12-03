import Mock, {Random} from "mockjs";

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
        },
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
        {tid: "9", typename: "治愈"},
        {tid: "8", typename: "商务"},
        {tid: "7", typename: "轻松"},
        {tid: "6", typename: "浪漫"},
        {tid: "5", typename: "节日"},
        {tid: "4", typename: "欢快"},
        {tid: "3", typename: "复古"},
        {tid: "2", typename: "动感"},
        {tid: "1", typename: "大气"}
    ]
});

/**
 * 系统数据
 */
Mock.mock(`${window.location.origin}/Material/getSys`, "post", {
    error: 0,
    list: [
        {url: "http://s.e7wei.com/811284QY8FA48F2.mp3", name: "奏响舞曲"},
        {url: "http://s.e7wei.com/811284QY8FA48F2.mp3", name: "奏响舞曲"},
        {url: "http://s.e7wei.com/811285359523452.mp3", name: "自然力量"},
        {url: "http://s.e7wei.com/81128P4QHT934LR.mp3", name: "重现旧时"},
        {url: "http://s.e7wei.com/81128EUR25E6588.mp3", name: "征服天堂"},
        {url: "http://s.e7wei.com/81128NCH79363V5.mp3", name: "印象深刻"},
        {url: "http://s.e7wei.com/81128X7V569Q45F.mp3", name: "夜半呼喊"},
        {url: "http://s.e7wei.com/81128KEG5K9BA99.mp3", name: "舞风之刃"},
        {url: "http://s.e7wei.com/81128E9N5M57V9S.mp3", name: "无坚不摧"},
        {url: "http://s.e7wei.com/8112886S39T985M.mp3", name: "文艺复兴"},
        {url: "http://s.e7wei.com/81128G8FA8A5WP9.mp3", name: "伟大史诗"}
    ],
    sum: 30
});
