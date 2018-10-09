interface I_music {
  common: {
    type: string;
    name: string;
  };
  base: {
    url: string;
    desc: string;
  };
}

const $$Music_DB: I_music = {
  common: {
    type: "music",
    name: "music"
  },
  base: {
    url: "",
    desc: ""
  }
};

export default $$Music_DB;
