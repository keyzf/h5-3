import * as React from "react";
// @ts-ignore
import ReactQMap from "react-qmap";
import { useCallback, useState } from "react";
import { Select, Input, Form, Modal, Row, Col } from "antd";
import { useDispatch, useMappedState } from "redux-react-hook";
import Store from "../../../typing/store";

let maps: any, wMaps: any;
const PictureLink = React.memo(() => {
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


  const [state, setState] = useState({
    map: false,
    map_position: ""
  });

  /**
   * @desc 选择当前需要操作的链接
   * @param changeType
   */
  const onSelect = (changeType: string) => {
    dispatch({
      type: "PICTURE_VALUE",
      payload: {
        link: {
          type: changeType,
          url: ""
        }
      }
    });
    changeType === "map"
      ? setState({ map: true, map_position: state.map_position })
      : "";
  };

  /**
   * @desc  记录链接数据的更改
   * @param e
   */
  const onChangeValue = (e: any) => {
    dispatch({
      type: "PICTURE_VALUE",
      payload: {
        link: {
          type: ui[editList[0]].base.link.type,
          url: e.target.value
        }
      }
    });
  };

  /**
   * @desc 控制地图关闭
   */
  const onCancel = () => {
    setState({
      map: false,
      map_position: state.map_position
    });
  };

  /**
   * @desc 将新数据保存,并控制地图关闭
   */
  const onOK = () => {
    dispatch({
      type: "PICTURE_VALUE",
      payload: {
        link: {
          type: ui[editList[0]].base.link.type,
          url: state.map_position
        }
      }
    });
    setState({
      map: false,
      map_position: state.map_position
    });
  };

  /**
   * @desc 针对地图操作
   * @param map
   * @param wMap
   */
  const getMap = (map: any, wMap: any) => {
    maps = map;
    wMaps = wMap;
    // 点选地图坐标
    const marker = new wMap.Marker({
      position: map.getCenter(),
      map: map
    });
    wMap.event.addListener(map, "click", (event: any) => {
      marker.setPosition(event.latLng);
      setState({
        map: state.map,
        map_position: event.latLng
      });
    });
  };

  /**
   * @desc 地图搜索功能
   * @param name
   */
  const mapSearch = (name: string) => {
    document.getElementById("infoDiv").innerHTML = "";
    // 搜索
    let latlngBounds = new wMaps.LatLngBounds();
    const searchService = new wMaps.SearchService({
      //设置搜索范围为北京
      location: "南京",
      //设置动扩大检索区域。默认值true，会自动检索指定城市以外区域。
      autoExtend: true,
      //检索成功的回调函数
      complete: (results: any) => {
        //设置回调函数参数
        let pois = results.detail.pois;
        for (let i = 0, l = pois.length; i < l; i++) {
          let poi = pois[i];
          //扩展边界范围，用来包含搜索到的Poi点
          latlngBounds.extend(poi.latLng);
          let marker = new wMaps.Marker({
            map: maps,
            position: poi.latLng
          });
          setState({
            map: state.map,
            map_position: poi.latLng
          });
          marker.setTitle(i + 1);
        }
        //调整地图视野
        maps.fitBounds(latlngBounds);
      },
      //显示检索信息
      panel: document.getElementById("infoDiv"),
      map: maps
    });
    searchService.search(name);
  };

  // 表单布局样式
  const formItemLayout = {
    labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
    wrapperCol: {
      xl: { span: 17, offset: 1 },
      lg: { span: 18, offset: 1 }
    }
  };
  const type = ui[editList[0]].base.link.type;
  const url = ui[editList[0]].base.link.url;
  return (
    <React.Fragment>
      <Form.Item label="链接类型" {...formItemLayout}>
        <Select value={type} onChange={onSelect}>
          <Select.Option value="choose">请选择</Select.Option>
          <Select.Option value="web">网页</Select.Option>
          <Select.Option value="phone">电话</Select.Option>
          <Select.Option value="order">淘口令</Select.Option>
          <Select.Option value="map">地图</Select.Option>
        </Select>
      </Form.Item>
      {type === "web" ? (
        <Form.Item label="网页" {...formItemLayout}>
          <Input value={url} onChange={onChangeValue}/>
        </Form.Item>
      ) : (
        ""
      )}
      {type === "phone" ? (
        <Form.Item label="电话" {...formItemLayout}>
          <Input
            value={...url}
            placeholder="13100000000"
            onChange={onChangeValue}
          />
        </Form.Item>
      ) : (
        ""
      )}
      {type === "order" ? (
        <Form.Item label="淘口令" {...formItemLayout}>
          <Input.TextArea
            value={url}
            placeholder="请将淘口令复制至此处"
            rows={3}
            onChange={onChangeValue}
          />
        </Form.Item>
      ) : (
        ""
      )}
      {type === "map" ? (
        <Form.Item label="地图" {...formItemLayout}>
          <Input.TextArea
            rows={3}
            placeholder="坐标（xxx,xxx)"
            value={`${url ? url.lat ? url.lat + "," + url.lng : url : ""}`}
            onChange={onChangeValue}
          />
          <p
            onClick={() => {
              setState({ map: true, map_position: state.map_position });
            }}
            style={{ color: "rgb(64,145,247)", cursor: "pointer" }}
          >
            打开地图
          </p>
        </Form.Item>
      ) : (
        ""
      )}
      <Modal
        title="地图"
        width={800}
        okText={"确定"}
        cancelText={"取消"}
        visible={state.map}
        onOk={onOK}
        onCancel={onCancel}
      >
        <Input.Search
          placeholder="搜索具体地址"
          onSearch={mapSearch}
          enterButton
        />
        <br/>
        <br/>
        <Row gutter={6}>
          <Col span={8} style={{ height: "300px", overflow: "auto" }}>
            <p>搜索结果显示：</p>
            <div id="infoDiv"/>
          </Col>
          <Col span={16}>
            <ReactQMap
              center={{
                latitude: url ? url.lat : "32.05838",
                longitude: url ? url.lng : "118.79647"
              }}
              getMap={(map: any, wMap: any) => getMap(map, wMap)}
              initialOptions={{ zoomControl: true, mapTypeControl: true }}
              apiKey="xxxxxx-xxxxx-xxxxx-xxxxxx"
              style={{ height: 300 }}
            />
          </Col>
        </Row>
      </Modal>
    </React.Fragment>
  );
});

export default PictureLink;
