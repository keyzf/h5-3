let VideoData:any = [];

const data = [
  {
    url: ""
  }
];

data.map((data, index) => {
  VideoData.push({
    common: {
      type: "video",
      id: index
    },
    base: {
      url: data.url
    },
    position: {
      width: 300,
      height: 100,
      left: 0,
      top: 0,
      rotate: 0,
      zIndex: 100
    }
  });
});

export default VideoData;