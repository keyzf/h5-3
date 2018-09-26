import * as React from 'react';
import message from 'antd/lib/message';

interface Props {
  children: object;
  name?: string;
}

/**
 * 将所有数据提交给后台
 * 接收样式：
 * 1. 保存按钮
 * 2. 预览按钮
 * 3. 发布按钮
 */
class SaveAllData extends React.Component<Props, null> {
  /**
   * 将数据提交给后台，并通过name进行不同的操作
   */
  toBackEnd = () => {
    switch (this.props.name) {
      case 'preview':
        return '';
      case 'release':
        return '';
      default:
        return message.success('数据保存成功');
    }
  };

  render() {
    return (
      <div onClick={this.toBackEnd} style={{ color: 'white' }}>
        {this.props.children}
      </div>
    );
  }
}

export default SaveAllData;
