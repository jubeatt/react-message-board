import styled from "styled-components";
import defaultButton from "./common-style";
import { useState } from "react";

const TodoHeaderWrapper = styled.div`
  margin-bottom: 30px;
`;

const TodoInputBlock = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  margin-right: 20px;
  border-radius: 4px;
  border: 1px solid #c7c7c7;
  padding: 8px;

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
  }
`;

const BlueButton = styled.button`
  ${defaultButton}
  border-color: ${(props) => props.theme.blue};
  color: ${(props) => props.theme.blue};
  &:hover {
    background-color: ${(props) => props.theme.blue};
    color: white;
  }
`;

function TodoHeader({ handleAddTodo }) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(inputValue);
    setInputValue("");
  };

  return (
    <TodoHeaderWrapper onSubmit={handleSubmit}>
      <TodoInputBlock>
        <Input value={inputValue} onChange={handleInput}></Input>
        <BlueButton>送出</BlueButton>
      </TodoInputBlock>
    </TodoHeaderWrapper>
  );
}

export default TodoHeader;
