let PictureData: any = [];

/**
 * @desc  基础
 */
const base: object[] = [
  {
    data: {
      img: "http://src.e7wei.com/0.2823198691104869.png",
      crop: "http://src.e7wei.com/0.2823198691104869.png",
      link: { type: "choose", url: "" },
      openness: 0,
      radius: 0,
      color: ""
    },
    index: 0
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/90911S36843MURM.png",
        crop: "http://src.e7wei.com/90911S36843MURM.png",
        link: { type: "choose", url: "" },
        openness: 0,
        radius: 0,
        color: ""
      },
      {
        img: "http://src.e7wei.com/9091138WT5P2SJR.png",
        crop: "http://src.e7wei.com/9091138WT5P2SJR.png",
        link: { type: "choose", url: "" },
        openness: 0,
        radius: 0,
        color: ""
      },
      {
        img: "http://src.e7wei.com/90911SC6849G845.png",
        crop: "http://src.e7wei.com/90911SC6849G845.png",
        link: { type: "choose", url: "" },
        openness: 0,
        radius: 0,
        color: ""
      },
      {
        img: "http://src.e7wei.com/90911H26UD946U8.png",
        crop: "http://src.e7wei.com/90911H26UD946U8.png",
        link: { type: "choose", url: "" },
        openness: 0,
        radius: 0,
        color: ""
      }
    ],
    index: 1
  }
];
base.map((data: any) => {
  PictureData.push({
    common: {
      type: "picture",
      id: data.index
    },
    base: data.data,
    position: {
      width: 300,
      height: 213,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

const icon: object[] = [
  {
    data: [
      {
        img: "question",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 2
  },
  {
    data: [
      {
        img: "edit",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 3
  },
  {
    data: [
      {
        img: "form",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 4
  },
  {
    data: [
      {
        img: "copy",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 5
  },
  {
    data: [
      {
        img: "scissor",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 6
  },
  {
    data: [
      {
        img: "delete",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 7
  },
  {
    data: [
      {
        img: "diff",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 8
  },
  {
    data: [
      {
        img: "highlight",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 9
  },
  {
    data: [
      {
        img: "zoom-out",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 10
  },
  {
    data: [
      {
        img: "zoom-in",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 11
  },
  {
    data: [
      {
        img: "sort-ascending",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 12
  },
  {
    data: [
      {
        img: "drag",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 13
  },
  {
    data: [
      {
        img: "dot-chart",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 14
  },
  {
    data: [
      {
        img: "bar-chart",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 15
  },
  {
    data: [
      {
        img: "fall",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 16
  },
  {
    data: [
      {
        img: "rise",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 17
  },
  {
    data: [
      {
        img: "box-plot",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 18
  },
  {
    data: [
      {
        img: "unlock",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 19
  },
  {
    data: [
      {
        img: "code",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 20
  },
  {
    data: [
      {
        img: "warning",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 21
  },
  {
    data: [
      {
        img: "info",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 22
  },
  {
    data: [
      {
        img: "stop",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 23
  },
  {
    data: [
      {
        img: "bg-colors",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 24
  },
  {
    data: [
      {
        img: "redo",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 25
  },
  {
    data: [
      {
        img: "undo",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 26
  },
  {
    data: [
      {
        img: "area-chart",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 27
  },
  {
    data: [
      {
        img: "cloud",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 28
  },
  {
    data: [
      {
        img: "desktop",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 29
  },
  {
    data: [
      {
        img: "share-alt",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 30
  },
  {
    data: [
      {
        img: "paper-clip",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 31
  }
];
icon.map((data: any) => {
  PictureData.push({
    common: {
      type: "picture",
      id: data.index
    },
    base: data.data[0],
    position: {
      width: 45,
      height: 45,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

const line: object[] = [
  {
    data: [
      {
        img: "icon-Desktop",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 32
  },
  {
    data: [
      {
        img: "icon-hengxian2",
        crop: "icon-e7wei-1",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 33
  },
  {
    data: [
      {
        img: "icon-hengxiandianzuo",
        crop: "icon-e7wei-1",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 34
  },
  {
    data: [
      {
        img: "icon-hengxiandianyou",
        crop: "icon-e7wei-1",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 35
  },
  {
    data: [
      {
        img: "icon-hengxian1-copy",
        crop: "icon-e7wei-1",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 36
  },
  {
    data: [
      {
        img: "icon-hengxian",
        crop: "icon-e7wei-1",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 37
  }
];
line.map((data: any) => {
  PictureData.push({
    common: {
      type: "picture",
      id: data.index
    },
    base: data.data[0],
    position: {
      width: 100,
      height: 40,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

// 添加 img 组件 item 时的数据
export const PictureDataAdd = {
  img: "http://src.e7wei.com/0.2823198691104869.png",
  crop: "http://src.e7wei.com/0.2823198691104869.png",
  link: { type: "choose", url: "" },
  openness: 0,
  radius: 0,
  color: ""
};

export default PictureData;
