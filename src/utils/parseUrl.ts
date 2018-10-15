const GetParaUrl = (url: string): { id: number; state: string } => {
  let id: string = "";
  let state: string = "";
  let count: number = 1;
  for (let index = 1; index <= url.length; index++) {
    if (url.charAt(url.length - index) !== "/" && count === 1) {
      id = url.charAt(url.length - index) + id;
    }
    if (url.charAt(url.length - index) !== "/" && count === 2) {
      state = url.charAt(url.length - index);
    }
    if (url.charAt(url.length - index) === "/") {
      count++;
    }
  }
  return { id: parseInt(id), state: state };
};

export default GetParaUrl;
