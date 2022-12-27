import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Input, ToDoItem } from 'Component';

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

const ToDoListContainer = styled.div`
  min-width: 350px;
  height: 400px;
  overflow-y: scroll;
  border: 1px solid #BDBDBD;
  margin-bottom: 20px;
`;

function App() {

  const [toDo, setToDo] = useState('');
  const [toDoList, setToDoList] = useState<string[]>([]);

  const addToDo = (): void => {
    if (toDo) {
      setToDoList([...toDoList, toDo]);
      setToDo('');
    }
  }

  const deleteToDo = (index: number): void => {
    let list = [...toDoList];
    list.splice(index, 1);
    setToDoList(list);
  }

  return (
    <Container>
      <Contents>
        <ToDoListContainer data-testid='toDoList'>
          {toDoList.map((item, index) =>
            <ToDoItem key={item} label={item} onDelete={() => deleteToDo(index)} />)}
        </ToDoListContainer>
        <InputContainer>
          <Input placeholder='할 일을 입력해 주세요' value={toDo} onChange={(text) => setToDo(text)} />
          <Button label="추가" onClick={addToDo} />
        </InputContainer>
      </Contents>
    </Container>
  );
}

export default App;