import React from 'react';
import styled from 'styled-components';
import { MdLabel } from 'react-icons/md';
const TagListWrapper = styled.div`
  display: flex;
`;

const TagContent = styled.div`
  margin-left: 10px;
`;

const Tag = styled.span`
  padding: 5px;
  font-size: 12px;
  background: skyblue;
  color: white;
  border-radius: 3px;
  margin-bottom: 5px;
  margin-right: 5px;
  display: inline-block;
`;

const TagList = ({ tags }) => (
  <TagListWrapper>
    <span>
      <MdLabel />
    </span>
    <TagContent>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </TagContent>
  </TagListWrapper>
);

export default TagList;
