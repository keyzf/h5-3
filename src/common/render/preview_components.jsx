import React from 'react';
import HTextPreview from '../../ui/preview/text/horizontal_components';
import VTextPreview from '../../ui/preview/text/vertical_components';

export const preview_render_component = data => {
  // 获取组件名称，通过组件名称进行匹配
  switch (data.get('customize').get('name')) {
    /**==============文本类============**/
    case 'vertical_text':
      return <VTextPreview data={data} />;
    case 'horizontal_text':
      return <HTextPreview data={data} />;
    default:
      return '';
  }
};
