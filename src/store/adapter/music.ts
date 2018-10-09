interface oldData {
  music_url: string;
  desc: string;
}

const musicAdapter = (oldData: oldData): object => {
  const common = {
    type: "music",
    name: "music"
  };
  const base = {
    url: oldData.music_url,
    desc: oldData.music_url
  };

  return { common, base };
};

export default musicAdapter;
