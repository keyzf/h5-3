import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import range from 'lodash.range';
import LazyLoad from 'react-lazyload';
import { redux_action } from '../../redux/action';
import { $$api } from '../../api/api.database';
import axios from 'axios/index';
import { Row, Col } from 'antd';
import style from './img_lazy_choose.module.scss';

class ImgLibraryLazyFactory extends PureComponent {
  number = name => {
    const $$data = this.props.img_library_value.data;
    let number = '';
    $$data.get('list').map(data => {
      if (data.get('name') === name) {
        number = data.get('number');
      }
      return number;
    });
    return number;
  };

  choose_img = img_url => {
    const $$up_recode = this.props.upload_recode_value.data;
    this.props.upDate('UPLOAD_RECODE', {
      user_upload_img: $$up_recode.get('user_upload_img'),
      choose_img_url: img_url,
    });
  };

  render() {
    const $$data = this.props.img_library_value.data;
    const $$up_recode = this.props.upload_recode_value.data;
    const ShowPublicImg = props => {
      if ($$data.get('length') === props.index) {
        if ($$api.get('surroundings') === 'development') {
          axios({
            method: 'get',
            url: `${$$api.getIn(['development', 'public_img_other'])}${
              props.index
            }`,
          }).then(response => {
            this.props.upDate('IMG_LIBRARY', {
              img: response.data,
              length: $$data.get('length') + 1,
              list: $$data.get('list'),
            });
          });
        }
        if ($$api.get('surroundings') === 'produce') {
          let params = new URLSearchParams();
          const ajax_data = {
            page_number: props.index,
            name: props.name,
          };
          params.append('name', `${ajax_data}`);
          axios
            .post(`${$$api.getIn(['development', 'public_img_other'])}`, params)
            .then(response => {
              this.props.upDate('IMG_LIBRARY', {
                img: response.data,
                length: $$data.get('length') + 1,
                list: $$data.get('list'),
              });
            });
        }
      }
      return (
        <Row gutter={16}>
          {$$data.get('img').map((data, index) => {
            return (
              <Col
                span={4}
                style={{ margin: '0 0 5px 0', height: '60px' }}
                onClick={this.choose_img.bind(this, data.get('url'))}
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
                    data.get('url') === $$up_recode.get('choose_img_url')
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
                    src={data.get('url')}
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
        {range(this.number(this.props.name)).map((data, index) => {
          return (
            <LazyLoad
              once={true}
              throttle={100}
              height={400}
              key={index}
              overflow
            >
              <ShowPublicImg index={index} name={this.props.name} />
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
