import styled from 'styled-components';

const Container = styled.div`
  background-color: white;
  max-width: 800px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.header`
  margin: 40px 10px 20px;
`;

const SubmitForm = styled.form`
  width: 600px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 20px;
`;

const TodoListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export { Container, Header, SubmitForm, TodoListContainer };
