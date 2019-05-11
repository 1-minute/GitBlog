import React from 'react';
import styled from 'styled-components';

const ContainerWrapper = styled.div`
  max-width: 66.875rem;
  margin: 0 auto;
`;

const Container = ({ children }) => (
  <ContainerWrapper>{children}</ContainerWrapper>
);

export default Container;
