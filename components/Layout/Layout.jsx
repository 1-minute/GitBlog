import React from 'react';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    {children}
  </div>
);

export default Layout;
