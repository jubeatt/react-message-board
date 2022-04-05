import styled from "styled-components";
import defaultButton from "./common-style";

const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border: 1px solid #c7c7c7;
  border-radius: 4px;

  & + & {
    margin-top: 8px;
  }
`;
const TodoContent = styled.div`
  max-width: 10em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${(props) => props.$isDone && "text-decoration: line-through;"}
`;
const TodoButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  button ~ button {
    margin-left: 8px;
  }
`;
const GreenButton = styled.button`
  ${defaultButton}
  border-color: ${(props) => props.theme.green};
  color: ${(props) => props.theme.green};
  &:hover {
    background-color: ${(props) => props.theme.green};
  }
  ${(props) =>
    props.$isDone
      ? `
    background-color: ${props.theme.green};
    color: white;`
      : ""}
`;
const RedButton = styled.button`
  ${defaultButton}
  border-color: ${(props) => props.theme.red};
  color: ${(props) => props.theme.red};
  &:hover {
    background-color: ${(props) => props.theme.red};
  }
`;
const OrangeButton = styled.button`
  ${defaultButton}
  border-color: ${(props) => props.theme.orange};
  color: ${(props) => props.theme.orange};
  &:hover {
    background-color: ${(props) => props.theme.orange};
  }
`;

function TodoItem({ todo, handleRemoveTodo, handleToggleTodoState }) {
  const
  
  
  handleButtonClick = (type) =>
    type === "changeState"


      ? () => handleToggleTodoState(todo.id)



      : () => handleRemoveTodo(todo.id);

  return (
    <TodoItemWrapper>
      <TodoContent $isDone={todo.isDone}>{todo.content}</TodoContent>
      <TodoButtonWrapper>
        <GreenButton
          $isDone={todo.isDone}
          onClick={handleButtonClick("changeState")}
        >
          {todo.isDone ? "已完成" : "未完成"}
        </GreenButton>
        <RedButton onClick={handleButtonClick("delete")}>刪除</RedButton>
      </TodoButtonWrapper>
    </TodoItemWrapper>
  );
}

export default TodoItem;
