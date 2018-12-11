import * as React from "react";
import Store from "../../typing/store";
import { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import saveMsg_ajax from "../../api/saveMsg_api";
import { message } from "antd";

const NavRelease = React.memo(() => {
  const { title, desc, cover, sid, ui, bg, music } = useMappedState(
    useCallback(
      (state: Store) => ({
        title: state.share.title,
        desc: state.share.desc,
        cover: state.share.cover,
        sid: state.global.sid,
        ui: state.ui,
        bg: state.bg,
        music: state.music
      }),
      []
    )
  );
  const saveMsg = () => {
    let form = [];
    ui.map(data => {
      if (data.common.type === "form") {
        data.base.item.map(data => {
          form.push({ form_id: data.form_id, name: title });
        });
      }
    });
    saveMsg_ajax({ title, desc, cover, sid, ui, bg, music, form })
      .then(resp => {})
      .catch(error => {});
  };
  return (
    <div style={{ color: "white" }} onClick={saveMsg}>
      <i className={"iconfont icon-fabu"} style={{ marginRight: "10px" }} />
      发布
    </div>
  );
});

export default NavRelease;
