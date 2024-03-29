import produce from "immer";
import BgData from "../resource/background/database";
import random from "../tools/random";
import bgAdapter from "./legacy/bg-legacy";
import ui_legacy from "./legacy/ui-legacy";
import saveMsg_ajax from "../api/saveMsg_api";
import { message } from "antd";

const store = {
  global: { sid: 0, pv: 0, url: "", self: "1" },
  bg: BgData,
  bgHeight: 0,
  music: { desc: "", url: "" },
  ui: [],
  log: [],
  share: { title: "", desc: "", cover: "" },
  baseline: { h: [], v: [], color: "#ff5722" },
  edit: { type: "share", number: [], lock: [] }
};

const reducer: any = (state = store, action: any) => {
  const { type, payload } = action;
  switch (type) {
    case "SAVE":
      let form = [];
      state.ui.map(data => {
        if (data.common.type === "form") {
          data.base.item.map(data => {
            form.push({ form_id: data.form_id, name: data.title });
          });
        }
      });
      const datas = {
        title: state.share.title ? state.share.title : "标题",
        desc: state.share.desc ? state.share.desc : "描述",
        cover: state.share.cover,
        sid: state.global.sid,
        ui: state.ui,
        bg: state.bg,
        music: state.music
      };
      saveMsg_ajax({ ...datas, form })
        .then(resp => {
          message.success("保存成功");
        })
        .catch(error => {
          message.error("保存失败");
        });
      return state;
    /**
     * 记录必要值
     */
    case "GLOBAL":
      return produce(state, draftState => {
        draftState.global = {
          ...draftState.global,
          ...payload
        };
      });

    /**
     * @desc 数据初始化
     */
    case "INIT":
      return produce(state, draftState => {
        draftState.global = {
          sid: draftState.global.sid,
          pv: payload.info.pv,
          url: payload.url,
          self: payload.self
        };
        draftState.share = {
          title: payload.info.title,
          desc: payload.info.desc,
          cover: payload.info.cover
        };

        if (payload.info.version !== "1") {
          draftState.bg = JSON.parse(payload.info.bg);
          draftState.ui = JSON.parse(payload.info.ui);
          draftState.music = JSON.parse(payload.info.music);
        } else {
          draftState.bg = payload.info.bg
            ? { ...bgAdapter(JSON.parse(payload.info.bg)) }
            : BgData;
          draftState.music = {
            url: payload.info.music
              ? JSON.parse(payload.info.music).music_url
              : "",
            desc: payload.info.music ? JSON.parse(payload.info.music).desc : ""
          };
          draftState.ui = payload.info.ui
            ? ui_legacy(JSON.parse(payload.info.ui))
            : [];
        }
        draftState.bgHeight = draftState.bg.base.height;
      });

    /**
     * @desc 历史记录
     */
    case "LOG_INIT":
      return produce(state, draftState => {
        if (localStorage.getItem(`e7wei-log-${payload}`)) {
          draftState.log = JSON.parse(localStorage.getItem(
            `e7wei-log-${payload}`
          ) as string);
        } else {
          localStorage.setItem(`e7wei-log-${payload}`, JSON.stringify([]));
        }
      });
    case "LOG_CREAT":
      return produce(state, draftState => {
        const data: any = {
          time: new Date(),
          bg: draftState.bg,
          music: draftState.music,
          ui: draftState.ui
        };
        if (draftState.log.length) {
          draftState.log.unshift(data);

          if (draftState.log.length > 10) {
            draftState.log.length = 10;
          }
          localStorage.setItem(
            `e7wei-log-${payload}`,
            JSON.stringify(draftState.log)
          );
        } else {
          draftState.log.unshift(data);
          localStorage.setItem(
            `e7wei-log-${payload}`,
            JSON.stringify(draftState.log)
          );
        }
      });
    case "LOG_CHANGE":
      return produce(state, (draftState: any) => {
        draftState.ui = draftState.log[payload].ui;
        draftState.bg = draftState.log[payload].bg;
        draftState.music = draftState.log[payload].music;
        draftState.edit = { type: "share", number: [], lock: [] };
      });

    /**
     * @desc 表单设置
     */
    case "FORM_ITEM":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]].base.item[payload.index] = {
          ...draftState.ui[draftState.edit.number[0]].base.item[payload.index],
          ...payload.data
        };
      });
    case "FORM_ADD":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]].base.item.push(payload);
      });
    case "FORM_DEL":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]].base.item.splice(payload, 1);
      });
    case "FORM_BASE":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]].base = {
          ...draftState.ui[draftState.edit.number[0]].base,
          ...payload
        };
      });

    /**
     * @desc 按钮组件数据变更
     */
    case "BUTTON_VALUE":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]].base = {
          ...draftState.ui[draftState.edit.number[0]].base,
          ...payload
        };
      });

    /**
     * @desc 视频组件数据变更
     */
    case "VIDEO_VALUE":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]].base = {
          ...draftState.ui[draftState.edit.number[0]].base,
          ...payload
        };
      });

    /**
     * @desc 图片组件数据变更
     */
    case "PICTURE_BASE_ADD":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]].base.push(payload);
      });
    case "PICTURE_BASE_ITEM":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]].base[payload.index] = {
          ...draftState.ui[draftState.edit.number[0]].base[payload.index],
          ...payload.data
        };
      });
    case "PICTURE_BASE_DEL":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]].base.splice(payload, 1);
      });
    case "PICTURE_BASE":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]] = {
          ...draftState.ui[draftState.edit.number[0]],
          ...payload
        };
      });
    case "PICTURE_VALUE":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]].base = {
          ...draftState.ui[draftState.edit.number[0]].base,
          ...payload
        };
      });

    /**
     * @desc 文本组件数据变更
     */
    case "TEXT_VALUE":
      return produce(state, (draftState: any) => {
        draftState.ui[draftState.edit.number[0]].base = {
          ...draftState.ui[draftState.edit.number[0]].base,
          ...payload
        };
      });

    /**
     * @desc 音乐组件
     */
    case "MUSIC_VALUE":
      return produce(state, (draftState: any) => {
        draftState.music = {
          ...draftState.music,
          ...payload
        };
      });

    /**
     * @desc 背景组件数据变更
     */
    case "BG_VALUE":
      return produce(state, (draftState: any) => {
        draftState.bg.base = {
          ...draftState.bg.base,
          ...payload
        };
      });

    /**
     * @desc 展示数据变更
     */
    case "SHARE_VALUE":
      return produce(state, (draftState: any) => {
        draftState.share = {
          ...draftState.share,
          ...payload
        };
      });

    /**
     * @desc 参考线设置
     */
    case "BASELINE_ADD":
      return produce(state, (draftState: any) => {
        payload === "v"
          ? draftState.baseline.v.push(0)
          : draftState.baseline.h.push(0);
      });
    case "BASELINE_VALUE":
      return produce(state, (draftState: any) => {
        draftState.baseline = {
          ...draftState.baseline,
          ...payload
        };
      });

    /**
     * @desc 针对数据源中的edit数据操作
     */
    case "EDIT_VALUE":
      return produce(state, (draftState: any) => {
        draftState.edit = {
          ...draftState.edit,
          ...payload
        };
      });

    /**
     * @desc 针对ui项操作
     */
    case "UI_CHOOSE":
      return produce(state, (draftState: any) => {
        draftState.edit.number = payload;
      });
    case "UI_ACTION":
      switch (payload.type) {
        case "rotate":
          return produce(state, (draftState: any) => {
            draftState.edit.number.map(
              (data: number): void => {
                draftState.ui[data].position.rotate = payload.data;
              }
            );
          });
        case "resize":
          return produce(state, (draftState: any) => {
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
          return produce(state, (draftState: any) => {
            draftState.edit.number.map(
              (data: number): void => {
                draftState.ui[data].position.top += payload.data.deltaY;
                draftState.ui[data].position.left += payload.data.deltaX;
              }
            );
          });
        case "copy":
          const new_state = produce(state, (draftState: any) => {
            draftState.edit.number.map(
              (data: number): void => {
                draftState.ui.push(draftState.ui[data]);
              }
            );
          });
          return produce(new_state, (draftState: any) => {
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
          const cmp = (a: any, b: any) => a - b;
          return produce(state, (draftState: any) => {
            draftState.edit.type = "";
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
                    .map((data: any, index: any) => {
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
          return produce(state, (draftState: any) => {
            draftState.edit.number.map(
              (data: number): void => {
                ++draftState.ui[data].position.zIndex;
              }
            );
          });
        case "layout_down":
          return produce(state, (draftState: any) => {
            draftState.edit.number.map(
              (data: number): void => {
                --draftState.ui[data].position.zIndex;
              }
            );
          });
        case "left":
          return produce(state, (draftState: any) => {
            draftState.edit.number.map(
              (data: number): void => {
                --draftState.ui[data].position.left;
              }
            );
          });
        case "right":
          return produce(state, (draftState: any) => {
            draftState.edit.number.map(
              (data: number): void => {
                ++draftState.ui[data].position.left;
              }
            );
          });
        case "up":
          return produce(state, (draftState: any) => {
            draftState.edit.number.map(
              (data: number): void => {
                --draftState.ui[data].position.top;
              }
            );
          });
        case "down":
          return produce(state, (draftState: any) => {
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
            draftState.edit.type = "";
          });
      }
      break;
    case "UI_PUSHDATA":
      const id: any = document.getElementById("content");
      // 处理提交来的数据
      const data = produce(payload, draftState => {
        if (payload.common.type === "text") {
          draftState.base.index = random();
        }
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
      return produce(state, (draftState: any) => {
        draftState.ui.push(data);
        draftState.edit.type =
          draftState.ui[draftState.ui.length - 1].common.type;
        draftState.edit.number = [draftState.ui.length - 1];
      });

    default:
      return state;
  }
};

export default reducer;
