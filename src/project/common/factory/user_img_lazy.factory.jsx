import React, { PureComponent } from 'react';
import connect from '../../redux/decorator';
import range from 'lodash.range';
import LazyLoad from 'react-lazyload';
import { Divider, Button, Tooltip } from 'antd';
import style from './img_lazy_choose.module.scss';
import UploadImgFactory from '../factory/upload_img_form.factory';
import { delete_api } from '../../api/delete.api';
import { user_img_api } from '../../api/user_img.api';

@connect
export default class UserImgLazyFactory extends PureComponent {
  state = {
    number: '',
    length: 1,
    img_library: [],
    // 上传图片
    upload: {
      upload: {
        value: '',
      },
    },
  };

  componentWillMount() {
    user_img_api(0).then(
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
    console.log();
    const $$up_recode = this.props.user_img_value.data;
    this.props.upData('USER_IMG', {
      upload_library: $$up_recode.get('upload_library'),
      choose_url: img_url,
    });
  };

  del = (mid, number) => {
    const $$up_recode = this.props.user_img_value.data;
    delete_api(mid).then(() => {
      this.props.upData('USER_IMG', {
        upload_library: $$up_recode.get('upload_library').delete(number),
        choose_url: $$up_recode.get('choose_url'),
      });
    });
  };

  render() {
    const $$up_recode = this.props.user_img_value.data;
    const ShowUserImg = props => {
      if (this.state.length === props.index) {
        user_img_api(props.index).then(
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
                      ? `${style.part_active}`
                      : `${style.part_choose}`
                  }
                >
                  <div className={style.img_show}>
                    <Tooltip
                      title={
                        <div onClick={this.del.bind(this, data.mid, index)}>
                          删除
                        </div>
                      }
                    >
                      <img className={style.img} src={data.url} alt={'img'} />
                    </Tooltip>
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
        {this.state.img_library.length ? (
          <React.Fragment>
            <div
              style={{ width: '100%', maxHeight: '400px', overflow: 'auto' }}
            >
              <div className={'response_flex'}>
                {$$up_recode.get('upload_library').size
                  ? $$up_recode.get('upload_library').map((data, index) => {
                      return (
                        <div
                          className={'flex_1'}
                          key={index}
                          onClick={this.choose_img.bind(this, data.get('url'))}
                        >
                          <div
                            className={
                              data.get('url') === $$up_recode.get('choose_url')
                                ? `${style.part_active}`
                                : `${style.part_choose}`
                            }
                          >
                            <div className={style.img_show}>
                              <Tooltip
                                title={
                                  <div
                                    onClick={this.del.bind(
                                      this,
                                      data.mid,
                                      index
                                    )}
                                  >
                                    删除
                                  </div>
                                }
                              >
                                <img
                                  className={style.img}
                                  src={data.get('url')}
                                  alt={'img'}
                                />
                              </Tooltip>
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : ''}

                {range(this.state.number).map((data, index) => {
                  return (
                    <LazyLoad height={450} key={index} overflow once>
                      <ShowUserImg index={index} />
                    </LazyLoad>
                  );
                })}
              </div>
            </div>
            <Divider />
            <div style={{ padding: '0 35%', width: '100%' }}>
              <Button
                onClick={this.props.closeModal}
                style={{ width: '100px', marginRight: '10px' }}
              >
                取消
              </Button>
              <Button
                onClick={this.props.closeModal}
                style={{ width: '100px', marginRight: '10px' }}
              >
                确定
              </Button>
            </div>
          </React.Fragment>
        ) : (
          <div style={{ textAlign: 'center', padding: '0 80px' }}>
            <img
              src={'http://src.e7wei.com/0.2823198691104869.png'}
              alt={'img'}
            />
            <br />
            <UploadImgFactory
              onChange={this.uploadChange}
              child={
                <Button type="dashed" style={{ width: '150px' }}>
                  种植素材
                </Button>
              }
              {...this.state.upload}
            />
          </div>
        )}
      </React.Fragment>
    );
  }
}
