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

const UserMenu = ({ username, pathname }) => (
  <UserMenuWrapper>
    <UserMenuList>
      <UserMenuListItem>
        <StyledLink
          href={`/${username.toLowerCase()}`}
          name='Posts'
          className={`${pathname === '/user' ? 'active' : ''}`}
        />
      </UserMenuListItem>
      <UserMenuListItem>
        <StyledLink
          href={`/${username.toLowerCase()}/gist`}
          name='Gists'
          className={`${pathname === '/gist' ? 'active' : ''}`}
        />
      </UserMenuListItem>
      <UserMenuListItem>
        <StyledLink
          href={`/${username.toLowerCase()}/about`}
          name='About'
          className={`${pathname === '/about' ? 'active' : ''}`}
        />
      </UserMenuListItem>
    </UserMenuList>
  </UserMenuWrapper>
);

export default UserMenu;
