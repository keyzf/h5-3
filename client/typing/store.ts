import bg from "./bg";

export default interface Store {
  bg: bg;
  global: { sid: number; pv: number; url: string; self: string };
  music: { desc: string; url: string };
  page: { now: string; motion: string };
  ui: any;
  log: any;
  baseline: { h: number[]; v: number[]; color: string };
  share: { title: string; desc: string; cover: string };
  edit: { type: string; number: any; lock: any };
}
