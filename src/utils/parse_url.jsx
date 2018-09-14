const GetUrlPara = () => {
  let url = document.location.toString();
  let vid = "";
  let state = "";
  let count = 1;
  for (let index = 1; index <= url.length; index++) {
    if (url.charAt(url.length - index) !== "/" && count === 1) {
      vid = url.charAt(url.length - index) + vid;
    }
    if (url.charAt(url.length - index) !== "/" && count === 2) {
      state = url.charAt(url.length - index);
    }
    if (url.charAt(url.length - index) === "/") {
      count++;
    }

  }
  return { vid: vid, state: state };
};


export { GetUrlPara };
