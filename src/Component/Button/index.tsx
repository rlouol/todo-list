import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  background-color: #304FFE;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #1E40FF;
  }
  &:active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

const Label = styled.div`
  color: #FFFFFF;
  font-size: 16px;
`;

export const Button = () => {
  return (
    <Container>
      <Label>추가</Label>
    </Container>
  );
}