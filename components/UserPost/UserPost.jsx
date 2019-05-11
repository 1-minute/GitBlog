import React from 'react';
import styled from 'styled-components';
import TagList from '../TagList';
import dayjs from 'dayjs';
import { MdSchedule } from 'react-icons/md';

const UserPostWrapper = styled.div``;

const PostList = styled.ul``;

const PostContent = styled.div`
  display: flex;
`;

const PostImage = styled.img`
  border-radius: 3px;
  width: 100%;
  height: 150px;
  margin-right: 10px;
`;
const PostImageWrapper = styled.div`
  width: 200px;
  margin-right: 10px;
`;

const PostListItem = styled.li`
  display: flex;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

const PostHeading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`;

const PostDescription = styled.p`
  margin-bottom: 10px;
  color: #4b4b4b;
  font-size: 12px;
  line-height: 18px;
`;

const HelpBlock = styled.span`
  color: #4b4b4b;
  font-size: 12px;
  display: inline-flex;
  align-items: center;
  margin-top: 5px;
`;

const UserPost = ({ posts }) => (
  <UserPostWrapper>
    <PostList>
      {posts &&
        posts.map((post) => (
          <PostListItem key={post.id}>
            <PostContent>
              {post.thumbnail && (
                <PostImageWrapper>
                  <PostImage src={post.thumbnail} />
                </PostImageWrapper>
              )}
              <div style={{ flex: '1' }}>
                <PostHeading>{post.title}</PostHeading>
                <PostDescription>{`${post.plainBody.slice(
                  0,
                  200,
                )}...`}</PostDescription>
                {post.labels.length > 0 && <TagList tags={post.labels} />}
                <HelpBlock>
                  <MdSchedule />
                  <span style={{ marginLeft: '3px' }}>
                    {dayjs(post.createdAt).format('YYYY.MM.DD')}
                  </span>
                </HelpBlock>
              </div>
            </PostContent>
          </PostListItem>
        ))}
    </PostList>
  </UserPostWrapper>
);

export default UserPost;
