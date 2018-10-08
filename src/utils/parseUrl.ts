/**
 *  GetParaUrl 接口
 */
interface TypeInterFace {
  (url?: string): { id: number; state: string };
}

/**
 * 获取 url 斜杠后的两位数值
 * @constructor
 * @param url
 * @example
 * 例：http://h5.e7wei.com/v/430
 * 获取数值为 v 430
 * @return
 * vid 获取到的用户id
 * state 用户即将跳转的页面代码
 */
const GetParaUrl: TypeInterFace = (
  url: string
): { id: number; state: string } => {
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
