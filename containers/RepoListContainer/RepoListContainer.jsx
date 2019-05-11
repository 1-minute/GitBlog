import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as repoActions from '../../store/repo/actions';
import RepoList from '../../components/RepoList/RepoList';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import Router from 'next/router';

const ButtonWrapper = styled.p`
  margin: 10px 0;
  text-align: right;
`;

class RepoListContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { RepoActions, username } = this.props;
    RepoActions.repoListRequest(username);
  }

  handleClick() {
    const { RepoActions, repos, username, selectedRepo } = this.props;
    RepoActions.saveRepoRequest({
      user: username,
      repo: repos.find((repo) => repo.id === selectedRepo).name,
      callback: () => {
        Router.push(`/${username}`);
      },
    });
  }

  render() {
    const { repos, selectedRepo, RepoActions } = this.props;
    return (
      <>
        <RepoList
          repos={repos}
          selectedRepo={selectedRepo}
          onClick={RepoActions.repoSelect}
        />
        <ButtonWrapper>
          <Button type='success' label='Save' onClick={this.handleClick} />
        </ButtonWrapper>
      </>
    );
  }
}

export default connect(
  (state) => ({
    repos: state.repo.repoList,
    selectedRepo: state.repo.selectedRepo,
  }),
  (dispatch) => ({
    RepoActions: bindActionCreators(repoActions, dispatch),
  }),
)(RepoListContainer);
