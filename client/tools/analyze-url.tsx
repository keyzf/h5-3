/**
 * @desc 解析url,获取相应参数
 */
const analyzeUrl = (): { id: number; web: string } => {
  const url: string = window.location.href;
  let id: string = "";
  let web: string = "";
  let count: number = 1;
  for (let index = 1; index <= url.length; index++) {
    if (url.charAt(url.length - index) !== "/" && count === 1) {
      id = url.charAt(url.length - index) + id;
    }
    if (url.charAt(url.length - index) !== "/" && count === 2) {
      web = url.charAt(url.length - index);
    }
    if (url.charAt(url.length - index) === "/") {
      count++;
    }
  }
  return { id: parseInt(id), web: web };
};

export default analyzeUrl;

