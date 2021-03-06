import React from 'react';
import styled from 'styled-components';
import Container from '../common/Container';
import Link from 'next/link';

const HeaderWrapper = styled.header`
  background: #2b2b2b;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LogoWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 36px;
  height: 36px;
`;

const LogoText = styled.span`
  display: inline-block;
  font-family: 'Roboto';
  font-size: 26px;
  margin-left: 10px;
  color: #e0e0e0;
  cursor: pointer;
`;

const Header = () => (
  <HeaderWrapper>
    <Container>
      <HeaderContent>
        <LogoWrapper>
          <Logo src='/static/images/logo.png' />
          <Link href='/'>
            <LogoText>GitBlog</LogoText>
          </Link>
        </LogoWrapper>
      </HeaderContent>
    </Container>
  </HeaderWrapper>
);

export default Header;
