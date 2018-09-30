import styled from '../../../styled_c';

const UiPosition = styled<{
  width: number;
  height: number;
  rotate: number;
  left: number;
  top: number;
  zIndex: number;
}, 'div'>('div')`
   position: absolute;

    // 动画移动
  transform: rotate(${props => props.rotate + 'deg'});
    // 定位
  left: ${props => props.left + 'px'};
  top: ${props => props.top + 'px'};
  z-index: ${props => props.zIndex}
  // 长宽
  width: ${props => props.width + 'px'};
  height: ${props => props.height + 'px'};

  overflow: hidden;
`;

export default UiPosition;
