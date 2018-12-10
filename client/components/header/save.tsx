import * as React from "react";
import Store from "../../typing/store";
import {useCallback} from "react";
import {useMappedState} from "redux-react-hook";
import saveMsg_ajax from "../../api/saveMsg_api";
import {message} from "antd";


const NavSave = React.memo(() => {
    const {title, desc, cover, sid, ui, bg, music} = useMappedState(
        useCallback(
            (state: Store) => ({
                title: state.share.title,
                desc: state.share.desc,
                cover: state.share.cover,
                sid: state.global.sid,
                ui: state.ui[state.page.now],
                bg: state.bg,
                music: state.music
            }),
            []
        )
    );
    const saveMsg = () => {
        let form = [];
        ui.map((data) => {
            if (data.common.type === 'form') {
                data.base.item.map((data) => {
                    form.push({form_id: data.form_id, name: data.title})
                })
            }
        });
        saveMsg_ajax({title, desc, cover, sid, ui, bg, music, form}).then((resp) => {
            message.success('保存成功')
        }).catch((error) => {
            message.error('保存失败')
        })
    };
    return (
        <div style={{color: "white"}} onClick={saveMsg}>
            <i
                className={"iconfont icon-baocun"}
                style={{marginRight: "10px"}}
            />
            保存
        </div>
    );
});


export default NavSave;
