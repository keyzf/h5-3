interface VarBg {
  common: {
    type: string;
    name: string;
  };
  base: {
    img: string;
    color: string;
    height: number;
  };

}

const $$bg_db: VarBg = {
  common: {
    type: "background",
    name: "background"
  },
  base: {
    img: "",
    color: "white",
    height: 600
  }
};

export default $$bg_db;
