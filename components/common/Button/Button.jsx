import React from 'react';
import styled from 'styled-components';

const colorMap = {
  success: '#5fd65f',
};

const Button = ({ label, onClick, className }) => (
  <button type='button' onClick={onClick} className={className}>
    {label}
  </button>
);

export default styled(Button)`
  background: ${(props) => colorMap[props.type] || '#ddd'};
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  border-radius: 3px;
  border: none;
  outline: none;
  color: white;
`;
