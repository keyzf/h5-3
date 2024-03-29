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
  PictureData[data.index] = {
    common: {
      type: "picture",
      id: data.index
    },
    base: data.data,
    position: {
      width: 250,
      height: 250,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  };
});

const banner: object[] = [
  {
    data: [
      {
        img: "http://src.e7wei.com/91212AC282C76P6.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1001
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/9121283657N28V7.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1002
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/912126G69664Q33.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1003
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212X655L7H5V7.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1004
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212779L72X3QD.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1005
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212N5F394K3K5.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1006
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/912125QK5Q69EU7.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1007
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212N5T247H7V9.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1008
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/9121288YA549UY2.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1009
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212T79L3393LC.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1010
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212MH398PYBJ4.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1011
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212DFBCN2GR79.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1012
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/912124H9K7S7J5B.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1013
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/912123PT7FC27KE.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1014
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212C3W9567465.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1015
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212U47L6837L7.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1016
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212484U3699R6.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1017
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/912129RW4369FUF.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1018
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212A9343B5MRU.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1019
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212NKY6B52C4W.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1020
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212WSW23P9596.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1021
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212LK58U45M77.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1022
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212B75775BX9V.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1023
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212UJ46552YY9.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1024
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212T5A23K9DVL.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1025
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212S24T762M6X.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1026
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/912123T8CVRVDTP.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1027
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212D5863C3JVJ.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1028
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/9121257H63WEP77.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1029
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/9121293MA66AD9F.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1030
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/91212A9684V55F8.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1031
  },
  {
    data: [
      {
        img: "http://src.e7wei.com/912129D778W3VS5.png",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#000"
      }
    ],
    index: 1032
  }
];
banner.map((data: any) => {
  PictureData[data.index] = {
    common: {
      type: "picture",
      id: data.index
    },
    base: data.data[0],
    position: {
      width: 250,
      height: 240,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  };
});

const shape: object[] = [
  {
    data: [
      {
        img: "icon-icon-test1",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 39
  },
  {
    data: [
      {
        img: "icon-icon-test34",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 40
  },
  {
    data: [
      {
        img: "icon-icon-test33",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 41
  },
  {
    data: [
      {
        img: "icon-icon-test32",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 42
  },
  {
    data: [
      {
        img: "icon-icon-test31",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 43
  },
  {
    data: [
      {
        img: "icon-icon-test29",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 44
  },
  {
    data: [
      {
        img: "icon-icon-test28",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 45
  },
  {
    data: [
      {
        img: "icon-icon-test27",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 46
  },
  {
    data: [
      {
        img: "icon-icon-test26",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 47
  },
  {
    data: [
      {
        img: "icon-icon-test25",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 48
  },
  {
    data: [
      {
        img: "icon-icon-test24",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 49
  },
  {
    data: [
      {
        img: "icon-icon-test23",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 50
  },
  {
    data: [
      {
        img: "icon-icon-test22",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 51
  },
  {
    data: [
      {
        img: "icon-icon-test21",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 52
  },
  {
    data: [
      {
        img: "icon-icon-test20",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 53
  },
  {
    data: [
      {
        img: "icon-icon-test19",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 54
  },
  {
    data: [
      {
        img: "icon-icon-test18",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 55
  },
  {
    data: [
      {
        img: "icon-icon-test17",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 56
  },
  {
    data: [
      {
        img: "icon-icon-test16",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 57
  },
  {
    data: [
      {
        img: "icon-icon-test15",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 58
  },
  {
    data: [
      {
        img: "icon-icon-test14",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 59
  },
  {
    data: [
      {
        img: "icon-icon-test13",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 60
  },
  {
    data: [
      {
        img: "icon-icon-test12",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 61
  },
  {
    data: [
      {
        img: "icon-icon-test11",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 62
  },
  {
    data: [
      {
        img: "icon-icon-test10",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 63
  },
  {
    data: [
      {
        img: "icon-icon-test9",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 64
  },
  {
    data: [
      {
        img: "icon-icon-test8",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 65
  },
  {
    data: [
      {
        img: "icon-icon-test7",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 66
  },
  {
    data: [
      {
        img: "icon-icon-test6",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 67
  },
  {
    data: [
      {
        img: "icon-icon-test5",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 68
  },
  {
    data: [
      {
        img: "icon-icon-test4",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 69
  },
  {
    data: [
      {
        img: "icon-icon-test3",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 70
  },
  {
    data: [
      {
        img: "icon-icon-test2",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 71
  },
  {
    data: [
      {
        img: "icon-xuxian",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 471
  },
  {
    data: [
      {
        img: "icon-zhixian3",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 472
  },
  {
    data: [
      {
        img: "icon-x",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#7BDCB5"
      }
    ],
    index: 473
  }
];
shape.map((data: any) => {
  PictureData[data.index] = {
    common: {
      type: "picture",
      id: data.index
    },
    base: data.data[0],
    position: {
      width: 50,
      height: 50,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  };
});

// const line: object[] = [
//   {
//     data: [
//       {
//         img: "icon-Desktop",
//         crop: "",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 32
//   },
//   {
//     data: [
//       {
//         img: "icon-hengxian2",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 33
//   },
//   {
//     data: [
//       {
//         img: "icon-hengxiandianzuo",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 34
//   },
//   {
//     data: [
//       {
//         img: "icon-hengxiandianyou",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 35
//   },
//   {
//     data: [
//       {
//         img: "icon-hengxian1-copy",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 36
//   },
//   {
//     data: [
//       {
//         img: "icon-hengxian",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 37
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test63",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 72
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test62",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 73
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test61",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 74
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test60",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 75
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test59",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 76
//   },
//
//   {
//     data: [
//       {
//         img: "icon-icon-test56",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 79
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test54",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 81
//   },
//
//   {
//     data: [
//       {
//         img: "icon-icon-test46",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 89
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test45",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 90
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test44",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 91
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test43",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 92
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test42",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 93
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test41",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 94
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test40",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 95
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test39",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 96
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test38",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 97
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test37",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 98
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test36",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 99
//   },
//   {
//     data: [
//       {
//         img: "icon-icon-test35",
//         crop: "icon-e7wei-1",
//         link: { type: "choose", url: "" },
//         openness: 1,
//         radius: 0,
//         color: "#FCB900"
//       }
//     ],
//     index: 100
//   }
// ];
// line.map((data: any) => {
//   PictureData[data.index] = {
//     common: {
//       type: "picture",
//       id: data.index
//     },
//     base: data.data[0],
//     position: {
//       width: 180,
//       height: 100,
//       left: 0,
//       top: 0,
//       rotate: 0,
//       zIndex: 100
//     }
//   };
// });

const icon: object[] = [
  {
    data: [
      {
        img: "question",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
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
        color: "#8ED1FC"
      }
    ],
    index: 31
  },
  {
    data: [
      {
        img: "android",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 500
  },
  {
    data: [
      {
        img: "dingding",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 501
  },
  {
    data: [
      {
        img: "weibo",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 502
  },
  {
    data: [
      {
        img: "wechat",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 503
  },
  {
    data: [
      {
        img: "shopping-cart",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 504
  },
  {
    data: [
      {
        img: "home",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 505
  },
  {
    data: [
      {
        img: "environment",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 506
  },
  {
    data: [
      {
        img: "phone",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 507
  },
  {
    data: [
      {
        img: "like",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 508
  },
  {
    data: [
      {
        img: "taobao",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 509
  },
  {
    data: [
      {
        img: "zhihu",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 510
  },
  {
    data: [
      {
        img: "alipay",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 511
  },
  {
    data: [
      {
        img: "cloud-download",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 512
  },
  {
    data: [
      {
        img: "smile",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 513
  },
  {
    data: [
      {
        img: "notification",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 514
  },
  {
    data: [
      {
        img: "setting",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 515
  },
  {
    data: [
      {
        img: "camera",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 516
  },
  {
    data: [
      {
        img: "scan",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 517
  },
  {
    data: [
      {
        img: "area-chart",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 518
  },
  {
    data: [
      {
        img: "pie-chart",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 519
  },
  {
    data: [
      {
        img: "bar-chart",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 520
  },
  {
    data: [
      {
        img: "dot-chart",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 521
  },
  {
    data: [
      {
        img: "line-chart",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 522
  },
  {
    data: [
      {
        img: "radar-chart",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 523
  },
  {
    data: [
      {
        img: "fall",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 524
  },
  {
    data: [
      {
        img: "rise",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 524
  },
  {
    data: [
      {
        img: "stock",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 525
  },
  {
    data: [
      {
        img: "fund",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 526
  },
  {
    data: [
      {
        img: "heart",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 527
  },
  {
    data: [
      {
        img: "compass",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 528
  },
  {
    data: [
      {
        img: "wifi",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 529
  },
  {
    data: [
      {
        img: "shop",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 530
  },
  {
    data: [
      {
        img: "gift",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 531
  },
  {
    data: [
      {
        img: "trademark",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 532
  },
  {
    data: [
      {
        img: "check-circle",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 533
  },
  {
    data: [
      {
        img: "question-circle",
        crop: "",
        link: { type: "choose", url: "" },
        openness: 1,
        radius: 0,
        color: "#8ED1FC"
      }
    ],
    index: 534
  }
];
icon.map((data: any) => {
  PictureData[data.index] = {
    common: {
      type: "picture",
      id: data.index
    },
    base: data.data[0],
    position: {
      width: 50,
      height: 50,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  };
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
