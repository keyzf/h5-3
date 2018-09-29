import * as React from 'react';
import Divider from 'antd/lib/divider';
import Tag from 'antd/lib/tag';
import ExampleText from './ui/example/_ExampleText';
import TitleTextUi from '../../routes/ui/text/title';
import ParagraphTextUi from '../../routes/ui/text/paragraph';

interface State {
  type: string;
}

export default class ChooseText extends React.Component<any, State> {
  state = {
    type: 'title',
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
        <ExampleText/>
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
        <Divider>选择组件</Divider>
        <ShowType/>
      </div>
    );
  }
}

