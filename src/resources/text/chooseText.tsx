import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Divider, Tag } from 'antd';
// import TitleTextUi from "../../routes/ui/text/title";
// import ParagraphTextUi from "../../routes/ui/text/paragraph";
import random from '../../utils/random';
import { $$horizontal_text, $$vertical_text } from './text.db';
import {
  HorizontalTextExample,
  VerticalTextExample,
} from './ui/example/example';

interface IProps {
  store?: any;
}

interface IState {
  type: string;
}

@inject('store')
@observer
class ChooseText extends Component<IProps, IState> {
  state = {
    type: 'title',
  };

  /**
   * 向ui 数据源中添加ui 数据
   * @param name 名称
   */
  addUiData = (name: string) => {

    // const { action } = this.props;
    // switch (name) {
    //   case 'horizontal':
    //     const h_data = { ...$$horizontal_text(random()) };
    //     return action.addUi({ ...h_data });
    //   case 'vertical':
    //     const v_data = { ...$$vertical_text(random()) };
    //     return action.addUi({ ...v_data });
    // }
  };

  render() {
    const { CheckableTag } = Tag;
    const { type } = this.state;
    // const ShowType = () => {
    //   switch (this.state.type) {
    //     case "title":
    //       return <TitleTextUi />;
    //     case "paragraph":
    //       return <ParagraphTextUi />;
    //   }
    // };
    return (
      <div className={'content'}>
        {/*<div*/}
        {/*className={'chooseUi_hover'}*/}
        {/*onClick={this.addUiData.bind(this, 'horizontal')}*/}
        {/*>*/}
        {/*<HorizontalTextExample/>*/}
        {/*</div>*/}
        {/*<div*/}
        {/*className={'chooseUi_hover'}*/}
        {/*onClick={this.addUiData.bind(this, 'vertical')}*/}
        {/*>*/}
        {/*<VerticalTextExample/>*/}
        {/*</div>*/}
        <Divider/>
        <div style={{ padding: '0 3px' }}>
          <CheckableTag
            onChange={() => {
              this.setState({ type: 'title' });
            }}
            checked={type === 'title'}
          >
            排版
          </CheckableTag>
          <CheckableTag
            onChange={() => {
              this.setState({ type: 'paragraph' });
            }}
            checked={type === 'paragraph'}
          >
            促销
          </CheckableTag>
          <CheckableTag
            onChange={() => {
              this.setState({ type: 'paragraph' });
            }}
            checked={type === 'paragraph'}
          >
            节日
          </CheckableTag>
          <CheckableTag
            onChange={() => {
              this.setState({ type: 'paragraph' });
            }}
            checked={type === 'paragraph'}
          >
            商务
          </CheckableTag>
          <CheckableTag
            onChange={() => {
              this.setState({ type: 'paragraph' });
            }}
            checked={type === 'paragraph'}
          >
            邀请函
          </CheckableTag>
          <CheckableTag
            onChange={() => {
              this.setState({ type: 'paragraph' });
            }}
            checked={type === 'paragraph'}
          >
            招聘
          </CheckableTag>
          <CheckableTag
            onChange={() => {
              this.setState({ type: 'paragraph' });
            }}
            checked={type === 'paragraph'}
          >
            招生
          </CheckableTag>
        </div>
        <Divider>分类</Divider>
        {/*<ShowType />*/}
      </div>
    );
  }
}

export default ChooseText;
