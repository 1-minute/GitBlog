import React from 'react';
import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 300px;
  border-right: 1px solid #ddd;
`;

const Sidebar = ({ children }) => <SidebarWrapper>{children}</SidebarWrapper>;

export default Sidebar;
