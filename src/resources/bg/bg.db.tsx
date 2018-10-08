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

const $$BG_DB: VarBg = {
  common: {
    type: 'background',
    name: 'background',
  },
  base: {
    img: '',
    color: 'white',
    height: 600,
  },
};

export default $$BG_DB;
