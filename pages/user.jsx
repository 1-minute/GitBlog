import React from 'react';
import Layout from '../components/Layout';
import UserLayout from '../components/Layout/UserLayout';
import UserPost from '../components/UserPost';
import axios from 'axios';

const User = ({ profile, posts, pathname }) => (
  <Layout>
    <UserLayout profile={profile} pathname={pathname}>
      <UserPost posts={posts} username={profile.login} />
    </UserLayout>
  </Layout>
);

User.getInitialProps = async ({ query, pathname }) => {
  const { username } = query;
  const profileResponse = await axios.get(
    `${process.env.API_URL}/api/v1/users/${username}/profile`,
  );
  const postResponse = await axios.get(
    `${process.env.API_URL}/api/v1/users/${username}/issues`,
  );
  console.log(profileResponse.data);
  return {
    profile: profileResponse.data,
    posts: postResponse.data,
    pathname,
  };
};

export default User;
