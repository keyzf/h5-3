import * as React from 'react';
import ReleaseMobile from '../../components/release/mobile';
import ReleasePc from '../../components/release/pc';

interface Props {
  vid: string;
  state: string;
}

class Release extends React.Component<Props, null> {
  render() {
    return (
      <React.Fragment>
        <ReleaseMobile/>
        <ReleasePc/>
      </React.Fragment>
    );
  }
}

export default Release;