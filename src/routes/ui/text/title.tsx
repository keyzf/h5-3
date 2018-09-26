import * as React from 'react';
import Spin from 'antd/lib/spin';
import loadableVisibility from 'react-loadable-visibility/loadable-components';


const TitleTextUi = loadableVisibility(() => import('../../../resources/text/ui/title/_TitleText'), {
  LoadingComponent: () => (
    <div className={'center'}>
      <Spin tip={'玩命加载中...'} size="large"/>
    </div>
  ),
});

export default TitleTextUi;

