import * as React from "react";
import { Col, Icon, Row } from "antd";
import { useDispatch } from "redux-react-hook";
import { useCallback } from "react";
import { useMappedState } from "redux-react-hook";
import ImgModel from "../../common/imgModel";
import Store from "../../../typing/store";

const BgEditImg = React.memo(() => {
  const dispatch = useDispatch();
  const { bg } = useMappedState(
    useCallback(
      (state: Store) => ({
        bg: state.bg
      }),
      []
    )
  );
  const changeImg = useCallback(
    (url: string) => dispatch({ type: "BG_VALUE", payload: { img: url } }),
    []
  );

  return (
    <Row gutter={16}>
      <Col span={8} style={{ marginBottom: "5px" }}>
        <ImgModel choose={bg.base.img} imgChange={changeImg}>
          <div
            style={{
              height: "60px",
              border: "1px solid black",
              borderRadius: "3px",
              padding: "10px 3px "
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              <Icon type="upload" theme="outlined" />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center"
              }}
            >
              上传图片
            </div>
          </div>
        </ImgModel>
      </Col>
      {imgList.map((data: string, index: number) => {
        return (
          <Col span={8} style={{ marginBottom: "5px" }} key={index}>
            <div
              onClick={() => changeImg(data)}
              style={{
                height: "60px",
                border: "1px solid black",
                borderRadius: "3px",
                background: `url(${data})`
              }}
            />
          </Col>
        );
      })}
    </Row>
  );
});

/**
 * @desc 系统自带背景图片
 */
const imgList = [
  "http://src.e7wei.com/0.5182970046062747.png",
  "http://src.e7wei.com/0.21293656213657686.png",
  "http://src.e7wei.com/0.9399785810363934.png",
  "http://src.e7wei.com/0.017314256564314734.png",
  "http://src.e7wei.com/0.8733457750857099.png",
  "http://src.e7wei.com/0.2633511981756784.png",
  "http://src.e7wei.com/0.06858509273754665.png",
  "http://src.e7wei.com/0.19132678881431509.png",
  "http://src.e7wei.com/0.8088298012566268.png",
  "http://src.e7wei.com/0.9293878801420654.png",
  "http://src.e7wei.com/0.7019754276704415.png",
  "http://src.e7wei.com/0.06444740452582765.png",
  "http://src.e7wei.com/0.4181801561048386.png",
  "http://src.e7wei.com/0.25534700484800354.png",
  "http://src.e7wei.com/0.8238020347899278.png",
  "http://src.e7wei.com/0.8236058044578007.png",
  "http://src.e7wei.com/0.5134087373905294.png",
  "http://src.e7wei.com/0.40632079362931695.png",
  "http://src.e7wei.com/0.5731551667623831.png",
  "http://src.e7wei.com/0.9002937599084637.png"
];

export default BgEditImg;
