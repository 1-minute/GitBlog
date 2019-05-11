import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Banner from '../components/Banner';
import { FaGithub } from 'react-icons/fa';

const GithubButton = styled.a`
  border-radius: 3px;
  background: #5b5b5b;
  color: white;
  padding: 10px;
  border: none;
  font-size: 24px;
  margin-top: 15px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

const Index = () => (
  <Layout>
    <Banner imagePath='/static/images/banner1.jpeg'>
      <div>You can make technical blog for developer only 1 minute</div>
      <GithubButton href='/api/v1/auth/github'>
        <FaGithub />
        <span style={{ marginLeft: '10px' }}>Start with Github</span>
      </GithubButton>
    </Banner>
  </Layout>
);

export default Index;
