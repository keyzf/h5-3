import * as React from 'react';
import Divider from 'antd/lib/divider';
import Tag from 'antd/lib/tag';
import {
  HorizontalTextExample,
  VerticalTextExample,
} from './ui/example/example';
import TitleTextUi from '../../routes/ui/text/title';
import ParagraphTextUi from '../../routes/ui/text/paragraph';

interface State {
  type: string;
}

class ChooseText extends React.PureComponent<null, State> {
  state = {
    type: 'title',
  };

  /**
   * 向ui 数据源中添加ui 数据
   * @param name 名称
   */
  addUiData = (name: string) => {
    switch (name) {
      case 'horizontal':
        return '';
      case 'vertical':
        return '';
    }
  };

  render() {
    const { CheckableTag } = Tag;
    const { type } = this.state;
    const ShowType = () => {
      switch (this.state.type) {
        case 'title':
          return <TitleTextUi/>;
        case 'paragraph':
          return <ParagraphTextUi/>;
      }
    };
    return (
      <div className={'content'}>
        <div
          className={'chooseUi_hover'}
          onClick={this.addUiData.bind(this, 'horizontal')}
        >
          <HorizontalTextExample/>
        </div>
        <div
          className={'chooseUi_hover'}
          onClick={this.addUiData.bind(this, 'vertical')}
        >
          <VerticalTextExample/>
        </div>
        <Divider/>
        <div style={{ padding: '0 3px' }}>
          <CheckableTag
            onChange={() => {
              this.setState({ type: 'title' });
            }}
            checked={type === 'title'}
          >
            标题
          </CheckableTag>
          <CheckableTag
            onChange={() => {
              this.setState({ type: 'paragraph' });
            }}
            checked={type === 'paragraph'}
          >
            段落
          </CheckableTag>
        </div>
        <Divider>分类</Divider>
        <ShowType/>
      </div>
    );
  }
}

export default ChooseText;
