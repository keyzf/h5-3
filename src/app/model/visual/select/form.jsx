import React from 'react';
import { Divider } from 'antd';
import { connect } from 'react-redux';
import { choose_action, select_action } from '../../../../redux/action';
import { Map, fromJS } from 'immutable';
import { FormTemplate } from '../../../../components/visual/template/form';
import {
  $$form_database,
  $$form_item_database,
} from '../../../../database/components/form';

class FormSelect extends React.Component {
  transfer = data => {
    let img_data = $$form_database(data.name);
    // 给数据修改值
    img_data.customize.item = data.title.map((datas, index) =>
      $$form_item_database(data.decorator[index], datas, [
        '非常满意',
        '满意',
        '一般满意',
        '不满意',
      ])
    );

    // 将选择的组件塞进老数组中，从而得到新数组
    const select_up_data = this.props.select_value.data.push(fromJS(img_data));
    // 更新核心数组
    this.props.select_upData(select_up_data, 'meta', false);
    // 更新选择组件
    this.props.choose_upData(
      Map({ number: select_up_data.size - 1, data: fromJS(img_data) }),
      Map({
        content: true,
        choose: true,
      }),
      false
    );
  };

  render() {
    const form_data = {
      name: 'form',
      decorator: ['item_one', 'item_two', 'item_three', 'item_four'],
      title: [
        { value: '题目一' },
        { value: '题目二' },
        { value: '题目三' },
        { value: '题目四' },
      ],
    };
    return (
      <div>
        <div
          className={'components_hover'}
          onClick={this.transfer.bind(this, form_data)}
        >
          <FormTemplate />
        </div>
        <Divider orientation="left">设计师推荐</Divider>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    select_value: state.select_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
  };
};

// hoc
export default connect(mapStateToProps, mapDispatchToProps)(FormSelect);
