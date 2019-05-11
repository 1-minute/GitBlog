import React from 'react';
import Layout from '../components/Layout';
import UserLayout from '../components/Layout/UserLayout';
import axios from 'axios';
import ReactGist from 'react-gist';

const Gist = ({ profile, pathname, gists }) => (
  <Layout>
    <UserLayout profile={profile} pathname={pathname}>
      {gists.map((gist) => (
        <ReactGist id={gist} key={gist} />
      ))}
    </UserLayout>
  </Layout>
);

Gist.getInitialProps = async ({ query, pathname }) => {
  const { username } = query;
  const profileResponse = await axios.get(
    `${process.env.API_URL}/api/v1/users/${username}/profile`,
  );
  const gistResponse = await axios.get(
    `${process.env.API_URL}/api/v1/users/${username}/gist`,
  );
  return {
    profile: profileResponse.data,
    gists: gistResponse.data.urls,
    pathname,
  };
};

export default Gist;
