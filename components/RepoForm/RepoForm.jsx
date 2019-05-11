import React from 'react';
import styled from 'styled-components';
import Input from '../common/Input';

const RepoFormWrapper = styled.div`
  margin: 10px 0;
`;

const RepoForm = ({ inputText, onChange }) => (
  <RepoFormWrapper>
    <Input
      type='text'
      placeholder='Input repository name'
      value={inputText}
      onChange={(e) => onChange(e.target.value)}
    />
  </RepoFormWrapper>
);

export default RepoForm;
