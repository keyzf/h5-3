import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import range from 'lodash.range';
import LazyLoad from 'react-lazyload';
import { redux_action } from '../../redux/action';
import { Row, Col } from 'antd';
import style from './img_lazy_choose.module.scss';
import { public_img } from '../../ajax/public_img';

class ImgLibraryLazyFactory extends PureComponent {
  state = {
    number: '',
    length: 1,
    img_library: '',
  };

  componentWillMount() {
    public_img(0, this.props.childtype).then(
      data => {
        let sum = '';
        if (data.sum % 40 !== 0) {
          sum = data.sum / 40 + 1;
        } else {
          sum = data.sum / 40;
        }
        this.setState({
          number: sum,
          img_library: data.list,
        });
      },
      function(error) {}
    );
  }

  choose_img = img_url => {
    const $$up_recode = this.props.upload_recode_value.data;
    this.props.upDate('UPLOAD_RECODE', {
      user_upload_img: $$up_recode.get('user_upload_img'),
      choose_img_url: img_url,
    });
  };

  render() {
    const $$up_recode = this.props.upload_recode_value.data;
    const ShowPublicImg = props => {
      if (this.state.length === props.index) {
        public_img(0, this.props.childtype).then(
          data => {
            this.setState({
              length: this.state.length + 1,
              img_library: data.list,
            });
          },
          function(error) {}
        );
      }
      return (
        <Row gutter={16}>
          {this.state.img_library.map((data, index) => {
            return (
              <Col
                span={4}
                style={{ margin: '0 0 5px 0', height: '60px' }}
                onClick={this.choose_img.bind(this, data.url)}
                key={index}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    display: 'inline-block',
                    verticalAlign: 'top',
                    marginBottom: '10px',
                    marginRight: '13px',
                    boxSizing: 'border-box',
                  }}
                  className={
                    data.url === $$up_recode.get('choose_img_url')
                      ? style.part_active
                      : style.part_choose
                  }
                >
                  <img
                    style={{
                      verticalAlign: 'middle',
                      maxWidth: '100%',
                      maxHeight: '100%',
                      margin: 'auto',
                    }}
                    src={data.url}
                    alt={'img'}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      );
    };
    return (
      <React.Fragment>
        {range(this.state.number).map((data, index) => {
          return (
            <LazyLoad
              once={true}
              throttle={100}
              height={400}
              key={index}
              overflow
            >
              <ShowPublicImg index={index} name={this.props.childtype} />
            </LazyLoad>
          );
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    img_library_value: state.img_library_reducer,
    upload_recode_value: state.upload_recode_reducer,
    id_value: state.user_id_reducer,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upDate: (name, data) => dispatch(redux_action(name, data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  ImgLibraryLazyFactory
);
