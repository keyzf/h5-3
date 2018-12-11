import * as React from "react";
import { Tabs, Form } from "antd";
import RichTextEditor from "../../../tools/rich-editor";
import Store from "../../../typing/store";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useCallback } from "react";
import TextColor from "./color";
import TextLink from "./link";

const TextEdit = React.memo(() => {
  const TabPane = Tabs.TabPane;
  const dispatch = useDispatch();
  const { editList, ui } = useMappedState(
    useCallback(
      (state: Store) => ({
        editList: state.edit.number,
        ui: state.ui,
      }),
      []
    )
  );
  const valueChange = (html: any) =>
    dispatch({ type: "TEXT_VALUE", payload: { html: html } });

  return (
    <Tabs defaultActiveKey="1">
      {ui[editList[0]].base.wordArt ? (
        <TabPane tab="属性设置" key="1">
          <div style={{ padding: "0 10px" }}>
            <Form>
              <TextLink />
            </Form>
          </div>
        </TabPane>
      ) : (
        <TabPane tab="富文本编辑" key="1">
          <RichTextEditor
            action={valueChange}
            error={!!editList.length}
            data={ui[editList[0]]}
          />
        </TabPane>
      )}
      {ui[editList[0]].base.wordArt ? (
        ""
      ) : (
        <TabPane tab="属性设置" key="2">
          <div style={{ padding: "0 10px" }}>
            <Form>
              <TextColor />
              <TextLink />
            </Form>
          </div>
        </TabPane>
      )}
    </Tabs>
  );
});

export default TextEdit;
