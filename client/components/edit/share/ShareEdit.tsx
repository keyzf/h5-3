import * as React from "react";
import { Form, Input, Divider, Row, Col } from "antd";
import { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import Store from "../../../typing/store";
import ImgModel from "../../common/imgModel";
import { css } from "glamor";

const ShareEdit = React.memo(() => {
  const dispatch = useDispatch();
  const { title, desc, cover } = useMappedState(
    useCallback(
      (state: Store) => ({
        title: state.share.title,
        desc: state.share.desc,
        cover: state.share.cover
      }),
      []
    )
  );
  const changeCover = (url: any) => {
    dispatch({ type: "SHARE_VALUE", payload: { cover: url } });
  };

  const shareValueChange = (e: any) =>
    dispatch({
      type: "SHARE_VALUE",
      payload: { [e.target.name]: e.target.value }
    });

  const scrollbar = css({
    width: "100%",
    height: "calc(100vh - 90px)",
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
    <div style={{ padding: "20px 10px 0" }} {...scrollbar}>
      <Form>
        <FormItem label={"标题"} {...formLayout}>
          <Input
            name={"title"}
            value={title}
            placeholder={"请输入标题"}
            onChange={e => shareValueChange(e)}
          />
        </FormItem>
        <FormItem label={"描述"} {...formLayout}>
          <Input.TextArea
            name={"desc"}
            value={desc}
            placeholder={"请输入描述"}
            rows={3}
            onChange={e => shareValueChange(e)}
          />
        </FormItem>
        <FormItem label={"图片"} {...formLayout}>
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center"
            }}
          >
            <Row>
              <Col span={12}>
                <ImgModel choose={cover} imgChange={changeCover}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      border: "1px solid black"
                    }}
                  >
                    <img
                      src={`${
                        cover
                          ? cover
                          : "http://src.e7wei.com/0.2823198691104869.png"
                      }`}
                      width={"100%"}
                      height={"100%"}
                      alt={"img"}
                    />
                  </div>
                </ImgModel>
              </Col>
              <Col span={12}>
                <div>点击更换图片</div>
                <div>200*200像素</div>
              </Col>
            </Row>
          </div>
        </FormItem>
      </Form>
      <Divider>示例</Divider>
      <img
        alt="img"
        src="http://src.e7wei.com/0.6405794268218221.png"
        width="100%"
        height="90"
      />
    </div>
  );
});

/**
 * @desc antd 组件拆分
 */
const FormItem = Form.Item;

/**
 * @desc from 布局
 */
const formLayout = {
  labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
  wrapperCol: {
    xl: { span: 17, offset: 1 },
    lg: { span: 18, offset: 1 }
  }
};

export default ShareEdit;
