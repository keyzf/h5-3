import * as React from "react";
import { Form, Popover, Slider } from "antd";
import { TwitterPicker } from "react-color";
import Store from "../../../typing/store";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useCallback } from "react";


const PictureRadius = React.memo(() => {
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

  const changeRadius = e => {
    dispatch({ type: "PICTURE_VALUE", payload: { radius: e } });
  };

  const FormItem = Form.Item;
  const formItemLayout = {
    labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
    wrapperCol: {
      xl: { span: 17, offset: 1 },
      lg: { span: 18, offset: 1 }
    }
  };
  const radius = ui[editList[0]].base.radius;

  return (
    <FormItem label={"圆角"} {...formItemLayout}>
      <Slider value={radius} onChange={changeRadius}/>
    </FormItem>
  );
});


export default PictureRadius;
