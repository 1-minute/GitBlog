import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css?family=Roboto');
`;

const Layout = ({ children }) => (
  <div>
    <GlobalStyle />
    <Header />
    {children}
  </div>
);

export default Layout;
