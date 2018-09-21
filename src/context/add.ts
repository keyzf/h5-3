/**
 * 向h5中添加数据，设置ui组件的显示位置
 * @param data
 */

interface Var {
  position: { top; left; width; height };
}

const addDataToH5 = (data: Var): object => {
  const id: any = document.getElementById("content");
  try {
    const t = id.scrollTop || id.body.scrollTop;
    const h = id.clientHeight;
    data.position.top = h / 2 + t - data.position.height / 2;
  } catch (error) {
    data.position.top = data.position.height / 2;
  }
  // 更新width 与 height 的值
  data.position.left = (320 - data.position.width) / 2;
  /**
   * 返回数据
   */
  return data;
};

export default addDataToH5;
