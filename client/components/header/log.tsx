import * as React from "react";
import { Dropdown, Menu } from "antd";
import { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import Store from "../../typing/store";


const NavLog = React.memo(() => {
  const dispatch = useDispatch();
  const { log } = useMappedState(
    useCallback(
      (state: Store) => ({
        log: state.log
      }),
      []
    )
  );


  const onChange = ({ key }:any) => {
    if (key !== "-1") {
      dispatch({ type: "LOG_CHANGE", payload: key });
    }
  };

  const day = new Date().getDay();
  let todayData:any = [];
  let earlyDate:any = [];

  if (log.length) {
    log.map((data: { time:any }, index:any) => {
      if (day === new Date(data.time).getDay()) {
        todayData.push({ time: data.time, key: index });
      } else {
        earlyDate.push({ time: data.time, key: index });
      }
    });
  }


  const menu = (
    <Menu onClick={onChange}>
      {todayData.length ? (
        todayData.map((data: { time:any; key: number }, index:any) => {
          return index < 5 ? (
            <Menu.Item key={data.key}>
              {new Date(data.time).toLocaleTimeString()}
            </Menu.Item>
          ) : (
            ""
          );
        })
      ) : (
        <Menu.Item key={-1}>今日无记录</Menu.Item>
      )}
      <Menu.SubMenu title="更多记录" disabled={!earlyDate.length}>
        {earlyDate.map((data: { time:any; key: number }) => {
          return (
            <Menu.Item key={data.key}>
              {new Date(data.time).toLocaleString()}
            </Menu.Item>
          );
        })}
      </Menu.SubMenu>
    </Menu>
  );
  return (
    <Dropdown overlay={menu}>
      <div style={{ color: "white" }}>
        <i
          style={{ marginRight: "10px" }}
          className={" iconfont  icon-shouye"}
        />
        历史记录
      </div>
    </Dropdown>
  );
});

export default NavLog;


