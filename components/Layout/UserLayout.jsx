import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import UserProfile from '../UserProfile';
import UserMenu from '../UserMenu';
import Sidebar from '../common/Sidebar';

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  width: calc(100% - 350px);
  padding: 1.75rem;
`;

const UserLayout = ({ profile, children, pathname }) => (
  <Container>
    <Wrapper>
      <Sidebar>
        <UserProfile {...profile} />
        <UserMenu username={profile.login} pathname={pathname} />
      </Sidebar>
      <Content>{children}</Content>
    </Wrapper>
  </Container>
);

export default UserLayout;
