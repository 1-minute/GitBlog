import React from 'react';
import styled from 'styled-components';
import { MdLabel } from 'react-icons/md';
const TagListWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TagContent = styled.div`
  margin-left: 10px;
`;

const Tag = styled.span`
  padding: 5px;
  font-size: 12px;
  background: #${(props) => props.color};
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
        <Tag key={tag.id} color={tag.color}>
          {tag.name}
        </Tag>
      ))}
    </TagContent>
  </TagListWrapper>
);

export default TagList;
