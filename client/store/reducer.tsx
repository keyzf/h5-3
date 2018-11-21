import produce from "immer";
import BgData from "../resource/background/database";

const store = {
  bg: BgData,
  music: "",
  ui: [],
  share: { title: "测试标题", desc: "测试内容", cover: "" },
  baseline: { h: [], v: [], color: "#ff5722" },
  edit: { type: "share", number: [], lock: [] }
};

const reducer = (state = store, action) => {
  const { type, payload } = action;
  switch (type) {
    /**
     * @desc 参考线设置
     */
    case "BASELINE_ADD":
      return produce(state, draftState => {
        payload === "v"
          ? draftState.baseline.v.push(0)
          : draftState.baseline.h.push(0);
      });
    case "BASELINE_VALUE":
      return produce(state, draftState => {
        draftState.baseline = {
          ...draftState.baseline,
          ...payload
        };
      });
    /**
     * @desc 背景组件数据变更
     */
    case "BG_VALUE":
      return produce(state, draftState => {
        draftState.bg.base = {
          ...draftState.bg.base,
          ...payload
        };
      });
    /**
     * @desc 展示数据变更
     */
    case "SHARE_VALUE":
      return produce(state, draftState => {
        draftState.share = {
          ...draftState.share,
          ...payload
        };
      });
    /**
     * @desc 针对数据源中的edit数据操作
     */
    case "EDIT_VALUE":
      return produce(state, draftState => {
        draftState.edit = {
          ...draftState.edit,
          ...payload
        };
      });
    /**
     * @desc 针对ui项操作
     */
    case "UI_CHOOSE":
      return produce(state, draftState => {
        draftState.edit.number = payload;
      });
    case "UI_ACTION":
      switch (payload.type) {
        case "rotate":
          return produce(state, draftState => {
            draftState.edit.number.map(
              (data: number): void => {
                draftState.ui[data].position.rotate = payload.data;
              }
            );
          });
        case "resize":
          return produce(state, draftState => {
            draftState.edit.number.map(() => {
              if (draftState.edit.number.length > 1) {
                draftState.edit.number.map(
                  (data: number): void => {
                    draftState.ui[data].position.width = payload.data.width;
                    draftState.ui[data].position.height = payload.data.height;
                  }
                );
              } else {
                draftState.edit.number.map(
                  (data: number): void => {
                    draftState.ui[data].position.top = payload.data.top;
                    draftState.ui[data].position.left = payload.data.left;
                    draftState.ui[data].position.width = payload.data.width;
                    draftState.ui[data].position.height = payload.data.height;
                  }
                );
              }
            });
          });
        case "drag":
          return produce(state, draftState => {
            draftState.edit.number.map(
              (data: number): void => {
                draftState.ui[data].position.top += payload.data.deltaY;
                draftState.ui[data].position.left += payload.data.deltaX;
              }
            );
          });
        case "copy":
          const new_state = produce(state, draftState => {
            draftState.edit.number.map(
              (data: number): void => {
                draftState.ui.push(draftState.ui[data]);
              }
            );
          });
          return produce(new_state, draftState => {
            draftState.edit.number.map(
              (data: number, index: number): void => {
                const length = draftState.ui.length - 1 - index;
                draftState.edit.number[index] = length;
                draftState.ui[length].position.top += 20;
                draftState.ui[length].position.left += 20;
              }
            );
          });
        case "del":
          const cmp = (a, b) => a - b;
          return produce(state, draftState => {
            // 删除ui 数组中的数据
            draftState.edit.number
              .sort(cmp)
              .reverse()
              .map(
                (number: number): void => {
                  draftState.ui.splice(number, 1);
                  // 控制 锁定组件
                  draftState.edit.lock
                    .sort(cmp)
                    .reverse()
                    .map((data, index) => {
                      data > number
                        ? (draftState.edit.lock[index] =
                        draftState.edit.lock[index] - 1)
                        : "";
                    });
                }
              );
            draftState.edit.number.length = 0;
          });
        case "layout_up":
          return produce(state, draftState => {
            draftState.edit.number.map(
              (data: number): void => {
                ++draftState.ui[data].position.zIndex;
              }
            );
          });
        case "layout_down":
          return produce(state, draftState => {
            draftState.edit.number.map(
              (data: number): void => {
                --draftState.ui[data].position.zIndex;
              }
            );
          });
        case "left":
          return produce(state, draftState => {
            draftState.edit.number.map(
              (data: number): void => {
                --draftState.ui[data].position.left;
              }
            );
          });
        case "right":
          return produce(state, draftState => {
            draftState.edit.number.map(
              (data: number): void => {
                ++draftState.ui[data].position.left;
              }
            );
          });
        case "up":
          return produce(state, draftState => {
            draftState.edit.number.map(
              (data: number): void => {
                --draftState.ui[data].position.top;
              }
            );
          });
        case "down":
          return produce(state, draftState => {
            draftState.edit.number.map(
              (data: number): void => {
                ++draftState.ui[data].position.top;
              }
            );
          });
        case "unlock":
          return produce(state, draftState => {
            draftState.edit.lock.map((data, index: number) => {
              if (data === payload.data) {
                draftState.edit.lock.splice(index, 1);
              }
            });
          });
        case "lock":
          return produce(state, draftState => {
            draftState.edit.number.map(data => {
              draftState.edit.lock.push(data);
            });
          });
      }
      break;
    case "UI_PUSHDATA":
      const id: any = document.getElementById("content");
      // 处理提交来的数据
      const data = produce(payload, draftState => {
        try {
          const t = id.scrollTop || id.body.scrollTop;
          const h = id.clientHeight;
          draftState.position.top = h / 2 + t - draftState.position.height / 2;
          draftState.position.left = (320 - draftState.position.width) / 2;
        } catch (error) {
          draftState.position.top = draftState.position.height / 2;
          draftState.position.left = (320 - draftState.position.width) / 2;
        }
      });
      // 修改数据源数据
      return produce(state, draftState => {
        draftState.ui.push(data);
        draftState.edit.number = [draftState.ui.length - 1];
      });
    default:
      return state;
  }
};

export default reducer;
