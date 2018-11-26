import bg from "./bg";

export default interface Store {
  bg: bg,
  music: { desc: string, url: string },
  ui: any,
  log: any,
  baseline: { h: number[], v: number[], color: string }
  share: { title: string, desc: string, cover: string },
  edit: { type: string, number: any, lock: any }
}