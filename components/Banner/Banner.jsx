import React from 'react';
import styled from 'styled-components';
import Overlay from './Overlay';

const BannerWrapper = styled.div`
  position: relative;
  height: 600px;
  background-image: url(${(props) => props.imagePath});
  background-size: cover;
  background-position: center;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.75);
    opacity: 1;
  }
`;

const Banner = ({ imagePath, children }) => (
  <BannerWrapper imagePath={imagePath}>
    <Overlay>{children}</Overlay>
  </BannerWrapper>
);

export default Banner;
