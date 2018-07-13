import React, { PureComponent } from 'react';
import connect from '../../redux/decorator';
import range from 'lodash.range';
import LazyLoad from 'react-lazyload';
import style from './img_lazy_choose.module.scss';
import { public_img_api } from '../../api/public_img.api';

@connect
export default class ImgLibraryLazyFactory extends PureComponent {
  state = {
    number: '',
    length: 1,
    img_library: '',
  };

  componentWillMount() {
    public_img_api(0, this.props.childtype).then(
      data => {
        let sum = '';
        if (data.sum % 30 !== 0) {
          sum = data.sum / 40 + 1;
        } else {
          sum = data.sum / 30;
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
    const $$up_recode = this.props.user_img_value.data;
    this.props.upData('USER_IMG', {
      upload_library: $$up_recode.get('upload_library'),
      choose_url: img_url,
    });
  };

  render() {
    const $$up_recode = this.props.user_img_value.data;
    const ShowPublicImg = props => {
      if (this.state.length === props.index) {
        public_img_api(0, this.props.childtype).then(
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
        <React.Fragment>
          {this.state.img_library.map((data, index) => {
            return (
              <div
                className={'flex_1'}
                onClick={this.choose_img.bind(this, data.url)}
                key={index}
              >
                <div
                  className={
                    data.url === $$up_recode.get('choose_url')
                      ? style.part_active
                      : style.part_choose
                  }
                >
                  <div className={style.img_show}>
                    <img className={style.img} src={data.url} alt={'img'} />
                  </div>
                </div>
              </div>
            );
          })}
        </React.Fragment>
      );
    };
    return (
      <React.Fragment>
        <div className={'response_flex'}>
          {range(this.state.number).map((data, index) => {
            return (
              <LazyLoad height={400} key={index} overflow once>
                <ShowPublicImg index={index} name={this.props.childtype} />
              </LazyLoad>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
