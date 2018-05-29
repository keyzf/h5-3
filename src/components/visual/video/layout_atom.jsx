import styled from 'styled-components';

export const VideoLayoutAtom = styled.div`
  // 定位
  position: ${props =>
    props.top !== 0 ||
    props.left !== 0 ||
    props.right !== 0 ||
    props.bottom !== 0
      ? 'relative'
      : ''};
  // 层级
  z-index: ${props => props.depth};
  // 定位位置
  top: ${props => (props.top === 0 ? null : props.top + 'px')};
  left: ${props => (props.left === 0 ? null : props.left + 'px')};
  right: ${props => (props.right === 0 ? null : props.right + 'px')};
  bottom: ${props => (props.bottom === 0 ? null : props.bottom + 'px')};
  // 内边距
  padding-left: ${props => props.pl + 'px'};
  padding-right: ${props => props.pr + 'px'};
  padding-bottom: ${props => props.pb + 'px'};
  padding-top: ${props => props.pt + 'px'};
`;
