import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const UserMenuWrapper = styled.div`
  padding: 1.5rem;
`;

const UserMenuList = styled.ul``;
const UserMenuListItem = styled.li`
  margin-bottom: 25px;
`;

const A = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: #ddd;
  &.active {
    padding-bottom: 3px;
    color: #4b4b4b;
  }
`;

const StyledLink = ({ href, name, className }) => (
  <Link prefetch href={href} passHref>
    <A className={className}>{name}</A>
  </Link>
);

const UserMenu = () => (
  <UserMenuWrapper>
    <UserMenuList>
      <UserMenuListItem>
        <StyledLink href='/posts' name='Posts' className='active' />
      </UserMenuListItem>
      <UserMenuListItem>
        <StyledLink href='/gists' name='Gists' />
      </UserMenuListItem>
      <UserMenuListItem>
        <StyledLink href='/about' name='About' />
      </UserMenuListItem>
    </UserMenuList>
  </UserMenuWrapper>
);

export default UserMenu;
