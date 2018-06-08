export const $$music_database = name => {
  return {
    customize: {
      name: name,
      //上传
      music: 'https://e7wei-img.oss-cn-beijing.aliyuncs.com/music.mp3',
      // 上传历史
      history: [],
      // 是否自动播放
      auto: { value: 'autoPlay' },
    },
  };
};
