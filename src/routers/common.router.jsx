import { component_loading } from "./transition_animation/component.animation";
import Loadable from "react-loadable";

export const RenderUILoadable = Loadable({
  loader: () => import("../containers/visual/content/render_ui"), // 文件路径
  loading: component_loading, // 加载时显示的组件
  delay: 300,
  timeout: 5000 // 超时时间
});