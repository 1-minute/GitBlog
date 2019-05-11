import React from 'react';
import Layout from '../components/Layout';
import UserLayout from '../components/Layout/UserLayout';
import PageHeader from '../components/PageHeader';
import MarkdownContent from '../components/MarkdownContent';
import TagList from '../components/TagList';
import Gap from '../components/common/Gap';
import axios from 'axios';

const Post = ({ profile, post, pathname }) => (
  <Layout>
    <UserLayout profile={profile} pathname={pathname}>
      <PageHeader>{post.title}</PageHeader>
      <Gap n={30} />
      <MarkdownContent markdown={post.body} />
      <Gap n={30} />
      <TagList tags={post.labels} />
      <Gap n={30} />
    </UserLayout>
  </Layout>
);

Post.getInitialProps = async ({ query, pathname }) => {
  const { username, postId } = query;
  const profileResponse = await axios.get(
    `${process.env.API_URL}/api/v1/users/${username}/profile`,
  );
  const postResponse = await axios.get(
    `${process.env.API_URL}/api/v1/users/${username}/issue/${postId}`,
  );
  return {
    profile: profileResponse.data,
    post: postResponse.data,
    pathname,
  };
};

export default Post;
