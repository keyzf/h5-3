import * as React from 'react';
import Spin from 'antd/lib/spin';
import loadableVisibility from 'react-loadable-visibility/loadable-components';


const ReleaseWeb = loadableVisibility(() => import('../../app/release'), {
  LoadingComponent: () => (
    <div style={{ height: '100vh' }} className={'center'}>
      <Spin tip={'玩命加载中...'} size="large"/>
    </div>
  ),
});

export default ReleaseWeb;
