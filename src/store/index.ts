/**
 * Store 数据源
 */
import { Store } from './mobx/store';
/**
 * Action 数据源
 */
import Action from "./mobx/action";
/**
 * Computes 数据源
 */
import Computes from "./mobx/computed";


/**
 * 导出mobx 所有可调用数据源
 */
export const rootProps = {
  store: new Store(),
  action: new Action(new Store()),
  computes: new Computes(new Store())
};