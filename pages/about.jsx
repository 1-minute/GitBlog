import React from 'react';
import Layout from '../components/Layout';
import UserLayout from '../components/Layout/UserLayout';
import MarkdownContent from '../components/MarkdownContent';
import axios from 'axios';

const User = ({ profile, about, pathname }) => (
  <Layout>
    <UserLayout profile={profile} pathname={pathname}>
      <MarkdownContent markdown={about} />
    </UserLayout>
  </Layout>
);

User.getInitialProps = async ({ query, pathname }) => {
  const { username } = query;
  const profileResponse = await axios.get(
    `${process.env.API_URL}/api/v1/users/${username}/profile`,
  );
  const aboutResponse = await axios.get(
    `${process.env.API_URL}/api/v1/users/${username}/about`,
  );
  return {
    profile: profileResponse.data,
    about: aboutResponse.data.content,
    pathname,
  };
};

export default User;
