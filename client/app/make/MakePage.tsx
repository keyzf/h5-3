import * as React from "react";
import {useCallback, useState} from "react";
import {Button, Tabs, Modal, Radio} from "antd";
import Store from "../../typing/store";
import {useDispatch, useMappedState} from "redux-react-hook";

export default React.memo((props: any) => {
    const dispatch = useDispatch();
    const {ui, now, motion} = useMappedState(
        useCallback(
            (state: Store) => ({
                ui: state.ui,
                now: state.page.now,
                motion: state.page.motion
            }),
            []
        )
    );
    const [state, setState] = useState(false);

    const RadioGroup = Radio.Group;
    const showModal = () => {
        setState(true);
    };

    const handleOk = e => {
        setState(false);
    };

    const handleCancel = e => {
        setState(false);
    };

    const onChange = e => {

        dispatch({type: "PAGE_MOTION", payload: e.target.value});
    };

    const addPage = () => {
        dispatch({type: "PAGE_ADD", payload: ""});
    };

    const onEdit = targetKey => {
        dispatch({type: "PAGE_REMOVE", payload: targetKey - 1});
    };

    const tabChange = e => {
        dispatch({type: "PAGE_CHANGE", payload: e - 1});
    };

    const TabPane = Tabs.TabPane;
    const ButtonGroup = Button.Group;
    const operations = (
        <ButtonGroup style={{marginRight: "5px"}}>
            <Button htmlType={"button"} onClick={addPage}>
                添加一页
            </Button>
            <Button htmlType={"button"} onClick={showModal}>
                翻页效果
            </Button>
        </ButtonGroup>
    );

    return (
        <React.Fragment>
            <Tabs
                style={{marginTop: "5px", marginLeft: "5px"}}
                type="editable-card"
                tabBarExtraContent={operations}
                hideAdd
                onChange={tabChange}
                activeKey={`${now + 1}`}
                onEdit={onEdit}
            >
                {ui.map((data, index) => {
                    return (
                        <TabPane tab={`第${index + 1}页`} key={`${index + 1}`}>
                            {props.children}
                        </TabPane>
                    );
                })}
            </Tabs>
            <Modal
                title="翻页效果"
                visible={state}
                onOk={handleOk}
                footer={null}
                onCancel={handleCancel}
            >
                <RadioGroup onChange={e => onChange(e)} value={motion}>
                    <Radio value={"none"}>取消效果</Radio>
                    <Radio value={"fadeIn"}>元素淡入</Radio>
                    <Radio value={"bounceIn"}>元素弹跳</Radio>
                    <Radio value={"zoomIn"}>元素渐进</Radio>
                    <Radio value={"rollIn"}>元素滚动</Radio>
                </RadioGroup>
            </Modal>
        </React.Fragment>
    );
});
