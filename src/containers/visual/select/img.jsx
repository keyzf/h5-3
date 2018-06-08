import React from "react";
import { Divider } from "antd";
import { List, Map } from "immutable";
import { connect } from "react-redux";
import QueueAnim from "rc-queue-anim";
import { choose_action, select_action } from "../../../redux/action";
import {
  CarouselImgTemplate,
  GridImgTemplate,
  ListImgTemplate,
  SliderImgTemplate,
  UpImgTemplate
} from "../../../ui/visual/template/img";
import {
  $$carousel_img_database,
  $$grid_img_database,
  $$list_img_database,
  $$slider_img_database,
  $$single_img_database
} from "../../../ui/visual/components/img_database";

class ImgSelect extends React.Component {
  //将选择的组件数据加入数组中
  addAnArray = data => {
    // 将选择的组件塞进老数组中，从而得到新数组
    const select_up_data = this.props.select_value.data.push(data);
    // 更新核心数组
    this.props.select_upData(select_up_data, "meta", false);
    // 更新选择组件
    this.props.choose_upData(
      Map({ number: select_up_data.size - 1, data: data }),
      Map({ content: true, choose: true }),
      false
    );
  };

  render() {
    // 将核心组件模板与数据列成数组
    const $$template_data = List([
      [<UpImgTemplate />, $$single_img_database],
      [<GridImgTemplate />, $$grid_img_database],
      [<ListImgTemplate />, $$list_img_database],
      [<SliderImgTemplate />, $$slider_img_database],
      [<CarouselImgTemplate />, $$carousel_img_database]
    ]);
    return (
      <QueueAnim delay={200} type={'bottom'}>
        {$$template_data.map((data, index) => {
          return (
            <div
              className={"components_hover"}
              key={index}
              onClick={this.addAnArray.bind(this, data[1])}
            >
              {data[0]}
            </div>
          );
        })}
        <Divider orientation="left">设计师推荐</Divider>
      </QueueAnim>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.select_reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImgSelect);
