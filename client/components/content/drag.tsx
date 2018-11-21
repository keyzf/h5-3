import * as React from "react";
import { Menu, Dropdown, Icon } from "antd";
import { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import RenderUi from "../common/renderUi";
import ResizableRect from "../../tools/drag/ResizableRect";
import Store from "../../typing/store";

const ContentDrag = React.memo(() => {
  const dispatch = useDispatch();
  const state = (state: Store) => ({
    editList: state.edit.number,
    ui: state.ui
  });
  const { editList, ui } = useMappedState(useCallback(state, []));
  const uiAction = useCallback(
    (type, data) =>
      dispatch({ type: "UI_ACTION", payload: { type: type, data: data } }),
    []
  );
  const uiChoose = useCallback(
    (data: number[]) => dispatch({ type: "UI_CHOOSE", payload: data }),
    []
  );

  // 多选设置
  const choice = (index: number, event) => {
    event.persist();
    if (event.shiftKey) {
      const editorList: number[] = [...editList];
      editorList.splice(index, 1);
      uiChoose(editorList);
    }
  };

  // 旋转组件角度
  const handleRotate = (rotateAngle: number) => {
    uiAction("rotate", rotateAngle);
  };

  // 调整组件尺寸
  const handleResize = (style: { top; left; width; height }): void => {
    const { top, left, width, height } = style;
    uiAction("resize", { top, left, width, height });
  };

  // 组件移动
  const handleDrag = (deltaX: number, deltaY: number): void => {
    uiAction("drag", { deltaY, deltaX });
  };

  // 右键事件
  const contextMenu = (e: { key }): void => {
    switch (e.key) {
      case `1`:
        uiAction("copy", "");
        break;
      case `2`:
        uiAction("del", "");
        break;
      case `3`:
        uiAction("lock", "");
        uiChoose([]);
        break;
      case `4`:
        uiAction("layout_up", "");
        break;
      case `5`:
        uiAction("layout_down", "");
        break;
    }
  };

  const menu = (
    <Menu onClick={e => contextMenu(e)}>
      <Menu.Item key={1}>
        <Icon type="copy" theme="outlined"/>
        复制 Ctrl+c
      </Menu.Item>
      <Menu.Item key={2}>
        <Icon type="delete" theme="outlined"/>
        删除 Delete
      </Menu.Item>
      <Menu.Item key={3}>
        <Icon type="lock" theme="outlined"/>
        锁定 Ctrl+L
      </Menu.Item>
      <Menu.Item key={4}>
        <Icon type="arrow-up" theme="outlined"/>
        图层上移
      </Menu.Item>
      <Menu.Item key={5}>
        <Icon type="arrow-down" theme="outlined"/>
        图层下移
      </Menu.Item>
    </Menu>
  );

  return (
    <React.Fragment>
      {editList.map((data: number, index: number) => {
        return (
          <Dropdown overlay={menu} trigger={["contextMenu"]} key={index}>
            <span>
              <ResizableRect
                onMouseDown={e => choice(index, e)}
                left={ui[data].position.left}
                top={ui[data].position.top}
                width={ui[data].position.width}
                height={ui[data].position.height}
                zIndex={ui[data].position.zIndex}
                rotateAngle={ui[data].position.rotate}
                zoomable="n, w, s, e, nw, ne, se, sw"
                onRotate={handleRotate}
                onResize={handleResize}
                onDrag={handleDrag}
              >
                <span
                  style={{
                    width: "100%",
                    height: "100%",
                    boxSizing: "border-box",
                    pointerEvents: "none",
                    userSelect: "none",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <RenderUi data={ui[data]}/>
                </span>
              </ResizableRect>
            </span>
          </Dropdown>
        );
      })}
    </React.Fragment>
  );
});

export default ContentDrag;
