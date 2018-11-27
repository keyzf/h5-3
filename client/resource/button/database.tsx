const ButtonData:any = [];

const data = [
  {
    font_color: "#fff",
    bg_color: "#2EA5FF",
    bg_img: ""
  },
  {
    font_color: "#fff",
    bg_color: "transparent",
    bg_img: "http://src.e7wei.com/0.21214677242156488.png"
  },
  {
    font_color: "#fff",
    bg_color: "transparent",
    bg_img: "http://src.e7wei.com/0.2228652186281075.png"
  },
  {
    font_color: "#fff",
    bg_color: "transparent",
    bg_img: "http://src.e7wei.com/0.2812003343951739.png"
  },
  {
    font_color: "#fff",
    bg_color: "transparent",
    bg_img: "http://src.e7wei.com/0.3811889973393192.png"
  },
  {
    font_color: "#fff",
    bg_color: "transparent",
    bg_img: "http://src.e7wei.com/0.36788814909137724.png"
  }
];

data.map((data, index) => {
  ButtonData.push({
    common: {
      type: "button",
      id: index
    },
    base: {
      font_color: data.font_color,
      bg_color: data.bg_color,
      bg_img: { url: data.bg_img, crop: data.bg_img },
      radius: 0,
      desc: "按钮组件",
      link: { type: "choose", url: "" }
    },
    position: {
      width: 186,
      height: 50,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

export default ButtonData;
