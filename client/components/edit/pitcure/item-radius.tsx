import * as React from "react";
import { Form,  Slider } from "antd";
import Store from "../../../typing/store";
import { useDispatch, useMappedState } from "redux-react-hook";
import { useCallback } from "react";


const PictureItemRadius = React.memo((props: { index: number }) => {
  const dispatch = useDispatch();
  const { editList, ui } = useMappedState(
    useCallback(
      (state: Store) => ({
        editList: state.edit.number,
        ui: state.ui[state.page.now],
      }),
      []
    )
  );

  const changeRadius = (e:any) => {
    dispatch({ type: "PICTURE_BASE_ITEM", payload: { index: props.index, data: { radius: e } } });
  };

  const FormItem = Form.Item;
  const formItemLayout = {
    labelCol: { xl: { span: 5, offset: 1 }, lg: { span: 5, offset: 1 } },
    wrapperCol: {
      xl: { span: 17, offset: 1 },
      lg: { span: 18, offset: 1 }
    }
  };
  const radius = ui[editList[0]].base[props.index].radius;

  return (
    <FormItem label={"圆角"} {...formItemLayout}>
      <Slider value={radius} onChange={changeRadius}/>
    </FormItem>
  );
});


export default PictureItemRadius;
