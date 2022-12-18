import React from 'react';
import styled from 'styled-components';
import { Button } from 'Component';

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

function App() {
  return (
    <Container>
      <Contents>
        <Button label="삭제" backgroundColor='#FF1744' hoverColor='#F01440'
          onClick={() => alert('삭제!')}/>
      </Contents>
    </Container>
  );
}

export default App;