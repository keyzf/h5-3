import * as React from "react";
import { Tabs, Form } from "antd";
import RichTextEditor from "../../../tools/rich-editor";
import Store from "../../../typing/store";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useCallback } from "react";
import TextColor from "./color";
import TextLink from "./link";
import { css } from "glamor";

const TextEdit = React.memo(() => {
  const TabPane = Tabs.TabPane;
  const dispatch = useDispatch();
  const { editList, ui } = useMappedState(
    useCallback(
      (state: Store) => ({
        editList: state.edit.number,
        ui: state.ui
      }),
      []
    )
  );
  const valueChange = (html: any) =>
    dispatch({ type: "TEXT_VALUE", payload: { html: html } });
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
      <Tabs defaultActiveKey="1">
        {ui[editList[0]].base.wordArt ? (
          <TabPane tab="设置" key="1">
            <div style={{ padding: "0 10px" }}>
              <Form>
                <TextLink />
              </Form>
            </div>
          </TabPane>
        ) : (
          <TabPane tab="内容" key="1">
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
          <TabPane tab="设置" key="2">
            <div style={{ padding: "0 10px" }}>
              <Form>
                <TextColor />
                <TextLink />
              </Form>
            </div>
          </TabPane>
        )}
      </Tabs>
    </div>
  );
});

export default TextEdit;
