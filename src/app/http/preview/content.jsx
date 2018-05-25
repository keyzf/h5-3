import React from 'react';
import ContentPreviewModel from '../../model/preview/preview_content';

class ContentPreviewView extends React.Component {
  render() {
    return (
      <div style={{ padding: '5% 32%', height: '100%' }}>
        <div className={'phone'}>
          <div className={'phone_header'} />
          <div className={'phone_content'}>
            <ContentPreviewModel />
          </div>
          <div className={'phone_footer'} />
        </div>
      </div>
    );
  }
}

export default ContentPreviewView;
