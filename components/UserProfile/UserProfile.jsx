import React from 'react';
import styled from 'styled-components';
import { MdBusiness, MdLocationOn, MdWeb } from 'react-icons/md';

const UserProfileWrapper = styled.div`
  padding: 1.5rem;
`;

const UserImageWrapper = styled.div``;

const UserImage = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
`;

const NameHeading = styled.h1`
  font-size: 26px;
  margin-top: 15px;
`;

const UserNameHeading = styled.h2`
  font-size: 18px;
  margin-top: 3px;
  color: #4b4b4b;
`;

const UserDescription = styled.p`
  margin: 20px 0;
`;

const ProfileList = styled.ul``;

const ProfileItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const ItemText = styled.span`
  margin-left: 5px;
`;

const A = styled.a`
  color: skyblue;
`;
const UserProfile = ({
  name,
  login,
  avatarUrl,
  bio,
  company,
  location,
  blog,
}) => {
  return (
    <UserProfileWrapper>
      <UserImageWrapper>
        <UserImage src={avatarUrl} />
      </UserImageWrapper>
      <NameHeading>{name}</NameHeading>
      <UserNameHeading>{login}</UserNameHeading>
      <UserDescription>{bio}</UserDescription>
      <ProfileList>
        <ProfileItem>
          <MdBusiness size={18} />
          <ItemText>{company}</ItemText>
        </ProfileItem>
        <ProfileItem>
          <MdLocationOn size={18} />
          <ItemText>{location}</ItemText>
        </ProfileItem>
        <ProfileItem>
          <MdWeb size={18} />
          <ItemText>
            <A href={blog} target='_blank' rel='noreferrer noopener'>
              {blog}
            </A>
          </ItemText>
        </ProfileItem>
      </ProfileList>
    </UserProfileWrapper>
  );
};

export default UserProfile;
