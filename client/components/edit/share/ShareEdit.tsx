import * as React from "react";
import { Form, Input, Divider } from "antd";
import { useCallback } from "react";
import { useDispatch, useMappedState } from "redux-react-hook";
import Store from "../../../typing/store";

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
  const shareValueChange = e =>
    dispatch({ type: "SHARE_VALUE", payload: { [e.target.name]: e.target.value } });

  return (
    <div style={{ padding: "20px 10px 0" }}>
      <Form>
        <FormItem label={"分享图片"} {...formLayout}>
          <div
            style={{
              height: "120px",
              width: "100%",
              border: "1px solid black"
            }}
          >
            <img
              src={`${
                cover ? cover : "http://src.e7wei.com/0.2823198691104869.png"
                }`}
              width={"100%"}
              height={"100%"}
              alt={"img"}
            />
          </div>
          🌲最佳尺寸:200*200像素
        </FormItem>
        <FormItem label={"分享标题"} {...formLayout}>
          <Input
            name={"title"}
            value={title}
            placeholder={"请输入标题"}
            onChange={e => shareValueChange(e)}
          />
        </FormItem>
        <FormItem label={"分享描述"} {...formLayout}>
          <Input.TextArea
            name={"desc"}
            value={desc}
            placeholder={"请输入描述"}
            rows={3}
            onChange={e => shareValueChange(e)}
          />
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
