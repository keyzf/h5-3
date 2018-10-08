import * as React from 'react';
import Spin from 'antd/lib/spin';
import loadableVisibility from 'react-loadable-visibility/loadable-components';


const ParagraphTextUi = loadableVisibility(() => import('../../../components/resources/text/ui/paragraph/_ParagraphText'), {
  LoadingComponent: () => (
    <div className={'center'}>
      <Spin tip={'玩命加载中...'} size="large"/>
    </div>
  ),
});

export default ParagraphTextUi;

