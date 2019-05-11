import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as repoActions from '../../store/repo/actions';
import RepoList from '../../components/RepoList/RepoList';

class RepoListContainer extends Component {
  componentDidMount() {
    const { RepoActions, username } = this.props;
    RepoActions.repoListRequest(username);
  }

  render() {
    const { repos, selectedRepo, RepoActions } = this.props;
    return (
      <RepoList
        repos={repos}
        selectedRepo={selectedRepo}
        onClick={RepoActions.repoSelect}
      />
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
