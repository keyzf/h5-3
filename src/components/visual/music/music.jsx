import React from 'react';
import { RotateAtom } from './rotat_animation';
import { Map } from 'immutable';
import ComponentLocation from '../../../app/model/visual/component-location';
import { choose_action, select_action } from '../../../redux/action';
import { connect } from 'react-redux';

/**
 * 音乐组件
 */
class MusicComponent extends React.Component {
  choose = (number, data) => {
    this.props.choose_upData(
      Map({ number: number, data: data }),
      Map({
        content: true,
        choose: true,
      }),
      false
    );
  };

  render() {
    return (
      <RotateAtom>
        {this.props.choose ? (
          <div style={{ border: '1px grey solid' }}>
            <ComponentLocation>
              <span>
                <i
                  className={'iconfont icon-yinlemusic214'}
                  style={{ color: 'red' }}
                  onClick={this.choose.bind(
                    this,
                    this.props.index,
                    this.props.data
                  )}
                />
              </span>
            </ComponentLocation>
          </div>
        ) : (
          <span>
            <ComponentLocation>
              <span>
                <i
                  className={'iconfont icon-yinlemusic214'}
                  style={{ color: 'red' }}
                  onClick={this.choose.bind(
                    this,
                    this.props.index,
                    this.props.data
                  )}
                />
              </span>
            </ComponentLocation>
          </span>
        )}
      </RotateAtom>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    choose_upData: (data, meta, error) =>
      dispatch(choose_action(data, meta, error)),
    select_upData: (data, meta, error) =>
      dispatch(select_action(data, meta, error)),
  };
};

// hoc 包装组件
export default connect('', mapDispatchToProps)(MusicComponent);
