import * as React from 'react';
import VisualWeb from '../routes/visual/visual';
import PreviewWeb from '../routes/preview/preview';
import ReleaseWeb from '../routes/release/release';
import { inject, observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { IRootStore } from '../store/root-store';

interface IProps {
  store?: IRootStore
}

interface IState {}

@inject('store')
@observer
class App extends React.Component<IProps, IState> {
  render() {
    const { state } = this.props.store;
    const Components = {
      v: <VisualWeb/>,
      p: <PreviewWeb/>,
      r: <ReleaseWeb/>,
    };
    const JumpPage = Components[state];
    return (
      <React.Fragment>
        {JumpPage}
        <DevTools/>
      </React.Fragment>
    );
  }
}

export default App;

