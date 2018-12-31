import React from 'react';
// import ReactDOM from 'react-dom';
import Typography from '@material-ui/core/Typography';
import styled from "@emotion/styled";

import TodoForm from '../src/components/TodoForm';
import Header from '../src/components/Header';

import TodoList from '../src/components/TodoList';
import useTodoState from '../src/components/useTodoState';

const Container = styled.div`
  margin-top: 100px;
  padding: 18px 22px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
`;
const FormContent = styled.div`
  display: flex;
  justify-content: center;
`;
const ListContent = styled.div`
  padding: 0px 60px;
`;
const FooterTextContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const NotifDescription = styled.div`
  color: #2C2E3C;
  font-family: "Open Sans";
  font-size: 12.87px;
  letter-spacing: 0.13px;
  line-height: 15px;
`;
const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);
    return (
      <div className="App">
        <Header/>
        <Container>
          <Title>
            <Typography component="h1" variant="h2">
               Todo App with React Hooks
            </Typography>
          </Title>
          <FormContent>
          <TodoForm
           saveTodo={todoText => {
             const trimmedText = todoText.trim();

             if (trimmedText.length > 0) {
               addTodo(trimmedText);
             }
           }}
         />
         </FormContent>
         <ListContent>
          <TodoList todos={todos} deleteTodo={deleteTodo} />
         </ListContent>
         <FooterTextContainer>
          <NotifDescription>
              <a href=" https://medium.freecodecamp.org/how-to-build-a-todo-list-with-react-hooks-ebaa4e3db3b">Please find the reference here</a>
          </NotifDescription>
         </FooterTextContainer>
       </Container>
      </div>
    );
  }

export default App;
