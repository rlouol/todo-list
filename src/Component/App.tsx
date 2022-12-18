import React from 'react';
import styled from 'styled-components';
import { Button, Input } from 'Component';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Contents = styled.div`
  display: flex;
  background-color: #FFFFFF;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const InputContainer = styled.div`
  display: flex;
`;

function App() {
  return (
    <Container>
      <Contents>
        <InputContainer>
          <Input placeholder='할 일을 입력해 주세요' onChange={(text) => console.log(text)}/>
          <Button label="추가" onClick={() => alert('추가!')}/>
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;