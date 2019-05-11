import React from 'react';
import styled from 'styled-components';

const RepoListWrapper = styled.div`
  height: 500px;
  overflow: auto;
`;

const List = styled.ul``;

const ListItem = styled.li`
  cursor: pointer;
  padding: 10px;
  &.active {
    background: #e0e0e0;
  }
`;

const RepoHeading = styled.h1`
  font-size: 18px;
`;

const RepoDescription = styled.span`
  font-size: 14px;
  color: #5b5b5b;
`;

const RepoList = ({ repos, selectedRepo, onClick }) => (
  <RepoListWrapper>
    <List>
      {repos.map(({ id, name, description }) => (
        <ListItem
          onClick={() => onClick(id)}
          key={id}
          className={`${selectedRepo === id ? 'active' : ''}`}>
          <RepoHeading>{name}</RepoHeading>
          <RepoDescription>{description}</RepoDescription>
        </ListItem>
      ))}
    </List>
  </RepoListWrapper>
);

export default RepoList;
