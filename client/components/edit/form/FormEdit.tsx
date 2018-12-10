import * as React from "react";
import {Button, Tabs} from "antd";
import {useCallback, useState} from "react";
import Store from "../../../typing/store";
import {useMappedState} from "redux-react-hook";
import FormItemList from "./item-list";
import {useDispatch} from "redux-react-hook";
import SubmitForm from "./submit";
import FormEditItem from "./item";
import {css} from "glamor";

const FormEdit = React.memo(() => {
    const dispatch = useDispatch();
    const [state, setState] = useState(-1);
    const {ui, editList} = useMappedState(
        useCallback(
            (state: Store) => ({
                ui: state.ui[state.page.now],,
                editList: state.edit.number
            }),
            []
        )
    );

    const onChoose = (index: any) => {
        setState(index);
    };

    const back = () => {
        setState(-1);
    };

    const TabPane = Tabs.TabPane;
    const items = ui[editList[0]].base.item[state];
    const scrollbar = css({
        width: "100%",
        height: "calc(100vh - 135px)",
        overflowX: "auto",
        overflowY: "auto",
        scrollbarArrowColor: "transparent",
        scrollbarFaceColor: "transparent",
        scrollbarHighlightColor: "transparent",
        scrollbarShadowColor: "transparent",
        scrollbarDarkshadowColor: "transparent",
        scrollbarTrackColor: "transparent",
        scrollbarBaseColor: "transparent",

        "&::-webkit-scrollbar": {
            border: "none",
            width: 0,
            height: 0,
            backgroundColor: "transparent"
        },
        "&::-webkit-scrollbar-button": {
            display: "none"
        },
        "&::-webkit-scrollbar-track": {
            display: "none"
        },
        "&::-webkit-scrollbar-track-piece": {
            display: "none"
        },

        "&::-webkit-scrollbar-thumb": {
            display: "none"
        },
        "&::-webkit-scrollbar-corner": {
            display: "none"
        },
        "&::-webkit-resizer": {
            display: "none"
        }
    });
    return (
        <div {...scrollbar}>
            {state !== -1 ? (
                <Tabs
                    defaultActiveKey="1"
                    tabBarExtraContent={<Button onClick={back}>返回</Button>}
                >

                    <TabPane tab={items.title} key="1">
                        <FormEditItem
                            fun={(data: any) => dispatch({type: "FORM_ITEM", payload: {index: state, data: data}})}
                            data={items}/>
                    </TabPane>
                </Tabs>
            ) : (
                <Tabs defaultActiveKey="1">
                    <TabPane tab="表单设置" key="1">
                        <FormItemList
                            choose={onChoose}
                            order={ui[editList[0]].base.item}
                            changeFun={dispatch}
                        />
                    </TabPane>
                    <TabPane tab="提交设置" key="2">
                        <SubmitForm/>
                    </TabPane>
                </Tabs>
            )}
        </div>
    );
});

export default FormEdit;
