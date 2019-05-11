import React from 'react';
import Layout from '../components/Layout';
import Container from '../components/common/Container';
import PageHeader from '../components/PageHeader';
import Gap from '../components/common/Gap';
import RepoListContainer from '../containers/RepoListContainer';
import RepoFormContainer from '../containers/RepoFormContainer';

const Repo = ({ username }) => {
  return (
    <Layout>
      <Container>
        <Gap n={30} />
        <PageHeader>Select a Blog repository</PageHeader>
        <RepoFormContainer />
        <RepoListContainer username={username} />
      </Container>
    </Layout>
  );
};

Repo.getInitialProps = ({ query }) => {
  return {
    username: query.username,
  };
};

export default Repo;
