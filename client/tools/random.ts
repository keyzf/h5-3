/**
 * 生成7位字符串
 * @returns {string}
 */
const random = (): string => {
  let text: string = "";
  const possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 7; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
};


export default random;