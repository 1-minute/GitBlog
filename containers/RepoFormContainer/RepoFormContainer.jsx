import React from 'react';
import RepoForm from '../../components/RepoForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as repoActions from '../../store/repo/actions';

const RepoFormContainer = ({ inputText, RepoActions }) => {
  const { searchInputChange } = RepoActions;
  return <RepoForm onChange={searchInputChange} inputText={inputText} />;
};

export default connect(
  (state) => ({
    inputText: state.repo.repoSearchInput,
  }),
  (dispatch) => ({
    RepoActions: bindActionCreators(repoActions, dispatch),
  }),
)(RepoFormContainer);
