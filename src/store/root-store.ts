import { action, when, observable } from "mobx";
import ComponentsStore, { IComponentsStore } from "./mobx/components-store";
import PreviewStore, { IPreviewStore } from "./mobx/preview-store";
import ReleaseStore, { IReleaseStore } from "./mobx/release-store";
import VisualStore, { IVisualStore } from "./mobx/visual-store";
import upGlobalDateAdapter, {
  IupGlobalDateAdapter
} from "./adapter/upGlobalDate-adapter";
import getAllData from "../service/getAllData";
import GetParaUrl from "../utils/parseUrl";
import postAllData from "../service/postAllData";

export interface IRootStore {
  ui: object[];
  state: string;
  id: number;
  releaseStore: IReleaseStore;
  previewStore: IPreviewStore;
  componentsStore: IComponentsStore;
  visualStore: IVisualStore;
  // 函数
  postAllData: any;
}

export default class RootStore {
  private releaseStore: IReleaseStore;
  private previewStore: IPreviewStore;
  private componentsStore: IComponentsStore;
  private visualStore: IVisualStore;

  @observable public ui: object[] = [];
  @observable public state: string = "";
  @observable public id: number = 0;

  constructor() {
    this.componentsStore = new ComponentsStore(this);
    this.previewStore = new PreviewStore(this);
    this.releaseStore = new ReleaseStore(this);
    this.visualStore = new VisualStore(this);

    const { id, state } = GetParaUrl(window.location.href);

    when(
      () => {
        if (id && state && (state === "r" || state === "v" || state === "p")) {
          return true;
        } else {
          window.location.href = "http://my.e7wei.com/404.html";
          return false;
        }
      },
      () => {
        getAllData(id, state)
          .then(response => {
            this.upGlobalData(upGlobalDateAdapter(response, id, state));
          })
          .catch(error => {
            window.location.href = error;
          });
      }
    );

    when(
      () => true,
      () => {
        if (localStorage.getItem(`e7wei-log-${id}`)) {
          this.visualStore.log = JSON.parse(localStorage.getItem(`e7wei-log-${id}`));
        } else {
          localStorage.setItem(`e7wei-log-${id}`, JSON.stringify([]));
        }
      },
    );
  }

  @action("更新全局数据")
  upGlobalData = (data: IupGlobalDateAdapter) => {
    // 公共
    this.id = data.common.id;
    this.state = data.common.state;
    // release
    this.releaseStore.url = data.release.url;
    this.releaseStore.pv = data.release.pv;
    this.releaseStore.self = data.release.self;
    // preview
    this.previewStore.cover = data.preview.cover;
    this.previewStore.desc = data.preview.desc;
    this.previewStore.title = data.preview.title;
    // components
    this.componentsStore.bg = data.components.bg;
    this.componentsStore.music = data.components.music;
  };

  @action("将数据全部发送给后台")
  postAllData = () => {
    let form: any = "";
    const postData = {
      id: this.id,
      ui: JSON.stringify(this.ui),

      form: JSON.stringify(form),

      bg: JSON.stringify(this.componentsStore.bg),
      music: JSON.stringify(this.componentsStore.music),

      cover: this.previewStore.cover,
      desc: this.previewStore.desc,
      title: this.previewStore.title
    };
    return postAllData(postData);
  };
}
