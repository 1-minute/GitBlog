import React from 'react';
import Container from '../components/common/Container';
import UserProfile from '../components/UserProfile';
import UserMenu from '../components/UserMenu';
import Sidebar from '../components/common/Sidebar';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import axios from 'axios';

const Wrapper = styled.div`
  display: flex;
`;

const Content = styled.div`
  flex: 2;
  padding: 1.75rem;
`;

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const User = ({ profile }) => (
  <Container>
    <GlobalStyle />
    <Wrapper>
      <Sidebar>
        <UserProfile {...profile} />
        <UserMenu />
      </Sidebar>
      <Content>Content</Content>
    </Wrapper>
  </Container>
);

User.getInitialProps = async ({ query }) => {
  const { username } = query;
  const profileResponse = await axios.get(
    `http://localhost:9090/api/v1/users/${username}/profile`,
  );
  return {
    profile: profileResponse.data,
  };
};

export default User;
